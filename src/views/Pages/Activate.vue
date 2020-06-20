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
  <div class="block-center mt-4 s col-md-10" v-show="UsuarioAtivo == 1">
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
        <div class="card card-default">
          <div class="card-body text-center">
            <h3 class="m-0 text-bold">{{getNomeUsuario()}},</h3>
            <div class="my-3">
              <p>
                A conta <strong>{{getEmailUsuario()}}</strong> foi ativada com
                <span class="alert alert-success p-0">SUCESSO!</span>. Clique no botão abaixo para efetuar o login.
              </p>
            </div>
            <div class="text-center">
              <router-link class="btn btn btn-primary" to="/login">Efetuar Login</router-link>
            </div>
          </div>
        </div>
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

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    API_NOTIFICATION.ShowLoadingT("Um momento...");
    if (this.$route.params.id != undefined) {
      this.Token = this.$route.params.id;
      this.activateAccount();
    }
  },
  data() {
    return {
      UsuarioAtivo: 0,
      NomeUsuario: "",
      EmailUsuario: "",
      Token: ""
    };
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
                UTILIS_API.SetUserSession(retorno.data);
                const LActualPath = await UTILIS_API.GetActualPage();
                if (LActualPath != undefined) {                  
                  if (LActualPath) this.$router.push(LActualPath);
                } else {
                  this.$router.push("/home");
                }
              }
              API_NOTIFICATION.HideLoading();
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
    activateAccount() {
      API_LOGIN.AtivarEmail(this.Token)
        .then(retorno => {
          API_NOTIFICATION.showNotification(
            "Conta ativada com sucesso!",
            "success"
          );
          this.NomeUsuario = retorno.data.nome;
          this.EmailUsuario = retorno.data.email;
          this.UsuarioAtivo = 1;
        })
        .catch(error => {
          API_NOTIFICATION.showNotificationW(
            "Oops!",
            "Conta não encontrada. Envie um e-mail para support@thuor.com e relate seu problema."
          );
          console.log("Erro ao ativar a conta", error);
        });
    },
    getNomeUsuario() {
      return this.NomeUsuario;
    },
    getEmailUsuario(){
      return this.EmailUsuario;
    }
  }
};
</script>
