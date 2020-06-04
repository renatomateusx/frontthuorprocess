<style scoped>
.card-flat {
  margin-top: 80px !important;
}
.bg-dark {
  background-color: #23b7e5 !important;
}
.footerText {
  font-size: 12px !important;
}
</style>
<template>
  <div class="block-center mt-4 wd-xl">
    <notifications group="foo" position="center top" />
    <!-- START card-->
    <div class="card card-flat">
      <div class="card-header text-center bg-dark">
        <a href="#">
          <img
            class="block-center rounded"
            src="img/logoThuor.png"
            width="85"
            height="34"
            alt="Thuor"
          />
        </a>
      </div>
      <div class="card-body">
        <p class="text-center py-2">Identifique-se.</p>
        <form class="mb-3" @submit.prevent="validateBeforeSubmit('login')" data-vv-scope="login">
          <div class="form-group">
            <div class="input-group with-focus">
              <input
                :class="{'form-control border-right-0':true, 'is-invalid': errors.has('login.email')}"
                placeholder="E-mail"
                v-model="login.email"
                v-validate="'required|email'"
                type="text"
                name="email"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-envelope"></em>
                </span>
              </div>
              <span
                v-show="errors.has('login.email')"
                class="invalid-feedback"
              >{{ errors.first('login.email') }}</span>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group with-focus">
              <input
                :class="{'form-control  border-right-0':true, 'is-invalid': errors.has('login.password')}"
                v-model="login.password"
                v-validate="'required'"
                type="password"
                name="password"
                placeholder="Senha"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-lock"></em>
                </span>
              </div>
              <span
                v-show="errors.has('login.password')"
                class="invalid-feedback"
              >{{ errors.first('login.password') }}</span>
            </div>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  name="rememberme"
                  id="rememberme"
                  v-model="login.rememberme"
                />
                <label class="custom-control-label" for="rememberme">Lembrar-me</label>
              </div>
            </div>
            <div class="float-right">
              <router-link class="text-muted" to="/recuperar">
                <small>Esqueceu sua senha?</small>
              </router-link>
            </div>
          </div>
          <button class="btn btn-block btn-primary mt-3" type="submit">Login</button>
        </form>
        <p class="pt-0 pb-0 text-center mb-0">Quer se registrar?</p>
        <router-link class="btn btn-block btn-link" to="/cadastro">Clique aqui</router-link>
      </div>
    </div>
    <!-- END card-->
    <div class="p-3 text-center footerText">
      <br />
      <span>
        Thuor
        <span class="mr-2">&copy;</span>- Integrando Ideias e Negócios Desde 2009
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

import API_NOTIFICATION from "../../api/notification";

// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS_API from "../../api/utilisAPI";
import { Validator } from "vee-validate";
import pt from "vee-validate/dist/locale/pt_BR";
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
      login: {
        email: "",
        password: "",
        rememberme: false
      }
    };
  },
  mounted() {
    this.$validator.localize("pt", {
      messages: {
        required: field => "* Este campo é obrigatório."
      },
      attributes: {}
    });
  },
  methods: {
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          API_NOTIFICATION.ShowLoading();
          // simulate AJAX
          API_LOGIN.EfetuarLogin(this.login.email, this.login.password)
            .then(async retorno => {              
              if (retorno !== undefined) {
                if (retorno.data.user.status == 1) {
                  const LReturn = await UTILIS_API.SetUserSession(retorno.data);
                  const LActualPath = await UTILIS_API.GetActualPage();
                  if (LActualPath != undefined) {
                    if (LActualPath) this.$router.push(LActualPath);
                  } else {
                    this.$router.push("/home");
                  }
                } else {
                  API_NOTIFICATION.showNotificationW(
                    "Oops!",
                    "Parece que você ainda não ativou sua conta. Clique no botão de ativar conta, no e-mail que foi enviado para você. <br/> Dúvidas? suporte@thuor.com",
                    "error"
                  );
                }
              }
            })
            .catch(error => {
              if (error.response.status === 401) {
                API_NOTIFICATION.Notifica("Oops!", "Login e Senha inválidos");
              }
              console.log("Erro ao efetuar login", error);
            });

          return;
        }
        console.log("Correct them errors!");
      });
    },
    checkIfLogged() {
      
    }
  }
};
</script>
