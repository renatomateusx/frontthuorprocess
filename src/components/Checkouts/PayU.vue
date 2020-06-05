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
      <span class="fa fa-donate"></span>Checkouts
    </div>
    <strong>
      Preencha o checkout do {{getNomeGateway()}} corretamente. Lembre-se: nós te avisaremos se houver erros. Mas a responsabilidade de informar os dados é sua!
      <br />
      Conte conosco através do suporte {suporte@thuor.com}
      <br />
    </strong>

    <div class="row mt-3">
      <div class="col-xl-4">
        <!-- Aside card-->
        <div class="card b">
          <div class="card-body bb">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome">{{getNomeGateway()}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>
      <div class="col-xl-8">
        <!-- Main card-->
        <form data-vv-scope="checkout_form" @submit.prevent="validateBeforeSubmit('checkout_form')">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-body">
              <div class="form-groug">
                <label class="s col-form-label">Status</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="checkout_form.status == 1"
                      v-model="checkout_form.status"
                      :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.status')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('checkout_form.status')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.status') }}</span>
              </div>

              <div class="form-group">
                <label class="col-form-label">Nome *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.nome')}"
                  v-model="checkout_form.nome"
                  v-validate="'required'"
                  type="text"
                  name="nome"
                />
                <span
                  v-show="errors.has('checkout_form.nome')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.nome') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Nome da Fatura do Cartão *</label>
                <input
                  ref="password1"
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.nome_fatura')}"
                  v-model="checkout_form.nome_fatura"
                  v-validate="'required'"
                  type="text"
                  name="nome_fatura"
                />
                <span
                  v-show="errors.has('checkout_form.nome_fatura')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.nome_fatura') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Processar transação no Market Place automaticamente? *</label>
                <select
                  id="processa_automaticamente"
                  name="processa_automaticamente"
                  class="form-control"
                  v-model="checkout_form.processa_automaticamente"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div>
              <div class="form-group">
                <label class="col-form-label">Ativa boleto? *</label>
                <select
                  id="ativa_boleto"
                  name="ativa_boleto"
                  class="form-control"
                  v-model="checkout_form.ativa_boleto"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div>
              <div class="form-group">
                <label class="col-form-label">ID do Merchan *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.merchan_id')}"
                  v-model="checkout_form.merchan_id"
                  v-validate="'required'"
                  type="text"
                  name="merchan_id"
                />
                <span
                  v-show="errors.has('checkout_form.merchan_id')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.merchan_id') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">API Login *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.api_login')}"
                  v-model="checkout_form.api_login"
                  v-validate="'required'"
                  type="text"
                  name="api_login"
                />
                <span
                  v-show="errors.has('checkout_form.api_login')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.api_login') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">API Key *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.api_key')}"
                  v-model="checkout_form.api_key"
                  v-validate="'required'"
                  type="text"
                  name="api_key"
                />
                <span
                  v-show="errors.has('checkout_form.api_key')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.api_key') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Account ID *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.account_id')}"
                  v-model="checkout_form.account_id"
                  v-validate="'required'"
                  type="text"
                  name="account_id"
                />
                <span
                  v-show="errors.has('checkout_form.account_id')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.account_id') }}</span>
              </div>
              <div class="required">* Campos requeridos</div>
            </div>
            <div class="card-footer">
              <div class="clearfix col-md-12">
                <div class="float-right btn-block">
                  <button class="btn btn-primary btn-block" type="submit">Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->
        </form>
        <!-- End Main card-->
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
import API_CHECKOUT_PU from "../../api/checkoutPayUAPI";
import API_HEADERS from "../../api/configAxios";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    API_NOTIFICATION.HideLoading();
    this.checkIfLogged();
  },
  mounted() {
    this.$validator.localize("pt", {
      messages: {
        required: field => "* Este campo é obrigatório."
      },
      attributes: {}
    });
  },
  data() {
    return {
      checkout: {},
      checkout_form: {
        nome: "",
        nome_fatura: "",
        merchan_id: "",
        api_login: "",
        api_key: "",
        account_id: "",
        processa_automaticamente: 1,
        status: 1,
        ativa_boleto: 1,
        gateway: 3,
        id_usuario: 0
      }
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_CHECKOUT_PU.GetIntegracaoCheckoutByID(3)
            .then(resCheckout => {
              this.checkout = resCheckout.data;
              //this.checkout_form = this.checkout;
              //yconsole.log(this.checkout.status);
              this.checkout_form.status = this.checkout.status;
              this.checkout_form.ativa_boleto = this.checkout.ativa_boleto || 1;
              this.checkout_form.processa_automaticamente =
                this.checkout.captura_auto || 1;
              this.checkout_form.gateway = this.checkout.gateway || 3;
              this.checkout_form.id_usuario = this.checkout.id_usuario;
              this.checkout_form.api_login = this.checkout.api_login;
              this.checkout_form.api_key = this.checkout.api_key;
              this.checkout_form.account_id = this.checkout.account_id;
              this.checkout_form.nome_fatura = this.checkout.nome_fatura;
              this.checkout_form.nome = this.checkout.nome;
              this.checkout_form.merchan_id = this.checkout.merchan_id;
              API_NOTIFICATION.HideLoading();
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
    },
    getImageIntegracaoCheckout(id) {
      if (id == 1) {
        return "/img/mercadopago.png";
      }
      return "";
    },
    getNomeGateway() {
      return "Pay U";
    },
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.salvarCheckout();
          return;
        }
      });
    },
    async salvarCheckout() {
      API_NOTIFICATION.ShowLoading();
      const LPodeSalvar = await UTILIS_API.checkUserHasPuttedPaymentInformation();
      if (LPodeSalvar) {
        API_CHECKOUT_PU.InsertCheckout(this.checkout_form)
          .then(res => {
            //this.checkIfLogged();
            API_NOTIFICATION.showNotification(
              "Checkout Salvo com Sucesso",
              "success"
            );
          })
          .catch(error => {
            console.log("Erro ao salvar o checkout MP", error);
          });
      }
    },
    updateStatus() {
      API_NOTIFICATION.ShowLoading();

      API_CHECKOUT_PU.UpdateStatus(this.checkout_form)
        .then(res => {
          //this.checkIfLogged();
          API_NOTIFICATION.showNotification(
            "Status atualizado com Sucesso",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar o checkout MP", error);
        });
    },
    UpdateAtivaBoleto() {
      API_NOTIFICATION.ShowLoading();

      API_CHECKOUT_PU.UpdateAtivaBoleto(this.checkout_form)
        .then(res => {
          //this.checkIfLogged();
          var stat = this.checkout_form.ativa_boleto ? "ativado" : "desativado";
          API_NOTIFICATION.showNotification(
            "Boleto " + stat + " com Sucesso",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar o checkout MP", error);
        });
    },
    UpdateAtivaAutoProcessamento() {
      API_NOTIFICATION.ShowLoading();
      API_CHECKOUT_PU.UpdateAutoProcessamento(this.checkout_form)
        .then(res => {
          //this.checkIfLogged();
          var stat = this.checkout_form.processa_automaticamente
            ? "ativado"
            : "desativado";
          API_NOTIFICATION.showNotification(
            "Processamento " + stat + " com Sucesso",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar o checkout MP", error);
        });
    }
  }
};
</script>