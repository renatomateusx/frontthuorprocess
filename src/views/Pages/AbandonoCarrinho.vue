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
      <span class="fa fa-italic">
        <span class="ml-2"></span>
      </span>Integração Shopify
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
        <div class="card b">
          <div class="card-body bb">
            <div class="clearfix">
              <button
                class="btn btn-block btn btn-primary btn-lg"
                v-on:click="adicionarSequencia()"
              >Adicionar Sequência</button>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>

      <div class="col-xl-8">
        <form @submit.prevent="validateBeforeSubmit('campanha')" data-vv-scope="campanha">
          <!-- Main card-->
          <div class="row">
            <div class="form-group ml-3">
              <label class="s col-form-label">Status</label>
              <div class>
                <label class="switch switch-lg">
                  <input
                    type="checkbox"
                    :checked="campanha.status == 1"
                    v-model="campanha.status"
                    :class="{'form-control':true, 'is-invalid': errors.has('campanha.status')}"
                  />
                  <span class></span>
                </label>
              </div>
              <span
                v-show="errors.has('campanha.status')"
                class="invalid-feedback"
              >{{ errors.first('campanha.status') }}</span>
            </div>
            <div class="form-group col-md-8 ml-3">
              <label class="col-form-label">Nome *</label>
              <input
                :class="{'form-control':true, 'is-invalid': errors.has('campanha.nome')}"
                v-model="campanha.nome"
                placeholder="Ex: Carrinho Abandonado"
                v-validate="'required'"
                class
                type="text"
                name="nome"
              />
              <span
                v-show="errors.has('campanha.nome')"
                class="invalid-feedback"
              >{{ errors.first('campanha.nome') }}</span>
            </div>
          </div>
          <!-- START card-->
          <div v-for="(id_sequencia, i) in sequenciasArray" :key="i">
            <div class="mb-1">
              <span class="alert alert-info p-1 col-md-12 mb-1">Sequência {{sequenciasArray[i].id_sequencia}}</span>
            </div>
            <sequencia-card @AddSequencia="AdicionarSequencia($event)" :id="sequenciasArray[i].id_sequencia" :seq="sequenciasArray[i]"></sequencia-card>
          </div>
          <div class="card card-default" v-show="campanha.campanhaSequenciaArray.length > 0">
            <div class="card-footer">
              <div class="clearfix col-md-12">
                <div class="float-right btn-block">
                  <button class="btn btn-primary float-right pull-right" type="submit">Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->

          <!-- End Main card-->
        </form>
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
import API_CAMPANHA from "../../api/campanhasAPI";

Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: 'pt',
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    API_NOTIFICATION.HideLoading();
    this.checkIfLogged();
    //this.sequenciasArray.push({ id_sequencia: 1 })
  },
  mounted() {
    this.$validator.localize("pt", {
      messages: {
        required: field => "* Este campo é obrigatório."
      },
      attributes: {}
    });
  },
  components: {
    SequenciaCard
  },
  data() {
    return {
      idSequencia: 1,
      sequenciasArray: [{ id_sequencia: 1 }],
      campanha: {
        id_ususario: 0,
        status: 1,
        nome: "",
        campanhaSequenciaArray: []
      }
    };
  },
  methods: {
    checkIfLogged() {
      //API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_CAMPANHA.GetCampanhasCarrinhoAbandonado()
          .then((resCampanhaCarrinho)=>{            
             if(resCampanhaCarrinho.data != undefined){
              this.campanha = resCampanhaCarrinho.data.sequencia;
                          
              resCampanhaCarrinho.data.sequencia.campanhaSequenciaArray.forEach((obj, i)=>{
                this.sequenciasArray[i] = obj;
                //console.log('Seqs', this.sequenciasArray[i].id_sequencia, this.sequenciasArray[i].tempo, this.sequenciasArray[i].tipo_tempo);
              })
              
            }
          })
          .catch((error)=>{
            console.log("Erro ao pegar as informações da campanha carrinho abandonado", error);
          })

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
          console.log(result);
          this.salvarSequencia();
          return;
        }
      });
    },
    adicionarSequencia() {
      this.idSequencia = this.idSequencia + 1;
      this.sequenciasArray.push({ id: this.idSequencia });
      console.log(this.sequenciasArray);
    },
    AdicionarSequencia(event) {
      const LEvent = event;
      const Finded = this.campanha.campanhaSequenciaArray.findIndex(
        x => x.id_sequencia == LEvent.id_sequencia
      );
      if (Finded > -1) {
        this.campanha.campanhaSequenciaArray[Finded] = LEvent;
      } else {
        this.campanha.campanhaSequenciaArray.push(LEvent);
      }      
      console.log(this.campanha.campanhaSequenciaArray);
    },
    salvarSequencia() {
      API_NOTIFICATION.ShowLoading();
      API_CAMPANHA.SalvarCampanhaCarrinhoAbandonado(this.campanha)
        .then(resCampanha => {
          API_NOTIFICATION.showNotification('Campanha Salva com Sucesso!', 'success');
        })
        .catch(error => {
          console.log("Erro ao salvar campanha", error);
        });
    }
  }
};
</script>