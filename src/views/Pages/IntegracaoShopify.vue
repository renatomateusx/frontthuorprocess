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
.hidden {
  display: none !important;
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
      <span class="fa fa-italic">
        <span class="ml-2"></span>
      </span>Integração Shopify
    </div>
    <strong>
      Preencha o checkout do {{getNomePlataforma()}} corretamente. Lembre-se: nós te avisaremos se houver erros. Mas a responsabilidade de informar os dados é sua!
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
                <span class="spanNome">{{getNomePlataforma()}}</span>
              </div>
              <button
                class="btn btn-block btn btn-primary btn-lg hidden"
                v-if="plataforma.url_loja"
                v-on:click="reInstalarTema()"
              >Reinstalar integração</button>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>
      <div class="col-xl-8">
        <!-- Main card-->
        <form
          data-vv-scope="plataforma_form"
          @submit.prevent="validateBeforeSubmit('plataforma_form')"
        >
          <!-- START card-->
          <div class="card card-default">
            <div class="card-body">
              <div class="form-groug">
                <label class="s col-form-label">Status</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="plataforma_form.status == 1"
                      v-model="plataforma_form.status"
                      :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.status')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('plataforma_form.status')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.status') }}</span>
              </div>

              <div class="form-group">
                <label class="col-form-label">Nome da Loja *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.nome_loja')}"
                  v-model="plataforma_form.nome_loja"
                  v-validate="'required'"
                  type="text"
                  name="nome_loja"
                />
                <span
                  v-show="errors.has('plataforma_form.nome_loja')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.nome_loja') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">URL Loja *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.url_loja')}"
                  v-model="plataforma_form.url_loja"
                  v-validate="'required'"
                  type="text"
                  name="url_loja"
                />
                <span
                  v-show="errors.has('plataforma_form.url_loja')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.url_loja') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">E-mail Loja *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.email_loja')}"
                  v-model="plataforma_form.email_loja"
                  v-validate="'required|email'"
                  type="text"
                  name="email_loja"
                />
                <span
                  v-show="errors.has('plataforma_form.email_loja')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.email_loja') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Chave API Key *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.chave_api_key')}"
                  v-model="plataforma_form.chave_api_key"
                  v-validate="'required'"
                  type="text"
                  name="chave_api_key"
                />
                <span
                  v-show="errors.has('plataforma_form.chave_api_key')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.chave_api_key') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Senha *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.senha')}"
                  v-model="plataforma_form.senha"
                  v-validate="'required'"
                  type="text"
                  name="senha"
                />
                <span
                  v-show="errors.has('plataforma_form.senha')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.senha') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Segredo Compartilhado *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.segredo_compartilhado')}"
                  v-model="plataforma_form.segredo_compartilhado"
                  v-validate="'required'"
                  type="text"
                  name="segredo_compartilhado"
                />
                <span
                  v-show="errors.has('plataforma_form.segredo_compartilhado')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.segredo_compartilhado') }}</span>
              </div>
              <div class="form-groug">
                <label class="s col-form-label">Sincroniza Automaticamente? *</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="plataforma_form.auto_sincroniza == 1"
                      v-model="plataforma_form.auto_sincroniza"
                      :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.auto_sincroniza')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('plataforma_form.auto_sincroniza')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.auto_sincroniza') }}</span>
              </div>
              <!-- <div class="form-group">
                <label class="col-form-label">Sincroniza Automaticamente? *</label>
                <select
                  @change="AutoSinc()"
                  id="auto_sincroniza"
                  name="auto_sincroniza"
                  class="form-control"
                  v-model="plataforma_form.auto_sincroniza"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div> -->
              <div class="form-groug">
                <label class="s col-form-label">Pula Carrinho? *</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="plataforma_form.pula_carrinho == 1"
                      v-model="plataforma_form.pula_carrinho"
                      :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.pula_carrinho')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('plataforma_form.pula_carrinho')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.pula_carrinho') }}</span>
              </div>
              <!-- <div class="form-group">
                <label class="col-form-label">Pula Carrinho? *</label>
                <select
                  @change="PulaCarrinho()"
                  id="pula_carrinho"
                  name="pula_carrinho"
                  class="form-control"
                  v-model="plataforma_form.pula_carrinho"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div> -->
              <div class="form-group">
                <label class="col-form-label">Tipo de Integração *</label>
                <select
                  id="tipo_integracao"
                  name="tipo_integracao"
                  class="form-control"
                  v-model="plataforma_form.tipo_integracao"
                >
                  <option selected value="App privado">App Privado</option>
                </select>
              </div>
              <div class="form-group">
                <label class="col-form-label">Quais Pedidos Enviar*</label>
                <select
                  id="quais_pedidos_enviar"
                  name="quais_pedidos_enviar"
                  class="form-control"
                  v-model="plataforma_form.quais_pedidos_enviar"
                >
                  <option selected value="Todos">Todos</option>
                </select>
              </div>
              <div class="form-groug">
                <label class="s col-form-label">Limpa Carrinho? *</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="plataforma_form.limpa_carrinho == 1"
                      v-model="plataforma_form.limpa_carrinho"
                      :class="{'form-control':true, 'is-invalid': errors.has('plataforma_form.limpa_carrinho')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('plataforma_form.limpa_carrinho')"
                  class="invalid-feedback"
                >{{ errors.first('plataforma_form.limpa_carrinho') }}</span>
              </div>
              <!-- <div class="form-group">
                <label class="col-form-label">Limpa Carrinho? *</label>
                <select
                  @change="LimpaCarrinho()"
                  id="limpa_carrinho"
                  name="limpa_carrinho"
                  class="form-control"
                  v-model="plataforma_form.limpa_carrinho"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div> -->

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
import API_LOJA from "../../api/lojaAPI";
import constantes from '../../api/constantes';

Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: "pt",
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
      plataforma: {
        nome: ""
      },
      plataforma_form: {
        status: 0,
        auto_sincroniza: "",
        pula_carrinho: "",
        tipo_integracao: "",
        url_loja: "",
        email_loja: "",
        chave_api_key: "",
        senha: "",
        segredo_compartilhado: "",
        quais_pedidos_enviar: "",
        id_usuario: "",
        limpa_carrinho: "",
        nome_loja: "",
        plataforma: 1,
        id: 0
      }
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_LOJA.GetIntegracaoPlataformaByID(1)
            .then(resCheckout => {
              this.plataforma = resCheckout.data;
              console.log(this.plataforma);
              this.plataforma_form.id = this.plataforma.id;
              this.plataforma_form.status = this.plataforma.status;
              this.plataforma_form.auto_sincroniza = this.plataforma.auto_sincroniza;
              this.plataforma_form.pula_carrinho = this.plataforma.pula_carrinho;
              this.plataforma_form.tipo_integracao = this.plataforma.tipo_integracao;
              this.plataforma_form.url_loja = this.plataforma.url_loja;
              this.plataforma_form.chave_api_key = this.plataforma.chave_api_key;
              this.plataforma_form.senha = this.plataforma.senha;
              this.plataforma_form.segredo_compartilhado = this.plataforma.segredo_compartilhado;
              this.plataforma_form.quais_pedidos_enviar = this.plataforma.quais_pedidos_enviar;
              this.plataforma_form.id_usuario = this.plataforma.id_usuario;
              this.plataforma_form.limpa_carrinho = this.plataforma.limpa_carrinho;
              this.plataforma_form.nome_loja = this.plataforma.nome_loja;
              this.plataforma_form.plataforma = this.plataforma.plataforma;
              this.plataforma_form.email_loja = this.plataforma.email_loja;
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

    getImageIntegracaoCheckout(id) {
      if (id == 1) {
        return "/img/shopify.png";
      }
      return "";
    },
    getNomePlataforma() {
      if (this.plataforma.plataforma == 1) {
        return " Shopify ";
      }

      return " Plataform ";
    },
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.salvarPlataforma();
          return;
        }
      });
    },
    reInstalarTema() {
      API_NOTIFICATION.ShowLoading();
      API_LOJA.InstalarReinstalarShopify().then(resInstalarShopify => {
        API_NOTIFICATION.showNotificationW(
          "Pronto!",
          "Aguarde alguns instantes para que a integração esteja completa.",
          "success"
        );
      });
    },
    salvarPlataforma() {
      API_NOTIFICATION.ShowLoading();
      this.plataforma_form.plataforma = constantes.PLATAFORMA_SHOPIFY;
      API_LOJA.InsertPlataformShopify(this.plataforma_form)
        .then(res => {
          //this.checkIfLogged();
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Integração Realizada com Sucesso! <br> Vá até a seção de 'Apps' para instalar o checkout.",
            "success"
          );
          // API_LOJA.InstalarReinstalarShopify().then(resInstalarShopify => {

          // });
        })
        .catch(error => {
          console.log("Erro ao salvar o checkout MP", error);
        });
    },
    updateStatus() {
      API_NOTIFICATION.ShowLoading();

      API_LOJA.UpdateStatus(this.plataforma_form)
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
    PulaCarrinho() {
      API_NOTIFICATION.ShowLoading();

      API_LOJA.PulaCarrinho(this.plataforma_form)
        .then(res => {
          //this.checkIfLogged();
          var stat = this.plataforma_form.pula_carrinho
            ? "ativado"
            : "desativado";
          API_NOTIFICATION.showNotification(
            "Pular Carrinho " + stat + " com Sucesso",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar o checkout MP", error);
        });
    },
    LimpaCarrinho() {
      API_NOTIFICATION.ShowLoading();

      API_LOJA.LimpaCarrinho(this.plataforma_form)
        .then(res => {
          //this.checkIfLogged();
          var stat = this.plataforma_form.limpa_carrinho
            ? "ativado"
            : "desativado";
          API_NOTIFICATION.showNotification(
            "Limpa Carrinho " + stat + " com Sucesso",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar o checkout MP", error);
        });
    },
    AutoSinc() {
      API_NOTIFICATION.ShowLoading();

      API_LOJA.AutoSinc(this.plataforma_form)
        .then(res => {
          //this.checkIfLogged();
          var stat = this.plataforma_form.auto_sincroniza
            ? "ativado"
            : "desativado";
          API_NOTIFICATION.showNotification(
            "Auto Sincronização " + stat + " com Sucesso",
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