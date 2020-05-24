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
import API_CHECKOUT_PS from "../../api/checkoutPSAPI";
// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS from "../../utilis/utilis.js";
import LoadScript from "vue-plugin-load-script";
import CheckoutMP from "./CheckoutMP.vue";
import CheckoutPS from "./CheckoutPS.vue";
import CheckoutPayU from "./CheckoutPayU.vue";
import API_FACEBOOK_PIXEL from "../../api/pixelFacebookTrigger";
import API_GOOGLE_PIXEL from "../../api/pixelGoogleTrigger";
import API_PIXEL from "../../api/pixelsAPI";
var md5 = require('md5');

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
  mounted() {},
  methods: {
    async checkURL() {
      var url = window.location.href;
      if (sessionStorage.getItem("DadosLoja") != null) {
        this.dadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        this.getCheckouts();
        this.getPixels();
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
          UTILIS_API.SetDadosLojaSession(LojaData);
        })
        .catch(error => {
          console.log("Erro ao pegar dados da Loja", error);
        });
    },
    getCheckouts() {
      API_CHECKOUT.GetCheckouts()
        .then(retornoCheckout => {
          this.DadosCheckout = retornoCheckout.data;
          sessionStorage.setItem("DadosCheckout", JSON.stringify(this.DadosCheckout));
          this.iniciaCheckout();
        })
        .catch(error => {
          console.log("Erro ao tentar pegar dados do checkout", error);
        });
    },
    async FCheckoutMP() {
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
      await this.sleep(1000);
      if (window.Mercadopago != undefined) {
        var ComponentClass = Vue.extend(CheckoutMP);
        var instance = new ComponentClass();
        instance.$mount(); // pass nothing
        this.$refs.container.appendChild(instance.$el);
        this.ImageProcessor =
          "http://github.bubbstore.com/gateways-e-adquirentes/mercado-pago-icon.svg";
        window.Mercadopago.setPublishableKey(this.DadosCheckout.chave_publica);
        API_NOTIFICATION.HideLoading();
        //console.log(Mercadopago.getIdentificationTypes());
        return true;
      } else {
        await this.sleep(1000);
        this.FCheckoutMP();
      }
    },
    async FCheckoutPS(PDadosCheckout) {
      const pluginPS = document.createElement("script");
      pluginPS.onload = function() {
        this.componenteMPLoaded = 1;
        console.log("Carregado Script PS", this.componenteMPLoaded);
      };
      pluginPS.setAttribute(
        "src",
        "https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js"
      );
      pluginPS.async = true;
      document.head.appendChild(pluginPS);
      await this.sleep(1000);
      if (PagSeguro !== undefined) {
        console.log(PagSeguro);
        var ComponentClassCheckoutPS = Vue.extend(CheckoutPS);
        var instanceCheckoutPS = new ComponentClassCheckoutPS();
        instanceCheckoutPS.$mount(); // pass nothing
        this.$refs.container.appendChild(instanceCheckoutPS.$el);
        API_NOTIFICATION.HideLoading();
        return true;
      } else {
        await this.sleep(1000);
        this.FCheckoutPS();
      }
    },
    async FCheckoutPayU(PDadosCheckout) {
      var self = this;
      const SessionID = Date.now();
      const pluginPayU = document.createElement("script");
      pluginPayU.onload = async function() {
        console.log("Carregado Script PayU");
        await self.sleep(1000);      
        var ComponentClassCheckoutPayU = Vue.extend(CheckoutPayU);
        var instanceCheckoutPayU = new ComponentClassCheckoutPayU();
        instanceCheckoutPayU.$mount(); // pass nothing
        self.$refs.container.appendChild(instanceCheckoutPayU.$el);
        API_NOTIFICATION.HideLoading();
        return true;      
      };
      pluginPayU.setAttribute(
        "src",
        "https://maf.pagosonline.net/ws/fp/tags.js?id="+SessionID+"80200"
      );
      pluginPayU.async = true;
      document.head.appendChild(pluginPayU);      
    },
    async iniciaCheckout() {
      console.log("Gateway", this.DadosCheckout.gateway);
      this.LUp = sessionStorage.setItem('up', '0');
      if (this.DadosCheckout.gateway == 1) {
        const LCheckMP = await this.FCheckoutMP();
      } else if (this.DadosCheckout.gateway == 2) {
        const LCheckPS = await this.FCheckoutPS(this.DadosCheckout);
      } else if(this.DadosCheckout.gateway == 3){
        const LCheckPayU = await this.FCheckoutPayU(this.DadosCheckout);
      }
    },
    sleep(seconds) {
      return new Promise(r => setTimeout(r, seconds));
    },
    getPixels(){
      API_PIXEL.GetPixels()
      .then((resPixels)=>{
        sessionStorage.setItem("pixels", JSON.stringify(resPixels.data));
        API_FACEBOOK_PIXEL.InsertScript();
        API_GOOGLE_PIXEL.InsertScript();
        API_FACEBOOK_PIXEL.TriggerFacebookEvent('InitiateCheckout');
        API_GOOGLE_PIXEL.TriggerGoogleEvent('begin_checkout');
      })
      .catch((error)=>{
        console.log("Erro ao pegar dados do Pixels", error);
      })
    }
  }
};
</script>
