<style scoped>
.card-flat {
  margin-top: 80px !important;
}
.bg-dark {
  background-color: #23b7e5 !important;
}
.spanNome {
  font-size: 20px;
  font-weight: 700;
}
.CheckoutStatusInativo {
  border-radius: 50% !important;
  background-color: red;
  height: 20px;
  width: 20px;
}
.CheckoutStatusAtivo {
  border-radius: 50% !important;
  background-color: green;
  height: 20px;
  width: 20px;
}
.imgIntegracao {
  width: 120px;
  height: auto;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-donate"></span>Checkouts
    </div>
    <strong>
      Todos os checkouts que fazemos integração estão aqui.
      <br />
      <small>Caso queira integrar com outro gateway de pagamento, por favor, mande-nos um e-mail {support@thuor.com} e solicite inclusão. Teremos prazer em lhe atender.</small>
    </strong>

    <div class="row mt-3" v-for="{id, nome} in checkoutList" :key="id">
      <div class="col-xl-4">
        <!-- Aside card-->
        <div class="card b">
          <div class="card-body bb">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome">{{nome}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>
      <div class="col-xl-8">
        <!-- Main card-->
        <div class="card b">
          <div class="card-header">
            <div class="my-2 row p-0">
              <img
                class="mr-2 img-fluid thumb24 col-md-2 imgIntegracao mt-2"
                v-bind:src="getImageIntegracaoCheckout(id)"
                alt="App"
              />
              <span class="col-md-5 mt-2">{{getApelidoByID(id)}}</span>
              <button
                class="btn btn-info col-md-3"
                v-on:click="acaoVerEditarIntegracaoCheckout(id)"
              >
                <span class="fa fa-edit">Criar / Editar</span>
              </button>
              <div class="float-right mt-2 col-md-1">
                <span class="pull-right float-right" v-bind:class="getStatusClassByID(id)"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- End Main card-->
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

import API_NOTIFICATION from "../../api/notification";

// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_CHECKOUT from "../../api/checkoutAPI";
import API_HEADERS from "../../api/configAxios";
import API_LOJA from '../../api/lojaAPI';

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    API_NOTIFICATION.HideLoading();
    this.checkIfLogged();
  },
  data() {
    return {
      checkoutList: [],
      checkoutIDList: []
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_CHECKOUT.GetIntegracaoCheckout()
            .then(resCheckout => {
              this.checkoutList = resCheckout.data;
              this.checkoutList.forEach((obj, i) => {
                API_CHECKOUT.GetCheckoutsByID(obj.id).then(resCheckoutByID => {
                  this.checkoutIDList.push(resCheckoutByID.data);
                  API_NOTIFICATION.HideLoading();
                });
              });
            })
            .catch(error => {
              console.log("Erro ao pegar dados da loja", error);
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    acaoVerEditarIntegracaoCheckout(id) {
      if (id == 1) {
        this.$router.push("/configs/checkouts/mercadopago");
      }
      if (id == 2) {
        this.$router.push("/configs/checkouts/pagseguro");
      }
      if (id == 3) {
        this.$router.push("/configs/checkouts/payu");
      }
    },
    getImageIntegracaoCheckout(id) {
      if (id == 1) return "/img/mercadopago.png";
      else if (id == 2) return "/img/pagseguro.png";
      else if (id == 3) return "/img/payu.png";
      return "";
    },
    getApelidoByID(id) {
      if (id > 0) {
        if (this.checkoutIDList.find(x => x.gateway == id) !== undefined) {
          return this.checkoutIDList.find(x => x.gateway == id).nome;
        }
      }

      return "";
    },
    getStatusByID(id) {
      if (this.checkoutIDList.find(x => x.gateway == id) !== undefined) {
        return this.checkoutIDList.find(x => x.gateway == id).status;
      }
    },
    getStatusClassByID(id) {      
      if (this.checkoutIDList.find(x => x.gateway == id) !== undefined) {
        return this.checkoutIDList.find(x => x.gateway == id).status
          ? "CheckoutStatusAtivo"
          : "CheckoutStatusInativo";
      }
    }
  }
};
</script>
