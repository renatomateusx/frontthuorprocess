<template>
  <ContentWrapper>
    <div ref="container" v-show="canRender"></div>
    <div ref="containerBlocked" v-show="!canRender">
      <bloqueio-compra></bloqueio-compra>
    </div>
  </ContentWrapper>
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
import BloqueioCompra from "../Checkouts/BloqueioCheckout";
import constantes from '../../api/constantes';
import moment from "moment";
import API_CARRINHO_ABANDONADO from '../../api/carrinhoAbandonadoAPI';

var md5 = require("md5");

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
  async created() {
    API_NOTIFICATION.ShowLoading();
    this.fretes = await UTILIS_API.GetFretesSession();
    //console.log(this.fretes);
    this.checkURL();
  },
  components: {
    BloqueioCompra
  },
  computed: {},
  data() {
    return {
      canRender: true,
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
      this.dadosLoja = await UTILIS_API.GetDadosLojaSession();
      this.getCheckouts();
      this.getPixels();
      //console.log("loja", dadosLoja);

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
        const ttrack = params.searchParams.get("ttrack");
        if (ttrack && ttrack != undefined) {
          UTILIS_API.SetTtrackSession(ttrack);
        }
        for (var i = 0; i < qtdItems; i++) {
          var lpro = await this.pushProducts(
            params.searchParams.get("produto_option_id[" + i + "]"),
            params.searchParams.get("produto_option_quantity[" + i + "]"),
            params.searchParams.get("produto_option_variante_id[" + i + "]")
          );
          //console.log("LPro", lpro);
          this.produtosCart.push(lpro);
        }
        this.getDadosLoja();
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
        if (LCart) {
          const LPrepareCarrinhoAbandonado = await this.prepareAbandonCart(LCart);
          this.dadosLoja = UTILIS_API.GetDadosLojaSession();
          this.produtosCart = JSON.parse(LCart);
        } else {
          this.canRender = false;
          window.location.href = await this.getURLLoja();
        }
      }
    },
    prepareAbandonCart(LCart) {
      return new Promise((resolve, reject) => {
        var LURLCartEmail = constantes.WEBSITE_CART
        var LTitulo = "";
        var LRetornoID = [];
        try {
          const LocalCart = JSON.parse(LCart);
          LocalCart.forEach(async (objCart, i)=>{
            var PathLink = "produto_option_id[" + i + "]={idProd}&produto_option_quantity[" + i + "]={quantidade}&produto_option_variante_id[" + i + "]={variante}&";
            LURLCartEmail = constantes.WEBSITE_CART + PathLink.replace("{idProd}", objCart.id_thuor).replace("{quantidade}", objCart.quantity).replace("{variante}", objCart.variant_id);
            LURLCartEmail += "redirectTo=cart";
            LTitulo = objCart.title + " - " + objCart.variant_title + "";
            var LBodyCarrinho = {
              valor_produto: objCart.variant_price,
              nome_cliente: null,
              email_cliente: null,
              telefone_cliente: null,
              token_push_cliente: null,
              produtos: LTitulo,
              produtos_skus: objCart.variant_id,
              link_compra: LURLCartEmail,
              criado_em: moment().format(),
              modificado_em: null,
              status: 0,
              campanha_enviar: 0
            }
            const LRetorno = await API_CARRINHO_ABANDONADO.SaveCarrinho(LBodyCarrinho);
            LRetornoID.push(LRetorno);
            UTILIS_API.SetAbandonCartSession(LRetornoID);
          });          
          
          resolve(1);  

        } catch (error) {
          console.log("Erro ao preparar o carrinho abandonado", error);
          reject(error);
        }
      });
    },
    getURLLoja() {
      return new Promise((resolve, reject) => {
        try {
          if (this.dadosLoja.url_loja) {
            const url = "https://" + this.dadosLoja.url_loja;
            resolve(url);
          } else {
            resolve(0);
          }
        } catch (error) {
          console.log("Erro ao verificar se a loja está aqui", error);
        }
      });
    },
    async getDadosLoja() {
      //API_NOTIFICATION.ShowLoading();
      var params = new URL(window.location.href);
      const store = params.searchParams.get("store");
      if (store) {
        API_LOJA.GetDadosLoja(store)
          .then(res => {
            const LojaData = res.data;
            this.dadosLoja = LojaData;
            UTILIS_API.SetDadosLojaSession(LojaData);
          })
          .catch(error => {
            console.log("Erro ao pegar dados da Loja", error);
          });
      }
    },
    getCheckouts() {
      API_CHECKOUT.GetCheckouts()
        .then(async retornoCheckout => {
          if (!retornoCheckout.data) {
            this.canRender = false;
            API_NOTIFICATION.HideLoading();
          }
          this.DadosCheckout = retornoCheckout.data;
          UTILIS_API.SetDadosCheckoutSession(this.DadosCheckout);
          const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
          if (this.DadosCheckout.limite_ip > 0) {
            UTILIS_API.getIPRequest().then(async res => {
              const LIP = await UTILIS_API.GetLimiteCheckoutSession();
              if (LIP) {
                var dt = new Date();
                if (
                  LIP.store == LDadosLoja.url_loja &&
                  LIP.ip == res.ip &&
                  LIP.qtd == this.DadosCheckout.limite_ip &&
                  LIP.time >= dt.getTime()
                ) {
                  this.canRender = false;
                } else {
                  this.canRender = true;
                }
              }
            });
          }
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
        "https://maf.pagosonline.net/ws/fp/tags.js?id=" + SessionID + "80200"
      );
      pluginPayU.async = true;
      document.head.appendChild(pluginPayU);
    },
    async iniciaCheckout() {
      this.LUp = sessionStorage.setItem("up", "0");
      if (this.DadosCheckout.gateway == 1) {
        const LCheckMP = await this.FCheckoutMP();
      } else if (this.DadosCheckout.gateway == 2) {
        const LCheckPS = await this.FCheckoutPS(this.DadosCheckout);
      } else if (this.DadosCheckout.gateway == 3) {
        const LCheckPayU = await this.FCheckoutPayU(this.DadosCheckout);
      }
    },
    sleep(seconds) {
      return new Promise(r => setTimeout(r, seconds));
    },
    getPixels() {
      API_PIXEL.GetPixels()
        .then(resPixels => {
          UTILIS_API.SetPixelSession(resPixels.data);
          API_FACEBOOK_PIXEL.InsertScript().then(res => {
            API_FACEBOOK_PIXEL.TriggerFacebookEvent("InitiateCheckout");
          });
          API_GOOGLE_PIXEL.InsertScript().then(resG => {
            API_GOOGLE_PIXEL.TriggerGoogleEvent("begin_checkout");
          });
        })
        .catch(error => {
          console.log("Erro ao pegar dados do Pixels", error);
        });
    }
  }
};
</script>
