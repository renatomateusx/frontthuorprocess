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
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-italic"><span class="ml-2"></span></span>Integração Shopify
    </div>
    <strong>
      Crie sequência de mensagens para recuperar e aumentar suas vendas.
      <br />
      Conte conosco através do suporte {suporte@thuor.com}
      <br />
    </strong>

    <div class="row mt-3">
      <div class="col-xl-4 mt-4">
        <!-- Aside card-->
        <div class="card b ">
          <div class="card-body bb ">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome"></span>
              </div>
              <button class="btn btn-block btn btn-primary btn-lg" v-on:click="adicionarSequencia()">Adicionar Sequência</button>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>
      <div class="col-xl-8">
        <!-- Main card-->
        <form
          data-vv-scope="carrinho_abandonado"
          @submit.prevent="validateBeforeSubmit('carrinho_abandonado')"
        >
          <!-- START card-->
          <sequencia-card @AddSequencia="AdicionarSequencia($event)"></sequencia-card>
          <div class="card card-default">            
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
import SequenciaCard from "../../components/Campanhas/SequenciaCard";
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
  components:{
    SequenciaCard
  },
  data() {
    return {
      idSequencia: 1,
      sequenciasArray: [],
      plataforma: {
        nome: ""
      },
      plataforma_form: {
        status: 0,
        auto_sincroniza: "",
        pula_carrinho: "",
        tipo_integracao: "",
        url_loja: "",
        chave_api_key: "",
        senha: "",
        segredo_compartilhado: "",
        quais_pedidos_enviar: "",
        id_usuario: "",
        limpa_carrinho: "",
        nome_loja: "",
        plataforma: "",
        id: 0
      }
    };
  },
  methods: {
    checkIfLogged() {
      //API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          
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
          this.salvarSequencia();
          return;
        }
      });
    },
    adicionarSequencia() {
      this.idSequencia = this.idSequencia + 1;
      this.sequenciasArray.push({id: this.idSequencia, comp: CompositionEvent});   
      console.log(this.sequenciasArray);   
    },
    AdicionarSequencia(event){
      console.log(event);
    },
    salvarSequencia() {
      API_NOTIFICATION.ShowLoading();
      API_NOTIFICATION.HideLoading();
    },
    
  }
};
</script>