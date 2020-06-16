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
.CampanhaStatusInativo {
  border-radius: 50% !important;
  background-color: red;
  height: 20px;
  width: 20px;
}
.CampanhaStatusAtivo {
  border-radius: 50% !important;
  background-color: green;
  height: 20px;
  width: 20px;
}
.imgIntegracao {
  width: 40%!important;
  height: auto;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fab fa-free-code-camp">
        <span class="ml-2"></span>
      </span>Campanhas
    </div>
    <strong>
      Todos as campanhas, disponíveis até agora, estão aqui.
      <br />
      <small>Caso queira adicionar mais campanhas, por favor, mande-nos um e-mail {suporte@thuor.com} e solicite inclusão. Teremos prazer em lhe atender.</small>
    </strong>

    <div class="row mt-3" v-for="{id, nome} in campanhaList" :key="id">
      <div class="col-xl-4">
        <!-- Aside card-->
        <div class="card b">
          <div class="card-body bb">
            <div class="clearfix">
              <div class="float-left p-1">
                <span class="spanNome">{{nome}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end Aside card-->
      </div>
      <div class="col-xl-8">
        <!-- Main card-->
        <div class="card b">
          <div class="card-header">
            <div class="my-2 row p-0">
              <img
                class="mr-2 img-fluid thumb48 col-md-3 imgIntegracao mt-2"
                v-bind:src="getImageIntegracaoCampanha(id)"
                alt="App"
              />
              <span class="col-md-4 mt-2">{{getApelidoByID(id)}}</span>
              <button
                class="btn btn-info col-md-3"
                v-on:click="acaoVerEditarIntegracaoCampanha(id)"
              >
                <h4><span class="fa fa-edit mt-2">Configurar</span></h4>
              </button>
              <div class="float-right mt-3 col-md-1">
                <span class="pull-right float-right" v-bind:class="getStatusClassByID(id)"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- End Main card-->
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

import API_NOTIFICATION from "../../api/notification";

// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_CHECKOUT from "../../api/checkoutAPI";
import API_HEADERS from "../../api/configAxios";
import API_CAMPANHA from "../../api/campanhasAPI";

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
      campanhaList: [],
      campanhaIDLists: []
    };
  },
  methods: {
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_CAMPANHA.GetCampanhas()
            .then(resCampanhas => {
              //console.log(resCampanhas.data);
              this.campanhaList = resCampanhas.data;
              this.campanhaList.forEach((obj, i) => {
                API_CAMPANHA.GetCampanhaByID(obj.id).then(resCampanhaID => {
                  this.campanhaIDLists.push(resCampanhaID.data);                 
                });
              });
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
    acaoVerEditarIntegracaoCampanha(id) {
      if (id == 1) {
        this.$router.push("/configs/campanhas/abandcart");
      }
    },
    getImageIntegracaoCampanha(id) {
      if (id == 1) return "/img/abandoned_cart.png";
      return "";
    },
    getApelidoByID(id) {
      if (id > 0) {
        if (this.campanhaIDLists.find(x => x.campanha == id) !== undefined) {
          return this.campanhaIDLists.find(x => x.campanha == id).nome;
        }
      }

      return "";
    },
    getStatusByID(id) {
      if (this.campanhaIDLists.find(x => x.campanha == id) !== undefined) {
        return this.campanhaIDLists.find(x => x.campanha == id).status;
      }
    },
    getStatusClassByID(id) {
      //console.log(this.campanhaIDLists);
      if (this.campanhaIDLists.find(x => x.campanha == id) !== undefined) {
        return this.campanhaIDLists.find(x => x.campanha == id).status
          ? "CampanhaStatusAtivo"
          : "CampanhaStatusInativo";
      }
    }
  }
};
</script>
