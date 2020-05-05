
<template id="templateObrigado">
  <ContentWrapper>
    <div class="card b">
      <div class="card-header">
        <div class="nomeLoja mb-4"><h3>{{DadosLoja.nome_loja}}</h3></div>
        <div class="media mt-0 float-left pull-left">
          <div class="media-body">
            <h5
              class="m-0 text-bold"
            >Obrigada, {{toCamelCase(dadosCliente.nome.split(" ")[0])}}!</h5>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-12 btn-block">
            <h4>Compra realizada com sucesso!</h4>
            <h5>Sua compra foi realizada através de boleto.</h5>
            <div class="">
              <div class="">
                <h4 class="mt-4 mb-0">
                  Pedido:
                  <strong><a v-bind:href="dadosStore.order.order_status_url" target="_blank">{{this.dadosStore.order.order_number}}</a></strong>
                </h4>
              </div>
              <small>Clique no número do pedido para ver detalhes da compra.</small>
            </div>
            <h4 class="mt-4">Informação Importante:</h4>
            <p
              class="mt-2 text-justify"
            >Somente quando recebermos a confirmação, em até 72h após o pagamento, seguiremos com o envio das suas compras. O prazo de entrega passa a ser contado somente após a confirmação do pagamento.</p>
          </div>
          <div class="col-xl-12">
            <button
              class="btn btn-success btnDownload pull-right float-right"
              v-on:click="downloadBoleto()"
            >Download do Boleto</button>
          </div>
          <div
            class="col-xl-12 divBarCode mt-2"
            @click.stop.prevent="copyToClip(dadosCliente.dadosCompra.dataGateway.barcode.content)"
          >
            <h4
              class="mt-2 mb-2 text-justify textInformativo "
            >Para facilitar, você pode clicar em qualquer lugar deste quadrado para copiar o código de barras:</h4>
            <h5 class="text-center">{{this.dadosCliente.dadosCompra.dataGateway.barcode.content}}</h5>
          </div>
          <div class="col-xl-12 mt-2">
            <button
              class="btn btn-success btnDownload"
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

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS from "../../utilis/utilis.js";

export default {
  template: `#templateObrigado`,
  created() {
    API_NOTIFICATION.ShowLoading();
    this.getDadosCompra();
  },
  data() {
    return {
      dadosCliente: {},
      dadosStore: {},
      DadosLoja:{}
    };
  },
  methods: {
    sleep(seconds) {
      return new Promise(r => setTimeout(r, seconds));
    },
    getDadosCompra() {
      if (sessionStorage.getItem("dadosCliente") != null) {
        this.dadosCliente = JSON.parse(sessionStorage.getItem("dadosCliente"));
        this.dadosStore = JSON.parse(this.dadosCliente.dadosCompra.dataStore);
        //console.log(this.dadosCliente);
        //console.log(this.dadosStore.order.order_number);
      }
      if (sessionStorage.getItem("DadosLoja") != null) {
        this.DadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        //console.log(this.DadosLoja);
      }
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
      const url = this.dadosCliente.dadosCompra.transaction_details
        .external_resource_url;
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
    voltarLoja(){
        window.location.href= "http://"+ this.DadosLoja.url_loja;
    }
  }
};
</script>
<style scoped>
.divBarCode {
  background-color: #D8D8D8;
  cursor: pointer !important;
  color: gray;
}
.nomeLoja{
    font-size: 20px;
}
.textInformativo{
    font-size: 13px;
}
@media only screen and (max-width: 992px) {
  .btnDownload {
    display: block !important;
  }
}
@media only screen and (max-width: 767px) {
  .btnDownload {
    width: 100%!important;
  }
}
</style>