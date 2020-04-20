<style scoped>
.card-flat {
  margin-top: 80px !important;
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
            alt="Image"
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
              <router-link class="text-muted" to="/recover">
                <small>Esqueceu sua senha?</small>
              </router-link>
            </div>
          </div>
          <button class="btn btn-block btn-primary mt-3" type="submit">Login</button>
        </form>
        <p class="pt-3 text-center">Quer se registrar?</p>
        <router-link class="btn btn-block btn-secondary" to="/register">Clique aqui</router-link>
      </div>
    </div>
    <!-- END card-->
    <div class="p-3 text-center">
      <br />
      <span>
        Thuor
        <span class="mr-2">&copy;</span>- Processando Pagamentos Desde 2009
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import Loading from "vue-loading-overlay";
import API_NOTIFICATION from "../../api/notification";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";

Vue.use(Loading);

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
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
  methods: {
    showLoading() {
      Vue.prototype.$loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        fullPage: true,
        loader: "bars",
        color: "#007BFF",
        width: 80,
        height: 80
      });
    },
    hideLoading() {
      Vue.prototype.$loader.hide();
    },
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.showLoading();
          // simulate AJAX
          API_LOGIN.EfetuarLogin(this.login.email, this.login.password)
            .then(retorno => {
              if (retorno !== undefined) {
                sessionStorage.setItem("user", JSON.stringify(retorno.data));
                this.$router.push("home");
              }
              this.hideLoading();
            })
            .catch(error => {
              if (error.response.status === 401) {
                API_NOTIFICATION.Notifica("Oops!", "Login e Senha inválidos");
              }
              console.log("Erro ao efetuar login", error);
              this.hideLoading();
            });

          return;
        }
        console.log("Correct them errors!");
      });
    },
    checkIfLogged() {
      this.showLoading();
      if (
        sessionStorage.getItem("user") !== undefined &&
        sessionStorage.getItem("user") !== null
      ) {
        var LUser = JSON.parse(sessionStorage.getItem("user"));
        if (LUser != null) {
          API_LOGIN.VerificaToken();
        }
      }

      this.hideLoading();
    }
  }
};
</script>
