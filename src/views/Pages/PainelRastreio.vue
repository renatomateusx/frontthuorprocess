<style scoped>
.hidden {
  display: none !important;
}
.iconP{
  cursor:pointer!important;
}
.alertPadding{
  padding: 0!important;
}
@media only screen and (max-width: 992px) {
  .hiddenMobile {
    display: inline;
  }
}
@media only screen and (max-width: 1000px) {
  .hiddenMobile {
    display: none;
  }
  .expandInMobile {
    width: 100% !important;
    margin-top: 5px;
  }
  .paddingInMobile {
    padding: 10px 20px !important;
  }
}
.card-flat {
  margin-top: 80px !important;
}
.shopifysvg {
  width: 20px !important;
  height: 20px !important;
}
.borderButton {
  border: solid 1px grey;
}
.titulo_produto {
  position: relative;
  top: 1.5em;
}
.circle {
  width: 70px;
  height: auto;
}
.id_produto {
  float: left;
  font-size: 12px !important;
}
.display-inline {
  float: left;
  display: inline-flex;
}
.card-flat {
  margin-top: 80px !important;
}
.shopifysvg {
  width: 20px !important;
  height: 20px !important;
}
.borderButton {
  border: solid 1px grey;
}
.titulo_produto {
  position: relative;
  top: 1.5em;
}
.circle {
  width: 70px;
  height: auto;
}
.id_produto {
  float: left;
  font-size: 12px !important;
}
.display-inline {
  float: left;
  display: inline-flex;
}
.td {
  width: 150px;
}
table {
  border-spacing: 0;
  width: 100%;
}

th {
  background-color: #5d9cec;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  border-bottom: 1px #cfdbe2 solid;
}

th,
td {
  min-width: 150px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fae042;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fae042;
}

#grid-template {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  width: 100%;
}
.selectPage {
  width: 80px;
}
.pedido {
  padding: 10px 10px !important;
}
.padding1010 {
  padding: 10px 10px !important;
}
.nomeComprador {
  font-size: 11px !important;
}

