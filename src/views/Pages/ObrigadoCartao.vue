
<template id="templateObrigado">
  <ContentWrapper>
    <div class="card b">
      <div class="card-header">
        <div class="nomeLoja mb-4">
          <h3>{{DadosLoja.nome_loja}}</h3>
        </div>
        <div class="media mt-0 float-left pull-left">
          <div class="media-body">
            <h5 class="m-0 text-bold">Obrigada, {{toCamelCase(dadosCliente.nome.split(" ")[0])}}!</h5>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-8">
            <h4>Compra realizada com sucesso!</h4>

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
            <up-sell-card @recalcula="comprarComUmClique()" :noCheckout="2"></up-sell-card>
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
  components:{
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
    voltarLoja() {
      window.location.href = "http://" + this.DadosLoja.url_loja;
    },
    comprarComUmClique(){

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
    width: 100%!important;
  }
}
</style>