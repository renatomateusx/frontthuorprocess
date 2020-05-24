<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        Dashboard
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
import API_LOJA from "../../api/lojaAPI";
import UTILIS_API from '../../api/utilisAPI';

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
            return "English";
            break;
          case "ptBR":
          default:
            return "Português";
        }
      },
      selectUserName() {
        var LUser = JSON.parse(sessionStorage.getItem("user"));
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
          var LUser = JSON.parse(sessionStorage.getItem("user"));
          if (LUser !== undefined && LUser !== null) {
            API_LOJA.GetDadosLojaByIdUsuario(LUser.user.id)
            .then((resLoja)=>{
              UTILIS_API.SetDadosLojaSession(resLoja.data);
            })
          }
          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
        });
    },
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    }
  }
};
</script>