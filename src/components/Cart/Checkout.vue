<template>
  <div ref="container"></div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import Multiselect from "vue-multiselect";
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
import LoadScript from "vue-plugin-load-script";
import CheckoutMP from "./CheckoutMP.vue";
Vue.use(LoadScript);

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

Vue.component("multiselect", Multiselect);
Vue.use(money, { precision: 2 });

Vue.mixin({
  data: function() {
    return {};
  }
});

export default {
  created() {
    API_NOTIFICATION.ShowLoading();
    if (sessionStorage.getItem("fretes") != null) {
      this.fretes = JSON.parse(sessionStorage.getItem("fretes"));
      //console.log(fretes);
    }    
    this.checkURL();
  },
  computed: {},
  data() {
    return {
      price: 123.45,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */
      },
      componenteMPLoaded: "",
      DadosCheckout: {},
      produtosCart: [],
      fretes: [],
      freteSelecionado: -1,
      dadosLoja: {},
      nomeLoja: "",
      currentStep: 1,
      nome_completo: "",
      telefone: "",
      cpf: "",
      email: "",
      CEP: "",
      endereco: "",
      numero_porta: "",
      bairro: "",
      complemento: "",
      destinatario: "",
      cidade: "",
      estado: "",
      parcelas: "",
      codigo_seguranca: "",
      cpf_titular: "",
      nome_titular: "",
      validade: "",
      cardToken: "",
      card_number: "",
      payment_id: "",
      stepDadosPessoaisFinalizados: 0,
      stepDadosEnderecoFinalizados: 0,
      valorTotalCompra: 0,
      valorFrete: 0,
      formaPagamento: "any",
      ImageProcessor: "",
      vueSelectValue: "",
      totalQuantity: 0,
      granTotal: 0,
      granDesconto: 0,
      granQuantity: 0,
      granSubTotal: 0
    };
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.onload = function() {
      this.componenteMPLoaded = 1;
      console.log("Carregado Script MP", this.componenteMPLoaded);
    };
    plugin.setAttribute(
      "src",
      "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
    );
    plugin.async = true;

    document.head.appendChild(plugin);
  },
  methods: {
    async checkURL() {
      var url = window.location.href;
      if (sessionStorage.getItem("DadosLoja") != null) {
        this.dadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        this.getCheckouts();
        //console.log("loja", dadosLoja);
      }

      if (url.includes("items")) {
        //console.log("0");
        sessionStorage.removeItem("cart");
        var newURL = url.split("items");

        const produtos = [],
          variantes = [],
          quantidade = [];
        var params = new URL(window.location.href);
        const cart_token = params.searchParams.get("cart_token");
        const isShopify = params.searchParams.get("isShopify");
        const limpa_carrinho = params.searchParams.get("limpa_carrinho");
        const qtdItems = params.searchParams.get("qtd_items");
        const redirectTo = params.searchParams.get("redirectTo");
        this.getDadosLoja();
        for (var i = 0; i < qtdItems; i++) {
          var lpro = await this.pushProducts(
            params.searchParams.get("produto_option_id[" + i + "]"),
            params.searchParams.get("produto_option_quantity[" + i + "]"),
            params.searchParams.get("produto_option_variante_id[" + i + "]")
          );
          //console.log("LPro", lpro);
          this.produtosCart.push(lpro);
        }
        sessionStorage.setItem("cart", JSON.stringify(this.produtosCart));
        
        //GUARDA O [1] PARA USAR COMO QUISER.
        window.location.href = newURL[0];
        if (redirectTo == "checkout") {
          this.$router.push("/checkout");
        }
        if (redirectTo == "cart") {
          this.$router.push("/cart");
        }
      } else {
        //console.log("1");
        const LCart = sessionStorage.getItem("cart");
        this.dadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        this.produtosCart = JSON.parse(LCart);
        
      }
    },

    async getDadosLoja() {
      //API_NOTIFICATION.ShowLoading();
      var params = new URL(window.location.href);
      const store = params.searchParams.get("store");
      API_LOJA.GetDadosLoja(store)
        .then(res => {
          const LojaData = res.data;
          this.dadosLoja = LojaData;
          sessionStorage.setItem("DadosLoja", JSON.stringify(this.dadosLoja));
        })
        .catch(error => {
          console.log("Erro ao pegar dados da Loja", error);
        });
    },
    getCheckouts() {
      API_LOJA.GetCheckouts()
        .then(retornoCheckout => {
          this.DadosCheckout = retornoCheckout.data;
          if (this.DadosCheckout.gateway == 1) {
            //INSERE FORM AUXILIAR PARA ENVIAR AO MP --- ELE DEVOLVE O TOKEN
           
              this.iniciaCheckout();
            
          }
        })
        .catch(error => {
          console.log("Erro ao tentar pegar dados do checkout", error);
        });
    },
    async iniciaCheckout() {
      if (this.DadosCheckout.gateway == 1) {
        await this.sleep(1000);
        if (window.Mercadopago != undefined) {
          var ComponentClass = Vue.extend(CheckoutMP);
          var instance = new ComponentClass();
          instance.$mount(); // pass nothing
          this.$refs.container.appendChild(instance.$el);
          this.ImageProcessor =
            "http://github.bubbstore.com/gateways-e-adquirentes/mercado-pago-icon.svg";
          window.Mercadopago.setPublishableKey(
            this.DadosCheckout.chave_publica
          );
          API_NOTIFICATION.HideLoading();
          //console.log(Mercadopago.getIdentificationTypes());
        }else{
          await this.sleep(1000);
          this.iniciaCheckout();
        }
      }
    },
    sleep(seconds){
      return new Promise(r => setTimeout(r, seconds));
    }
  }
};
</script>
