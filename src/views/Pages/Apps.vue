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
.spanDemo{
  font-size: 12px!important;
  font-weight: 900;
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
.f-20 {
  font-size: 20px !important;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fab fa-medapps">
        <span class="ml-2"></span>
      </span>Apps
    </div>
    <strong>
      Tadas as nossas Apps estão aqui.
      <br />
      E sempre adicionaremos mais. Dúvidas? {suporte@thuor.com}
    </strong>

    <div class="row mt-3" v-for="{id, nome, imagem, demo} in appList" :key="id">
      <div class="col-xl-4">
        <!-- Aside card-->
        <div class="card b">
          <div class="card-body bb">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome">{{nome}}</span>
              </div>
              <div class="float-left p-1">
                <span class="spanDemo" v-show="demo != ''"><a :href="demo" target="_blank">Clique aqui para ver uma demonstração.</a></span>
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
                v-bind:src="imagem"
                alt="App"
              />
              <span class="col-md-5 mt-2">{{getAppsIntegracaoByID(id)}}</span>
              <button class="btn btn-info col-md-3" v-on:click="acaoAppIntegrar(id)">
                <span class="fa fa-edit f-20">
                  <span class="ml-2"></span>Instalar
                </span>
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
import API_LOJA from "../../api/lojaAPI";
import API_APPS from "../../api/appsAPI";
import API_SHOPIFY from "../../api/shopifyAPI";

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
      appList: [],
      integracaoIDList: []
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_APPS.GetApps()
            .then(resApps => {
              this.appList = resApps.data;
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar Apps", error);
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    acaoAppIntegrar(id) {
      if (id == 1) {
        this.instalaApp(id);
      } else if (id == 2) {
        this.$router.push("/configs/integracoes/shopify");
      }
    },
    instalaApp(id) {
      if (id == 1) {
        API_NOTIFICATION.showNotificationConfirm(
          "Thuor Reviews",
          "Esta ação irá instalar o App Thuor Reviews. Você deseja continuar?",
          "question",
          () => {
            this.callInstallationReviewApp();
          }
        );
      }
    },
    getAppsIntegracaoByID(id) {
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
    },
    callInstallationReviewApp() {
      API_NOTIFICATION.ShowLoading();
      API_SHOPIFY.InstalaReviewApp()
        .then(resInstalacao => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Instalação do App Concluída com Sucesso!",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao instalar Thuor Review no Shopify", error);
        });
    }
  }
};
</script>
