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
              <!-- <div class="form-group">
                <label class="control-label" for="status">Ativo</label>
                <select
                  @change="updateStatusMP()"
                  id="status"
                  name="status"
                  class="form-control"
                  v-model="checkout_form.status"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div>-->
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
                <label class="col-form-label">Chave Pública *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.chave_publica')}"
                  v-model="checkout_form.chave_publica"
                  v-validate="'required'"
                  type="text"
                  name="chave_publica"
                />
                <span
                  v-show="errors.has('checkout_form.chave_publica')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.chave_publica') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Token de Acesso *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.token_acesso')}"
                  v-model="checkout_form.token_acesso"
                  v-validate="'required'"
                  type="text"
                  name="token_acesso"
                />
                <span
                  v-show="errors.has('checkout_form.token_acesso')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.token_acesso') }}</span>
              </div>
              <div class="form-groug">
                <label class="s col-form-label">Mostrar Prova Social?</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="checkout_form.mostra_prova_social == 1"
                      v-model="checkout_form.mostra_prova_social"
                      :class="{'form-control':true, 'is-invalid': errors.has('checkout_form.mostra_prova_social')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('checkout_form.mostra_prova_social')"
                  class="invalid-feedback"
                >{{ errors.first('checkout_form.mostra_prova_social') }}</span>
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
import API_CHECKOUT from "../../api/checkoutAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS_API from "../../api/utilisAPI";

Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: 'pt',
  fieldsBagName: "formFields" // fix issue with b-table
});;


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
        chave_publica: "",
        token_acesso: "",
        processa_automaticamente: 1,
        status: 1,
        ativa_boleto: 1,
        gateway: 1,
        id_usuario: 0,
        mostra_prova_social: false
      }
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_CHECKOUT.GetIntegracaoCheckoutByID(1)
            .then(resCheckout => {
              this.checkout = resCheckout.data;
              this.checkout_form.status = this.checkout.status;
              this.checkout_form.ativa_boleto = this.checkout.ativa_boleto;
              this.checkout_form.processa_automaticamente = this.checkout.captura_auto;
              this.checkout_form.gateway = this.checkout.gateway;
              this.checkout_form.id_usuario = this.checkout.id_usuario;
              this.checkout_form.token_acesso = this.checkout.token_acesso;
              this.checkout_form.nome_fatura = this.checkout.nome_fatura;
              this.checkout_form.nome = this.checkout.nome;
              this.checkout_form.chave_publica = this.checkout.chave_publica;
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
      if (this.checkout.gateway == 1) {
        return " Mercado Pago ";
      }

      return " Checkout ";
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
        API_CHECKOUT.InsertCheckoutMP(this.checkout_form)
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
      API_CHECKOUT.UpdateStatusMP(this.checkout_form)
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
    UpdateAtivaBoletoMP() {
      API_NOTIFICATION.ShowLoading();

      API_CHECKOUT.UpdateAtivaBoletoMP(this.checkout_form)
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
    UpdateAtivaAutoProcessamentoMP() {
      API_NOTIFICATION.ShowLoading();

      API_CHECKOUT.UpdateAutoProcessamentoMP(this.checkout_form)
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