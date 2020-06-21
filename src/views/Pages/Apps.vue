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
.spanDemo {
  font-size: 12px !important;
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
      E sempre adicionaremos mais. Dúvidas? {meajuda@thuor.com}
    </strong>

    <div class="row mt-3" v-for="{id, nome, imagem, demo, status} in appList" :key="id">
      <div class="col-xl-4">
        <!-- Aside card-->
        <div class="card b">
          <div class="card-body bb">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome">{{nome}}</span>
              </div>
            </div>
            <div class="clearfix">
              <div class="float-left pull-left p-1 mt-2">
                <span class="spanDemo" v-show="demo != ''">
                  <a :href="demo" target="_blank">Clique aqui para ver uma demonstração.</a>
                </span>
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
              <span class="col-md-5 mt-2"></span>
              <button class="btn btn-info col-md-3" v-on:click="acaoAppIntegrar(id, nome)">
                <span class="fa fa-edit f-20">
                  <span class="ml-2"></span>Instalar
                </span>
              </button>
              <div class="float-right mt-4 col-md-1">
                <span
                  class="pull-right float-right"
                  title="Status"
                  v-bind:class="status  == 1 ? 'CheckoutStatusAtivo' : 'CheckoutStatusInativo'"
                ></span>
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
import UTILIS_API from "../../api/utilisAPI";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    API_NOTIFICATION.ShowLoading();
    const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
    if (LDadosLoja == null) {
      API_NOTIFICATION.showNotificationW(
        "Oops!",
        "Para acessar essa página você precisa ter sua loja integrada. <br> Vá até 'Configurações' > 'Integrações' e efetue a integração com sua loja.",
        "warning"
      );
      return;
    }
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
      var qtdApps = 0;
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_APPS.GetApps()
            .then(resApps => {
             
              resApps.data.forEach((obj, i) => {
                 qtdApps += 1;
                //console.log(obj);
                var status = 0;
                API_APPS.GetStatusApp(obj.id).then(resGet => {
                  status = resGet.data.status;
                  // console.log(resGet, status);
                  if (!status) status = obj.nativo;
                  this.appList.push({
                    id: obj.id,
                    nome: obj.nome,
                    imagem: obj.imagem,
                    demo: obj.demo,
                    status: status
                  });
                  //console.log(this.appList);
                });
                 
              });
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar Apps", error);
            });
          if (qtdApps == 0) {
            API_NOTIFICATION.HideLoading();
          }
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    acaoAppIntegrar(id, nome) {
      // console.log(id);
      if (id == 1) {
        this.instalaApp(id);
      } else if (id == 2) {
        this.instalaApp(id);
      } else if (id == 3) {
        this.$router.push("/apps/thuor-parcel");
      } else if (id == 4) {
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "O App " + nome + " Já é Instalado Nativamente.",
          "info"
        );
      } else if (id == 5) {
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "O App " + nome + " Já é Instalado Nativamente.",
          "info"
        );
      } else if (id == 6) {
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "O App " + nome + " Já é Instalado Nativamente.",
          "info"
        );
      } else if (id == 7) {
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "O App " + nome + " Já é Instalado Nativamente.",
          "info"
        );
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
      if (id == 2) {
        API_NOTIFICATION.showNotificationConfirm(
          "Thuor Checkout",
          "Esta ação irá instalar o App Thuor Checkout. Você deseja continuar?",
          "question",
          () => {
            API_NOTIFICATION.ShowLoading();
            API_LOJA.InstalarReinstalarAppCheckoutShopify().then(
              resInstalarShopify => {
                API_NOTIFICATION.showNotificationW(
                  "Pronto!",
                  "Solicitação Realizada com Sucesso! <br> Aguarde Alguns Instantes para que a Instalação Esteja Completa!",
                  "success"
                );
              }
            );
          }
        );
      }
    },
    getAppsIntegracaoByID(id) {
      // console.log(this.integracaoIDList.find(x => x.plataforma == id));
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
          var app = {
            status: 1,
            app: 1
          };
          API_APPS.SaveIntegracaoApps(app)
            .then(resIntegra => {
              API_NOTIFICATION.showNotificationW(
                "Pronto!",
                "Instalação do App Concluída com Sucesso!",
                "success"
              );
            })
            .catch(error => {
              console.log("Erro ao salvar integração", error);
            });
        })
        .catch(error => {
          console.log("Erro ao instalar Thuor Review no Shopify", error);
        });
    },
    async getStatusClass(id) {
      const d = await API_APPS.GetStatusApp(id);
      // console.log(
      //   d.data.status == 1 ? "CheckoutStatusAtivo" : "CheckoutStatusInativo"
      // );
      return d.data.status == 1
        ? "CheckoutStatusAtivo"
        : "CheckoutStatusInativo";
    }
  }
};
</script>
