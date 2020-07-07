<style scoped>
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
  border-radius: 50% !important;
  width: 20px;
  height: 20px;
  padding: 3px !important;
  font-size: 12px !important;
}
.cursorP {
  cursor: pointer !important;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="icon-shuffle">
        <span class="ml-2"></span>
      </span>Cross Sells
    </div>
    <small>
      Todos os Cross Selling criados por você estão aqui.
      <br />Para criar um novo CrossSell, basta clicar no botão de 'Novo CrossSell'.
    </small>
    <p></p>
    <div class="float-left pull-left mb-3">
      <button class="btn btn-danger btn-lg" v-on:click="excluirCrossSellSelecionado()" v-show="selectedCrossSell > 0">
        <span class="fa fa-trash"></span> Excluir Selecionado
      </button>
    </div>
     <div class="float-left pull-left mb-3">
      <button class="btn btn-danger btn-lg" v-on:click="instalarCrossSellApp()">
        <span class="fas fa-crosshairs"></span> Instalar App
      </button>
    </div>
    <div class="float-right pull-right mb-3">
      <button class="btn btn-primary btn-lg" v-on:click="adicionarNovoCrossSell()">
        <span class="fa fa-plus"></span> Novo CrossSell
      </button>
    </div>
    <div class="wrapper col-xl-12">
      <label
        class="float-left mr-2 col-form-label labelForm"
        for="inlineFormInputGroup"
      >Reg. p/ Pág.</label>
      <select
        v-model="rowsPerPage"
        id="select"
        class="selectPage form-control pull-left float-left"
      >
        <option v-for="pageSize in pageSizeMenu" :value="pageSize">{{pageSize}}</option>
      </select>
      <form id="search" class="form-group pull-right float-right">
        <input name="query" placeholder="Pesquise aqui" class="form-control" v-model="searchQuery" />
      </form>
      <div id="grid-template">
        <div class="table-header-wrapper">
          <table class="table-header">
            <thead >
              <th style="width: 220px!important;">
                <strong class="col-md-3 pedido" style="top: 2px">
                  <b>Nome</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th style="width: 250px!important;">
                <strong class="col-md-3 pedido" >
                  <b>Ao Visualizar</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th style="width: 260px!important;">
                <strong class="col-md-3 pedido">
                  <b>Oferecer</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="data pl-0" style="width: 200px!important;">
                <strong class>
                  <b>Onde Oferecer</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="status pl-2">
                <strong class="col-md-1">
                  <b>Status</b>
                </strong>
                <span class="arrow"></span>
              </th>
            </thead>
          </table>
        </div>
        <div class="table-body-wrapper">
          <table class="table-body">
            <tbody>
              <tr
                v-for="{id, status, tipo_checkout, nome, produto_from, produto_to} in dataPerPage" class="cursorP" v-on:click="SelectCrossSell(id, nome)"
              >
                <td style="width: 200px!important;" class="data padding1010">
                   <router-link :to="{path: '/marketing/crosssell/edit/' + getCripto(id, status)}">
                    <p class="col-md-12 mb-0 dataPedido">{{nome}}</p>
                  </router-link>
                  
                </td>
                <td style="width: 200px!important;" class="data padding1010">
                  <p class="col-md-12 mb-0 dataPedido">{{produto_from}}</p>
                </td>
                <td style="width: 200px!important;" class="data padding1010">
                  <p class="col-md-12 mb-0 dataPedido">{{produto_to}}</p>
                </td>
                <td style="width: 200px!important;" class="data padding1010">
                  <p class="col-md-12 mb-0 dataPedido">{{tipo_checkout}}</p>
                </td>
                <td class="pl-0" style="min-width: 100px!important; width: 100px!important;">
                  <div
                    class="spanStatus alert float-left pull-left"
                    v-bind:class="getClassStatus(status)"
                  ></div>
                </td>
              </tr>
              <!-- <tr v-for="entry in dataPerPage">
                <td v-for="key in columns">{{entry[key]}}</td>
              </tr>-->
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
import API_TRANSACOES from "../../api/transacoesAPI";
import API_LOJA from "../../api/lojaAPI";
import API_PRODUTOS from "../../api/produtosAPI";
import API_MKT from "../../api/marketingAPI";
import Datatable from "@/components/Tables/Datatable";
import moment from "moment";
import dateFormat from "dateformat";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";
import Hashids from "hashids";
import UTILIS_API from "../../api/utilisAPI";
import API_APPS from '../../api/appsAPI';
import API_INTEGRACAO_SHOPIFY_APPS from "../../api/integracoesShopifyAPI";
TimeAgo.addLocale(pt);
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
  props: {
    //data: Array
    // columns: Array
  },
 
  created() {
    this.timeAgo = new TimeAgo("pt-BR");

    let sortOrders = {};

    this.columns.forEach(function(key) {
      sortOrders[key] = 1;
    });
    this.sortOrders = sortOrders;
    this.checkIfLogged();
    //this.data = this.gridData;
    ///sconsole.log("Filtered", this.dataPerPage);
  },
  data() {
    return {
      timeAgo: "",
      searchQuery: "",
      sortKey: "",
      sortOrders: {},
      login: {
        email: "",
        password: "",
        rememberme: false
      },
      selectedCrossSell: 0,
      nomeselectedCrossSell: '',
      gridData: [],
      startRow: 0,
      rowsPerPage: 10,
      pageSizeMenu: [10, 20, 50, 100],
      data: Array,
      pedidosList: {},
      columns: [        
        "id",
        "nome",
        "status",
        "produto_from",
        "produto_to",
        "tipo_checkout"
      ],
    };
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
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_LOJA.GetDadosLojaByIdUsuario(res.data.id)
            .then(resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              API_MKT.GetCrossSells()
                .then(retornoUpSell => {
                  retornoUpSell.data.forEach((obj, i) => {
                    API_PRODUTOS.GetProdutoIDThuor(obj.id_produto_from)
                      .then(resProdFrom => {
                        console.log(obj.id_produto_to, obj.id_produto_to);
                        const LProdTo = obj.id_produto_to.split(',');
                        const LArrayProTo =[];
                        LProdTo.forEach((objP, i)=>{
                          API_PRODUTOS.GetProdutoIDThuor(objP)
                          .then(async resProdTo => {
                            LArrayProTo.push(resProdTo.data.titulo_produto);
                          });
                        })
                        API_PRODUTOS.GetProdutoIDThuor(LProdTo[0])
                          .then(async resProdTo => {
                            this.gridData.push({
                              id: obj.id,
                              nome: obj.nome,
                              status: obj.status,
                              quando_oferecer: await this.getTipoQuandoOferecer(
                                obj.quando_oferecer
                              ),
                              produto_from: resProdFrom.data.titulo_produto,
                              produto_to: LArrayProTo.toString()
                            });
                          })
                          .catch(errorProd => {
                            console.log("Erro ao pegar o produto", errorProd);
                          });
                      })
                      .catch(errorProd => {
                        console.log("Erro ao pegar o produto", errorProd);
                      });
                  });
                  
                })
                .catch(error => {
                  console.log("Erro ao pegar os UpSells", error);
                });
            })
            .catch(error => {
              console.log("Erro ao pegar dados da loja", error);
            });
            API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    getID(id) {
      return id;
    },
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getTipoQuandoOferecer(id) {
      return new Promise(async (resolve, reject) => {
        var LReturn = "";
        if (id == 2) LReturn = "No Carrinho";
        if (id == 1) LReturn = "No Produto";
        resolve(LReturn);
      });
    },
    movePages: function(amount) {
      let newStartRow = this.startRow + amount * this.rowsPerPage;
      if (
        this.filteredData != undefined &&
        newStartRow >= 0 &&
        newStartRow < this.filteredData.length
      ) {
        this.startRow = newStartRow;
      }
    },
    toCamelCase(str) {
      var LSTR2 = "";
      if (str.indexOf(" ") > -1) {
        var LSpace = str.split(" ");
        LSpace.forEach((objS, i) => {
          var LStr = objS.split("");
          LStr.forEach((obj, i) => {
            if (i == 0) LSTR2 = LSTR2 + obj.toString().toUpperCase();
            if (i > 0) LSTR2 = LSTR2 + obj.toString().toLowerCase();
          });
          LSTR2 = LSTR2 + " ";
        });
      } else {
        var LStr = str.split("");
        LStr.forEach((obj, i) => {
          if (i == 0) LSTR2 = LSTR2 + obj.toString().toUpperCase();
          if (i > 0) LSTR2 = LSTR2 + obj.toString().toLowerCase();
        });
      }
      return LSTR2;
    },
    toUpperCase(str) {
      return str.toUpperCase();
    },
    getImagePaymentID(paymentID) {
      if (paymentID == "bolbradesco") return "img/barcode.png";
      else if (paymentID == "master") return "img/master.png";
      else if (paymentID == "visa") return "img/visa.png";
      else return "img/visa.png";
    },
    getClassStatus(status) {
      if (status == "1") return "alert-success";
      if (status == "0") return "alert-danger";
      return "alert-danger";
    },
    getCripto(id_pedido, id_ordem) {
      // console.log(id_produto);
      const hashids = new Hashids("", 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      const produtHashed = hashids.encode(
        id_pedido.toString(),
        id_ordem.toString()
      );
      // const numbers = hashids.decode(produtHashed);
      // console.log("ID Hashedid", produtHashed);
      // console.log("ID Deshashed", numbers);
      return produtHashed;
    },
    adicionarNovoCrossSell() {
      this.$router.push("/marketing/crosssell/add");
    },
    SelectCrossSell(id, nome) {
      this.selectedCrossSell = id;
      this.nomeselectedCrossSell = nome;
    },
    excluirCrossSellSelecionado(){
      API_NOTIFICATION.showConfirmDialog('EXCLUSÃO', 'Deseja realmente excluir ' + this.nomeselectedCrossSell + '?', 'warning', this.ExcluirCrossSell);
    },
    ExcluirCrossSell(){
      API_MKT.DeleteCrossSellByID(this.selectedCrossSell)
      .then((resExclude)=>{
        API_NOTIFICATION.showNotification('Excluído com Sucesso!', 'success');
        setTimeout(() => {
          this.checkIfLogged();
        }, 1000);
      })
      .catch((error)=>{
        console.log("Erro ao excluir o UpSell " + this.nomeselectedCrossSell, error);
      })
    },
    instalarCrossSellApp(){
      API_NOTIFICATION.showNotificationConfirm("Thuor Cross Sell", "Você Está Prestes a Instalar o App Cross Sell na Sua Loja. Continuar?", "question", ()=>{
        API_INTEGRACAO_SHOPIFY_APPS.InstalaAppThuorCrossSellShopify()
        .then((res)=>{
          API_NOTIFICATION.showNotification('Instalado com Sucesso!', 'success');
        })
      })
    }
  }

};
</script>