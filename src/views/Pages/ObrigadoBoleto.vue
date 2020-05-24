
<template id="templateObrigado">
  <ContentWrapper>
    <div class="card b">
      <div class="card-header">
        <div class="nomeLoja mb-4">
          <h3>{{DadosLoja.nome_loja}}</h3>
        </div>
        <div class="media mt-0 float-left pull-left">
          <div class="media-body">
            <h5
              class="m-0 text-bold"
            >Obrigada, {{toCamelCase(getDadosCliente().nome.split(" ")[0])}}!</h5>
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
                    <a
                      v-bind:href="dadosStore.order.order_status_url"
                      target="_blank"
                    >{{this.dadosStore.order.order_number}}</a>
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
  created() {
    API_NOTIFICATION.ShowLoading();
    this.getDadosCompra();
  },
  components: {
    UpSellCard
  },
  data() {
    return {
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
      if (sessionStorage.getItem("DadosCheckout") != null) {
        this.DadosCheckout = JSON.parse(
          sessionStorage.getItem("DadosCheckout")
        );
      }
      if (sessionStorage.getItem("dadosCliente") != null) {
        this.dadosCliente = JSON.parse(sessionStorage.getItem("dadosCliente"));
        this.dadosStore = JSON.parse(this.dadosCliente.dadosCompra.dataStore);
        //console.log(this.dadosCliente);
        //console.log(this.dadosStore.order.order_number);
      }
      if (sessionStorage.getItem("DadosLoja") != null) {
        this.DadosLoja = UTILIS_API.GetDadosLojaSession();
        //console.log(this.DadosLoja);
      }      
      API_FACEBOOK_PIXEL.TriggerFacebookEvent('Purchase', 'boleto');
      API_GOOGLE_PIXEL.TriggerGoogleEvent('purchase', 'boleto');
      API_NOTIFICATION.HideLoading();
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
    downloadBoleto() {
      "application/json"
      var url = "";
      if (this.DadosCheckout.gateway == 1) {
        url = this.dadosCliente.dadosCompra.transaction_details
          .external_resource_url;
      }
      if(this.DadosCheckout.gateway == 2){
        this.Links = JSON.parse(this.dadosCliente.dadosCompra.dataGateway).links;
        url = this.Links.find(x => x.media == "application/pdf").href;
      }
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
      if (this.DadosCheckout.gateway == 1)
        return this.dadosCliente.dadosCompra.dataGateway.barcode.content;
      if (this.DadosCheckout.gateway == 2)
        return  JSON.parse(this.dadosCliente.dadosCompra.dataGateway).payment_method.boleto
          .formatted_barcode;
    },
    getDadosCliente() {
      return this.dadosCliente;
    },
    
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