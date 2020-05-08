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
      <span class="fa fa-share-alt-square"><span class="ml-2"></span></span>Integrações
    </div>
    <strong>
      Tadas as integrações que fazemos atualmente estão aqui.
      <br />
      Caso queira integrar com alguma plataforma ou ferramenta, por favor, mande-nos um e-mail {suporte@thuor.com} e solicite inclusão. Teremos prazer em lhe atender.
    </strong>

    <div class="row mt-3" v-for="{id, nome} in integracaoList" :key="id">
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
                class="mr-2 img-fluid thumb36 col-md-2 imgIntegracao mt-0"
                v-bind:src="getImageIntegracaoPlataforma(id)"
                alt="App"
              />
              <span class="col-md-5 mt-2">{{getApelidoByID(id)}}</span>
              <button
                class="btn btn-info col-md-3"
                v-on:click="acaoVerEditarIntegracaoPlataforma(id)"
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
      integracaoList: [],
      integracaoIDList: []
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_LOJA.GetIntegracaoPlataforma()
            .then(resPlataforma => {
              this.integracaoList = resPlataforma.data;
              console.log("this", this.integracaoList);
              this.integracaoList.forEach((obj, i) => {
                API_LOJA.GetIntegracaoPlataformaByID(obj.id).then(resIntegraID => {
                  console.log(resIntegraID.data);
                  this.integracaoIDList.push(resIntegraID.data);
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
    acaoVerEditarIntegracaoPlataforma(id) {
      if (id == 1) {
        this.$router.push("/configs/integracoes/shopify");
      }
    },
    getImageIntegracaoPlataforma(id) {
      if (id == 1) {
        return "/img/shopify.png";
      }
      return "";
    },
    getApelidoByID(id) {
        console.log(this.integracaoIDList.find(x => x.plataforma == id));
        if (this.integracaoIDList.find(x => x.plataforma == id) !== undefined) {
          return this.integracaoIDList.find(x => x.plataforma == id).nome_loja;
        }
      

      return "";
    },
    getStatusByID(id) {
      if (this.integracaoIDList.find(x => x.plataforma == id) !== undefined) {
        return this.integracaoIDList.find(x => x.plataforma == id).status;
      }
    },
    getStatusClassByID(id) {
      if (this.integracaoIDList.find(x => x.plataforma == id) !== undefined) {
        return this.integracaoIDList.find(x => x.plataforma == id).status
          ? "CheckoutStatusAtivo"
          : "CheckoutStatusInativo";
      }
    }
  }
};
</script>