.numeroPedido {
  font-size: 14px !important;
  font-family: Rubik, sans-serif;
  font-weight: 700;
}
.imgMethodo {
  width: 25px !important;
  text-align: center;
}
.metodo {
  max-width: 20px !important;
  min-width: 20px !important;
  width: 20px !important;
}
.data {
  width: 100px !important;
}
.dataPedido {
  font-size: 13px !important;
  margin: 0;
  padding: 0;
}
.tempoPedido {
  font-size: 11px !important;
  margin: 0;
  padding: 0;
}
.total {
  width: 100px !important;
  min-width: 100px !important;
  margin-left: 0px !important;
}
.spanStatus {
  border-radius: 4px !important;
  height: 20px;
  padding: 3px !important;
  font-size: 12px !important;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fab fa-searchengin"></span>Thuor Tracker
    </div>
    <small>
      Todos os seus rastreios estão aqui.
      <br />Você pode importar quantos quiser. Se você usa o nosso checkout transparente a importação é automática.    
    </small>
      <br/><strong> Aceitamos apenas arquivos com extensão '.csv (separado por vírgula)'</strong>
    <p></p>
    <button type="button" v-on:click="uploadFileRastreio()" class="btn btn-primary btn-lg">
      <span class="fa fa-upload"></span> Fazer Upload
    </button>
    <input type="file" id="fileUpload" accept=".csv, .txt" class="hidden" />
    <button type="button" v-on:click="baixarArquivoExemplo()" class="ml-2 btn btn-warning btn-lg">
      <span class="fa fa-eye"></span> Ver de Arquivo Exemplo
    </button>
    <p></p>
    <div class="wrapper col-xl-12">
      <label
        class="float-left mr-2 col-form-label labelForm expandInMobile"
        for="inlineFormInputGroup"
      >R. p/ Pág.</label>
      <select
        v-model="rowsPerPage"
        id="select"
        class="selectPage form-control pull-left float-left expandInMobile"
      >
        <option v-for="pageSize in pageSizeMenu" :value="pageSize">{{pageSize}}</option>
      </select>
      <form id="search" class="form-group pull-right float-right expandInMobile col-xl-6 row">
        
        <input
          name="query"
          placeholder="Pesquise por: Nome, Código, E-mail, Pedido, Status, Data"
          class="form-control col-xl-11"
          v-model="searchQuery"
        />
        <span class="fa-2x fa fa-trash iconP col-xl-1 mt-1" title="Limpar Campo de Pesquisa" v-on:click="()=>{ searchQuery = '';}"></span>
      </form>
      <div class="row col-xl-12 mb-2">
        <!-- info -->
        <button type="button" v-on:click="mudaStatusPesquisa('EXCLUÍDOS')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-info">{{getQTD('EXCLUÍDOS')}}</span> Excluídos</button>
        <button type="button" v-on:click="mudaStatusPesquisa('AGUARDANDO ENVIO')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-info">{{getQTD('AGUARDANDO ENVIO')}}</span> Aguardando Envio</button>
        <!-- success -->
        <button type="button" v-on:click="mudaStatusPesquisa('EM TRÂNSITO')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-success">{{getQTD('EM TRÂNSITO')}}</span> Em Trânsito</button>
        <button type="button" v-on:click="mudaStatusPesquisa('SAIU PARA ENTREGA')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-success">{{getQTD('SAIU PARA ENTREGA')}}</span> Saiu para Entrega</button>
        <button type="button" v-on:click="mudaStatusPesquisa('ENTREGUE')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-success">{{getQTD('ENTREGUE') || getQTD('DELIVERED')}}</span> Entregues</button>

        <!-- warning -->
        <button type="button" v-on:click="mudaStatusPesquisa('SEM UPDATE')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-warning">{{getQTD('SEM UPDATE')}}</span> Sem Update</button>
        <button type="button" v-on:click="mudaStatusPesquisa('INVÁLIDO')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-warning">{{getQTD('INVÁLIDO')}}</span> Inválido</button>
        <button type="button" v-on:click="mudaStatusPesquisa('PENDENTE')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-warning">{{getQTD('PENDENTE') || getQTD('PENDING')}}</span> Pendente</button>
        <button type="button" v-on:click="mudaStatusPesquisa('TRIBUTADOS')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-warning">{{getQTD('TRIBUTADOS')}}</span> Tributados</button>

        <!-- danger -->
        <button type="button" v-on:click="mudaStatusPesquisa('NÃO PAGO')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-danger">{{getQTD('NÃO PAGO')}}</span> Não Pago</button>
        <button type="button" v-on:click="mudaStatusPesquisa('ATRASADOS')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-danger">{{getQTD('ATRASADOS')}}</span> Atrasados</button>
        <button type="button" v-on:click="mudaStatusPesquisa('RET. AO REMETENTE')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-danger">{{getQTD('RET. AO REMETENTE')}}</span> Ret. ao Rem.</button>
        <button type="button" v-on:click="mudaStatusPesquisa('FALHA NA ENTREGA')" class="ml-2 btn btn-secondary btn-sm"> <span class="badge badge-danger">{{getQTD('FALHA NA ENTREGA')}}</span> Falha na Entrega</button>

      </div>
      <div id="grid-template">
        <div
          class="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl"
        >
          <table class="table">
            <thead>
              <tr>
                <th class="col-" aria-hidden="true">
                  <strong class="col">
                    <b>PEDIDO</b>
                  </strong>
                  <span class="arrow"></span>
                </th>
                <th class="col-" aria-hidden="true">
                  <strong class>
                    <b>NOME</b>
                  </strong>
                  <span class="arrow"></span>
                </th>
                <th class="col-" aria-hidden="true">
                  <strong class="col">
                    <b>STATUS</b>
                  </strong>
                  <span class="arrow"></span>
                </th>
                <th class="col-" aria-hidden="true">
                  <strong class="col">
                    <b class="text-center">STATUS PAINEL</b>
                  </strong>
                  <span class="arrow"></span>
                </th>
                <th class="col-" aria-hidden="true">
                  <strong class="col">
                    <b class="text-center">DATA</b>
                  </strong>
                  <span class="arrow"></span>
                </th>
                <th class="col-" aria-hidden="true">
                  <strong class="col">
                    <b>CÓDIGO</b>
                  </strong>
                  <span class="arrow"></span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div
          class="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl"
        >
          <!-- table table-striped table-hover w-100 -->
          <table class="table">
            <tbody>
              <tr
                v-for="{order_id,fulfillment_id,id_usuario,status,status_text,status_interno,data,email, telefone,tracker_number,nome, last_updated} in dataPerPage"
              >
                <td aria-hidden="true" class="col-">
                  <div class="row mt-2">
                    <div class="checkbox c-checkbox">
                      <label>
                        <input type="checkbox" class="checkOrders" v-bind:value="order_id" />
                        <span class="fa fa-check"></span>
                      </label>
                    </div>
                    <span class="id_produto">{{order_id}}</span>
                  </div>
                </td>
                <td aria-hidden="true" class="col-">
                  <b>{{nome}}</b>
                </td>
                <td aria-hidden="true" class="col-">
                  <b :class="'alertPadding alert alert-'+GetStatusColor(GetTranslateStatus(status_text) || 'SEM DEFINIÇÃO')">{{ GetTranslateStatus(status_text)}}</b>
                </td>
                <td aria-hidden="true">
                  <b :class="'alertPadding alert alert-'+GetStatusColor(status_interno || 'SEM DEFINIÇÃO')">{{status_interno || 'SEM DEFINIÇÃO'}}</b>
                </td>
                <td aria-hidden="true">{{last_updated | formatDate}}</td>
                <td aria-hidden="true">
                  <span class="col">{{tracker_number}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="page-navigation" class="col-xl-12 mt-3">
        <button class="float-left btn btn-primary col-md-2" @click="movePages(-1)">Anterior</button>
        <p
          class="float-left text-center auto col-md-8 mt-1"
        >{{startRow / rowsPerPage + 1}} de {{Math.ceil(filteredData.length / rowsPerPage)}}</p>
        <button class="float-right btn btn-primary col-md-2" @click="movePages(1)">Próxima</button>
      </div>
    </div>
  </ContentWrapper>
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
import API_PRODUTOS from "../../api/produtosAPI";
import Datatable from "@/components/Tables/Datatable";
import moment from "moment";
import UTILIS_API from "../../api/utilisAPI";
import API_LOJA from "../../api/lojaAPI";
import constantes from "../../api/constantes";
import API_RASTREIO from "../../api/rastreioAPI";
Vue.use(Loading);

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY hh:mm");
  }
});

