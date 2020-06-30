
<template id="templateObrigado">
  <ContentWrapper>
    <div class="card b">
      <div class="card-header">
        <div class="nomeLoja mb-4">
          <h3>{{DadosLoja.nome_loja}}</h3>
        </div>
        <div class="media mt-0 float-left pull-left">
          <div class="media-body">
            <h5 class="m-0 text-bold">Obrigada, {{getNomeCliente()}}!</h5>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-12 btn-block">
            <h4>Compra realizada com sucesso!</h4>
            <h5>Sua compra foi realizada através de boleto.</h5>
            <small>Você vai receber um e-mail com os detalhes do seu pedido.</small>
            <div class>
              <div class>
                <h4 class="mt-4 mb-0">
                  Pedido:
                  <strong>
                    <a v-bind:href="getURLLoja()" target="_blank">{{getOrderNumber()}}</a>
                  </strong>
                </h4>
              </div>
              <small>Clique no número do pedido para ver detalhes da compra.</small>
            </div>
            <h4 class="mt-4">Informação Importante:</h4>
            <p
              class="mt-2 text-justify"
            >Somente quando recebermos a confirmação, em até 72h após o pagamento, seguiremos com o envio das suas compras. O prazo de entrega passa a ser contado somente após a confirmação do pagamento.</p>
          </div>
          <up-sell-card @update="getDadosCompra()" :noCheckout="2" class="mb-3"></up-sell-card>
          <div class="col-xl-12">
            <button
              class="btn btn-success btnDownload pull-right float-right"
              v-on:click="downloadBoleto()"
            >Download do Boleto</button>
          </div>
          <div class="col-xl-12 divBarCode mt-2" @click.stop.prevent="copyToClip(getBarCode())">
            <h4
              class="mt-2 mb-2 text-justify textInformativo"
            >Para facilitar, você pode clicar em qualquer lugar deste quadrado para copiar o código de barras:</h4>
            <h5 class="text-center">{{getBarCode()}}</h5>
          </div>
          <div class="col-xl-12 mt-2">
            <button class="btn btn-success btnDownload" v-on:click="voltarLoja()">Voltar para a loja</button>
          </div>
        </div>
      </div>
      <input type="hidden" id="copyClipBoard" />
    </div>
  </ContentWrapper>
</template>
<script>
import Vue from "vue";
import money from "v-money";
import API_NOTIFICATION from "../../api/notification";
import API_PRODUTOS from "../../api/produtosAPI";
import API_LOJA from "../../api/lojaAPI";
import UTILIS_API from "../../api/utilisAPI";
import API_CHECKOUT from "../../api/checkoutAPI";
import API_FACEBOOK_PIXEL from "../../api/pixelFacebookTrigger";
import API_GOOGLE_PIXEL from "../../api/pixelGoogleTrigger";

// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS from "../../utilis/utilis.js";
import UpSellCard from "../../components/Cart/UpSellCard";
export default {
  template: `#templateObrigado`,
  async created() {
    API_NOTIFICATION.ShowLoading();
    this.getDadosCompra();

    API_FACEBOOK_PIXEL.InsertScript().then(res => {
      API_FACEBOOK_PIXEL.TriggerFacebookEvent("Purchase", "boleto");
    });
    API_GOOGLE_PIXEL.InsertScript().then(resG => {
      API_GOOGLE_PIXEL.TriggerGoogleEvent("purchase", "boleto");
    });    
  },
  components: {
    UpSellCard
  },
  data() {
    return {
      barCode: "",
      dadosCliente: {},
      dadosStore: {},
      DadosLoja: {},
      DadosCheckout: {},
      Links: []
    };
  },
  methods: {
    sleep(seconds) {
      return new Promise(r => setTimeout(r, seconds));
    },
    getDadosCompra() {
      try {
        UTILIS_API.GetDadosClientesSession().then(async resCliente => {
          this.dadosCliente = resCliente;
          this.dadosStore = JSON.parse(this.dadosCliente.dadosCompra.dataStore);
          this.DadosLoja = await UTILIS_API.GetDadosLojaSession();
          const LLimite = await this.processaQuantidadeLimite();
          if (this.DadosLoja) {
            if (this.DadosLoja.limpa_carrinho == 1) {
              sessionStorage.removeItem("cart");
            }
          }
          const LCrypto = await UTILIS_API.GetDadosCriptoSession();
          // console.log("C", LCrypto);
          //const SendEmailBoleto = await UTILIS_API.SEND_EMAIL_BOLETO(LCrypto, this.getOrderNumber());
          API_NOTIFICATION.HideLoading();
        });
      } catch (error) {
        console.log("Erro ao recuperar dados da compra", error);
      }
    },
    processaQuantidadeLimite() {
      return new Promise(async (resolve, reject) => {
        try {
          const LDadosCheckout = await UTILIS_API.GetDadosCheckoutSession();
          if (LDadosCheckout.limite_ip > 0) {
            var qtd = 0;
            const LLimite = await UTILIS_API.GetLimiteCheckoutSession();
            if (LLimite) {
              qtd = LLimite.qtd + 1;
            } else {
              qtd += 1;
            }
            UTILIS_API.getIPRequest()
              .then(resIP => {
                var dt = new Date();
                dt.setHours(dt.getHours() + 1);
                var LLoja = {
                  ip: resIP.ip,
                  store: this.DadosLoja.url_loja,
                  qtd: qtd,
                  time: dt.getTime()
                };
                UTILIS_API.SetLimiteCheckoutSession(LLoja);
                resolve(1);
              })
              .catch(error => {
                resolve(0);
              });
          } else {
            resolve(1);
          }
        } catch (error) {
          reject(error);
        }
      });
    },
    copyToClip(comp) {
      document.getElementById("copyClipBoard").value = comp;
      let textToCopy = document.querySelector("#copyClipBoard");
      textToCopy.setAttribute("type", "text");
      textToCopy.select();

      var sucessoCopy = document.execCommand("copy");
      var msg = sucessoCopy ? "sucesso" : "erro";
      if (msg === "sucesso") {
        API_NOTIFICATION.showNotification("Copiado!", "success");
      } else {
        API_NOTIFICATION.showNotification(
          "Erro ao copiar. Tente novamente.",
          "error"
        );
      }
      textToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    async downloadBoleto() {
      "application/json";
      var url = "";
      url = this.dadosCliente.dadosCompra.dadosComprador.dadosComprador
        .urlBoleto;
      //console.log("Download Boleto", url);
      this.openInNewTab(url);
    },
    toCamelCase(str) {
      var LStr = str.split("");
      var LSTR2 = "";
      LStr.forEach((obj, i) => {
        if (i == 0) LSTR2 = LSTR2 + obj.toString().toUpperCase();
        if (i > 0) LSTR2 = LSTR2 + obj.toString().toLowerCase();
      });

      return LSTR2;
    },
    openInNewTab(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    voltarLoja() {
      window.location.href = "http://" + this.DadosLoja.url_loja;
    },
    getBarCode() {
      if (this.dadosCliente.dadosCompra) {
        return this.dadosCliente.dadosCompra.dadosComprador.dadosComprador
          .barcode;
      }
      return "";
    },
    getDadosCliente() {
      return this.dadosCliente;
    },
    getNomeCliente() {
      const LNome = this.getDadosCliente().nome;
      if (LNome) {
        var LN = LNome.split(" ")[0];
        LN = this.toCamelCase(LN);
        return LN;
      }
      return "";
    },
    getURLLoja() {
      const LURL = this.dadosStore.order;
      if (LURL) {
        return LURL.order_status_url;
      }
      return "";
    },
    getOrderNumber() {
      const Order = this.dadosStore.order;
      if (Order) {
        return Order.order_number;
      }
      return "";
    }
  }
};
</script>
<style scoped>
.divBarCode {
  background-color: #d8d8d8;
  cursor: pointer !important;
  color: gray;
}
.nomeLoja {
  font-size: 20px;
}
.textInformativo {
  font-size: 13px;
}
@media only screen and (max-width: 992px) {
  .btnDownload {
    display: block !important;
  }
}
@media only screen and (max-width: 767px) {
  .btnDownload {
    width: 100% !important;
  }
}
</style>