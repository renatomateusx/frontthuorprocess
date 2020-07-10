
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
          <div class="col-xl-8">
            <h4>Compra realizada com sucesso!</h4>
            <small>Você vai receber um e-mail com os detalhes do seu pedido.</small>
            <div class>
              <div class>
                <h4 class="mt-4 mb-0">
                  Pedido:
                  <strong>
                    <a v-bind:href="getURLBoleto()" target="_blank">{{getOrderNumber()}}</a>
                  </strong>
                </h4>
              </div>
              <small>Clique no número do pedido para ver detalhes da compra.</small>
            </div>
            <up-sell-card @update="getDadosCompra()" :noCheckout="2"></up-sell-card>
            <h4 class="mt-4">Informação Importante:</h4>
            <p
              class="mt-2 text-justify"
            >Sua compra foi autorizada e assim que a operadora do seu cartão de crédito nos enviar a autorização, procederemos com o envio. Mas não se preocupe, sua encomenda já está reservada.</p>
          </div>
          <div class="col-xl-12">
            <button
              class="btn btn-success btnDownload display-inline"
              v-on:click="voltarLoja()"
            >Voltar para a loja</button>
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
// Import stylesheet
import API_FACEBOOK_PIXEL from "../../api/pixelFacebookTrigger";
import API_GOOGLE_PIXEL from "../../api/pixelGoogleTrigger";

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS from "../../utilis/utilis.js";
import UpSellCard from "../../components/Cart/UpSellCard";
import API_CARRINHO_ABANDONADO from '../../api/carrinhoAbandonadoAPI';
export default {
  template: `#templateObrigado`,
  async created() {
    API_NOTIFICATION.ShowLoading();
    this.getDadosCompra();
    API_FACEBOOK_PIXEL.InsertScript().then(res => {
      API_FACEBOOK_PIXEL.TriggerFacebookEvent("Purchase", "");
    });
    API_GOOGLE_PIXEL.InsertScript().then(resG => {
      API_GOOGLE_PIXEL.TriggerGoogleEvent("purchase", "");
    });
  },
  components: {
    UpSellCard
  },
  data() {
    return {
      dadosCliente: {},
      dadosStore: {},
      DadosLoja: {}
    };
  },
  methods: {
    sleep(seconds) {
      return new Promise(r => setTimeout(r, seconds));
    },
    async getDadosCompra() {
      this.dadosCliente = await UTILIS_API.GetDadosClientesSession();
      this.dadosStore = JSON.parse(this.dadosCliente.dadosCompra.dataStore);
      this.DadosLoja = await UTILIS_API.GetDadosLojaSession();
      const LLimite = await this.processaQuantidadeLimite();
      const LCarrinho = await UTILIS_API.GetAbandonCartSession();
      if (LCarrinho) {
          const LReturnUpdateCarrinho = await API_CARRINHO_ABANDONADO.UpdateStatusCarrinho(1, LCarrinho);
      }
      if (this.DadosLoja) {
        if (this.DadosLoja.limpa_carrinho == 1) {
          sessionStorage.removeItem("cart");
        }
      }
      const LCrypto = await UTILIS_API.GetDadosCriptoSession();
      API_NOTIFICATION.HideLoading();
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
    getURLBoleto() {
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
  background-color: gray;
  cursor: pointer !important;
  color: white;
}
.nomeLoja {
  font-size: 20px;
}
.textInformativo {
  font-size: 13px;
}
.btnDownload {
  float: left !important;
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