export default {
  components: {
    Datatable
  },
  computed: {
    filteredData: function() {
      let sortKey = this.sortKey;
      let filterKey = this.searchQuery && this.searchQuery.toLowerCase();
      let order = this.sortOrders[sortKey] || 1;
      let data = this.gridData;

      if (filterKey) {
        data = data.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
    dataPerPage: function() {
      return this.filteredData.filter(
        (item, index) =>
          index >= this.startRow && index < this.startRow + this.rowsPerPage
      );
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  created() {
    let sortOrders = {};

    this.columns.forEach(function(key) {
      sortOrders[key] = 1;
    });
    this.sortOrders = sortOrders;
    this.checkIfLogged();
  },
  data() {
    return {
      LNoImage: "https://app.thuor.com/img/no-image.png",
      login: {
        email: "",
        password: "",
        rememberme: false
      },
      searchQuery: "",
      sortKey: "",
      sortOrders: {},
      columns: ["id", "nome", "variantes", "estoque", "modificado"],
      gridData: [],
      startRow: 0,
      rowsPerPage: 10,
      pageSizeMenu: [10, 20, 50, 100],
      data: Array,
      pedidosList: {},

      produtosList: {}
    };
  },
  methods: {
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.showLoading();
          // simulate AJAX

          return;
        }
        console.log("Correct them errors!");
      });
    },
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    movePages: function(amount) {
      let newStartRow = this.startRow + amount * this.rowsPerPage;
      if (
        this.filteredData != undefined &&
        newStartRow > 0 &&
        newStartRow < this.filteredData.length
      ) {
        this.startRow = newStartRow;
      }
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          this.getFulfillments();
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    async uploadFileRastreio() {
      var arquivoInvalido = false;
      const LFile = document.getElementById("fileUpload");
      LFile.addEventListener("change", () => {
        API_NOTIFICATION.ShowLoading();
        var file = LFile.files[0];
        var reader = new FileReader();
        reader.onload = async function(progressEvent) {
          // By lines
          var lines = this.result.split(/\r\n|\n/);
          lines.forEach(async (obj, i) => {
            if (i > 0) {
              const Linhas = obj.split(",");
              if (Linhas.length >= 5) {
                var fulfillbody = {
                  nome_comprador: Linhas[0],
                  email_comprador: Linhas[1],
                  telefone_comprador: Linhas[2],
                  cpf_comprador: Linhas[3],
                  numero_pedido: Linhas[4],
                  codigo_rastreio: Linhas[5]
                };
                console.log(fulfillbody);
                const LRetorno = await API_RASTREIO.SaveFulFillment(
                  fulfillbody
                );
              }
            }
          });

          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Arquivo Importado",
            "success"
          );
        };
        reader.readAsText(file);
      });
      if (LFile) {
        LFile.click();
      }
    },
    getImage(json_dados_produto) {
      if (json_dados_produto != null && json_dados_produto != undefined) {
        if (json_dados_produto.image != null) {
          return json_dados_produto.image.src;
        }
        if (
          json_dados_produto.image == null &&
          json_dados_produto.images.length == 0
        ) {
          return this.LNoImage;
        }
        return "";
      }
      return "";
    },
    getFulfillments() {
      API_RASTREIO.GetFulFillment()
        .then(retFulFil => {
          this.gridData = [];
          retFulFil.forEach((obj, i) => {
            //var LImages = obj.json_dados_produto;
            //this.produtosList = retProd.data;
            this.gridData.push({
              order_id: obj.order_id,
              fulfillment_id: obj.fulfillment_id,
              id_usuario: obj.id_usuario,
              status: this.GetTranslateStatus(obj.status_text),
              status_interno: obj.status_interno,
              data: obj.data,
              email: obj.email,
              telefone: obj.telefone,
              tracker_number: obj.tracker_number,
              nome: obj.nome,
              last_updated: obj.last_updated,
              status_text: obj.status_text
            });
            console.log(this.gridData);
          });

          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao pegar produtos", error);
        });
    },
    getData(data) {
      return moment(data).format("DD-MM-YYYY");
    },
    baixarArquivoExemplo() {
      API_NOTIFICATION.ShowLoading();
      const URL =
        "https://docs.google.com/spreadsheets/d/10okECILzk7aIVcfHhIIUDPf3Tz8zpYF83OO2bMDDzuY/edit?usp=sharing";
      UTILIS_API.OpenWindow(URL);
      API_NOTIFICATION.HideLoading();
    },
    getQTD(STATUS){
      const lqtd = this.gridData.filter(x => x.status == STATUS);
      if(lqtd){
        return lqtd.length;
      }
      return 0;
    },
    mudaStatusPesquisa(STATUS){
      const checkedBoxes = document.querySelectorAll('input[class=checkOrders]:checked');
      if(checkedBoxes && checkedBoxes.length > 0){
          API_NOTIFICATION.showConfirmDialog("Atenção", "Deseja Alterar os Status dos Rastreios Selecionados?", "question", ()=>{
            API_NOTIFICATION.ShowLoading();
              checkedBoxes.forEach(async (obj, i)=>{
                var status ={
                  status_interno : STATUS,
                  order_id: obj.value
                }
                const LUpdate = await API_RASTREIO.UpdateStatusInterno(status);
              /* MUDA O STATUS NA BASE PARA O QUE FOI SOLICITADO */
              });
              API_NOTIFICATION.showNotificationW('Pronto', 'Status Atualizado', 'success');
              setTimeout(() => {
                  this.checkIfLogged();
              }, 1500);
        })
        
      }else{
        this.searchQuery = STATUS;
      }
    },
    GetStatusColor(STATUS){
      return UTILIS_API.GetStatusColor(STATUS);
    },
    GetTranslateStatus(STATUS){
      if(STATUS == "DELIVERED"){
        return "ENTREGUE";
      }
      if(STATUS == "PENDING"){
        return "PENDENTE";
      }
      if(STATUS == "Objeto entregue ao destinatário"){
        return "ENTREGUE"
      }
      if(STATUS == "Recebido por transporte aéreo"){
        return "EM TRÂNSITO";
      }
      if(STATUS == "Objeto encaminhado"){
        return "EM TRÂNSITO";
      }
      if(STATUSS == "Objeto saiu para entrega ao destinatário"){
        return "SAIU PARA ENTREGA"
      }
      if(STATUS == "Carteiro não atendido - Entrega não realizada"){
        return "FALHA NA ENTREGA";
      }
      if(STATUS == "Objeto entregue ao destinatário"){
        return "ENTREGUE";
      }
    }
  }
};
</script>
