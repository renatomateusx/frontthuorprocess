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
.switch input:checked + span {
  background-color: green;
}
.switch input + span {
  background-color: red;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-credit-card">
        <span class="ml-2"></span>
      </span>App Thuor Parcel
    </div>
    <strong>
      Preencha os Campos Abaixo e Clique em Salvar para Instalar.
      <br />
      Conte conosco através do suporte {meajuda@thuor.com}
      <br />
    </strong>

    <div class="row mt-3">
      <div class="col-xl-4 mt-4">
        <!-- Aside card-->
        <div class="card card-default">
          <div class="card-body bb">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome col-md-12">{{nome_app}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>

      <div class="card card-default card-body col-xl-8">
        <form @submit.prevent="validateBeforeSubmit('parcelapp')" data-vv-scope="parcelapp">
          <!-- Main card-->
          <div class="row">
            <div class="form-group col-md-3 ml-3">
              <label class="s col-form-label">Status</label>
              <div class>
                <label class="switch switch-lg">
                  <input
                    type="checkbox"
                    :checked="parcelapp.status == 1"
                    v-model="parcelapp.status"
                    :class="{'form-control':true, 'is-invalid': errors.has('parcelapp.status')}"
                  />
                  <span class></span>
                </label>
              </div>
              <span
                v-show="errors.has('parcelapp.status')"
                class="invalid-feedback"
              >{{ errors.first('parcelapp.status') }}</span>
            </div>
            <div class="form-group col-md-3 ml-3">
              <label class="s col-form-label">Assume Juros</label>
              <div class>
                <label class="switch switch-lg">
                  <input
                    type="checkbox"
                    :checked="parcelapp.assume_juros == 1"
                    v-model="parcelapp.assume_juros"
                    :class="{'form-control':true, 'is-invalid': errors.has('parcelapp.assume_juros')}"
                  />
                  <span class></span>
                </label>
              </div>
              <span
                v-show="errors.has('parcelapp.assume_juros')"
                class="invalid-feedback"
              >{{ errors.first('parcelapp.assume_juros') }}</span>
            </div>
            <div class="form-group col-md-2 ml-3">
              <label class="col-form-label">Parcelas *</label>
              <input
                :class="{'form-control':true, 'is-invalid': errors.has('parcelapp.parcelas')}"
                v-model="parcelapp.parcelas"
                placeholder="Ex: 12"
                v-validate="'required'"
                class
                type="text"
                name="parcelas"
              />
              <span
                v-show="errors.has('parcelapp.parcelas')"
                class="invalid-feedback"
              >{{ errors.first('parcelapp.parcelas') }}</span>
            </div>
          </div>
          <!-- START card-->
          <div class="card">
            <div class>
              <div class="clearfix col-md-12">
                <div class="float-right btn-block">
                  <button class="btn btn-primary float-right pull-right" type="submit">Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->

          <!-- End Main card-->
        </form>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { Validator } from "vee-validate";
import pt from "vee-validate/dist/locale/pt_BR";
import API_NOTIFICATION from "../../api/notification";

// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_CHECKOUT from "../../api/checkoutAPI";
import API_HEADERS from "../../api/configAxios";
import API_LOJA from "../../api/lojaAPI";
import SequenciaCard from "../../components/Campanhas/SequenciaCard";
import API_CAMPANHA from "../../api/campanhasAPI";
import API_APPS from "../../api/appsAPI";
import constantes from "../../api/constantes";

import API_INTEGRACAO_SHOPIFY_APPS from "../../api/integracoesShopifyAPI";
import UTILIS_API from '../../api/utilisAPI';

Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: "pt",
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {   

    this.checkIfLogged();
    //this.sequenciasArray.push({ id_sequencia: 1 })
  },
  mounted() {
    this.$validator.localize("pt", {
      messages: {
        required: field => "* Este campo é obrigatório."
      },
      attributes: {}
    });
  },
  components: {
    SequenciaCard
  },
  data() {
    return {
      idSequencia: 1,
      nome_app: "",
      sequenciasArray: [{ id_sequencia: 1 }],
      parcelapp: {
        id_ususario: 0,
        status: 1,
        assume_juros: 0,
        parcelas: 1,
        app: 3
      }
    };
  },
  methods: {
    checkIfLogged() {
      //API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(async res => {
          const LApp = await API_APPS.GetAppsByID(3);
          if (LApp && LApp.data.nome) {
            this.nome_app = LApp.data.nome;
          }
          API_APPS.GetIntegracaoApps(3)
            .then(res => {
              const LRetornoApp = res.data;
              if (LRetornoApp.app) {
                this.parcelapp = LRetornoApp;
                this.parcelapp.assume_juros =
                  LRetornoApp.propriedades.assume_juros;
                this.parcelapp.parcelas = LRetornoApp.propriedades.parcelas;
              }
            })
            .catch(error => {
              console.log(
                "Erro ao pegar as informações do App Thuor Parcel",
                error
              );
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },

    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          
          this.salvarAppThuorParcel();
          return;
        }
      });
    },
    salvarAppThuorParcel() {
      API_NOTIFICATION.ShowLoading();
      this.parcelapp.propriedades = {
        assume_juros: this.parcelapp.assume_juros,
        parcelas: this.parcelapp.parcelas
      };
      API_APPS.SaveIntegracaoApps(this.parcelapp)
        .then(async res => {
          const LLoja = await API_LOJA.GetDadosLojaS();

          if (LLoja.data.plataforma == constantes.PLATAFORMA_SHOPIFY) {
            
            const LInstalaAPPShopify = await API_INTEGRACAO_SHOPIFY_APPS.InstalaAppThuorParcelShopify();
          }
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "App Salvo Com Sucesso!! <br> Aguarde Alguns Instantes Até que a Instalação Esteja Completa na Sua Loja.",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar app", error);
        });
    }
  }
};
</script>