<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        Página Inicial
        <small>{{selectUserName()}}</small>
      </div>
      <!-- START Language list-->
      <div class="ml-auto">
        <b-dropdown id="ddown1" :text="selectedLanguage()" no-caret right>
          <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
          <b-dropdown-item @click="changeLanguage('es')">Spanish</b-dropdown-item>
        </b-dropdown>
      </div>
      <!-- END Language list-->
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="text-thin">Fique atento!</h2>
        <p>Quando tivermos algum aviso para você é aqui que ele irá aparecer.</p>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>

import Loading from "vue-loading-overlay";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";

export default {
  created() {
    this.checkIfLogged();
  },
  data() {
    return {
      selectedLanguage() {
        switch (this.$i18n.i18next.language) {
          case "es":
            return "Spanish";
            break;
          case "en":
          default:
            return "English";
        }
      },
      selectUserName() {
        if (sessionStorage.getItem("user") === undefined)
          this.$router.push("login");
        var LUser = JSON.parse(sessionStorage.getItem("user"));
        if (LUser === undefined || LUser === null) {
          this.$router.push("login");
        }
        if (LUser !== undefined && LUser !== null) {
          return `Bem vindo ao Thuor, ${LUser.user.nome}!`;
        }
      }
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
         API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.push("login");
          }
        });
    },
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    }
  }
};
</script>