<style scoped>
.sparkline canvas {
  width: 100%;
}
.labelReport {
  font-size: 20px !important;
}
.dataReport {
  font-size: 25px !important;
  font-weight: 700;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        Home
        <router-link :to="{path: '/perfil'}">
          <small>{{welcome}}</small>
        </router-link>
      </div>
      <!-- START Language list-->
      <div class="ml-auto" style="display:none">
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
    <div class="row"></div>
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import Loading from "vue-loading-overlay";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import API_LOJA from "../../api/lojaAPI";
import UTILIS_API from "../../api/utilisAPI";
import API_TRANSACOES from "../../api/transacoesAPI";

import EasyPieChart from "easy-pie-chart";
import Sparkline from "@/components/Common/Sparklines";
import FlotChart from "@/components/Charts/Flot";
import UTILIS from "../../utilis/utilis";

Vue.filter("formatPrice", function(value) {
  if (value) {
    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
});

export default {
  created() {
    this.checkIfLogged();
  },
  components: {
    Sparkline,
    FlotChart
  },
  data() {
    return {
      welcome: "",
      selectedLanguage() {
        switch (this.$i18n.i18next.language) {
          // case "es":
          //   return "Spanish";
          //   break;
          // case "en":
          //   return "English";
          //   break;
          case "ptBR":
          default:
            return "Português";
        }
      },
      async selectUserName() {
        var LUser = await UTILIS_API.GetUserSession();
        if (LUser !== undefined && LUser !== null) {
          this.welcome = `Bem vindo ao Thuor, ${LUser.user.nome}!`;
        } else {
          this.welcome = "Bem vindo ao Thuor!";
        }
      },
      renderComponent: false,
      totalVendasPerDay: [],
      totalVendasValor: 0.0,
      totalVendas: 0,
      totalVendasMes: [],
      totalQtdVendasMes: 0,
      totalReceitas: 0,
      totalReceitasArray: [],
      pedidosPagos: 0,
      pedidosRealizados: 0,
      pedidosBoletos: 0,
      totalPedidosBoletos: 0,
      totalPedidosBoletosArray: [],
      totalVendasFacebookArray: [],
      totalVendasFacebook: 0,
      totalVendasGoogleArray: [],
      totalVendasGoogle: 0
    };
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(async res => {
          var LUser = await UTILIS_API.GetUserSession();
          if (LUser !== undefined && LUser !== null) {
            API_LOJA.GetDadosLojaByIdUsuario(LUser.user.id).then(resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              this.selectUserName();
            });
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