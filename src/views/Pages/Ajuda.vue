<style scoped>
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
.paddingStatus {
  padding-left: 25px !important;
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
  width: 20px !important;
  height: 20px;
  padding: 3px !important;
  font-size: 12px !important;
}
.cursorP {
  cursor: pointer !important;
}
.imagemServico {
  height: 20px !important;
  width: 80px !important;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-life-ring">
        <span class="ml-2"></span>
      </span>Ajuda
    </div>
    <small>
      Toda Ajuda que você precisa para utilizar o Thuor está aqui.
      <br />Para encontrar mais rápido o que você precisa, basta utilizar o campo de busca e digitar, por exemplo, 'Como Instalar...'.
    </small>
    <p></p>

    <div class="wrapper col-xl-12">
      <form id="search" class="form-group pull-right float-right">
        <input name="query" placeholder="Pesquise aqui" class="form-control" v-model="searchQuery" />
      </form>
      <div id="grid-template" v-for="{id, titulo, texto, tag} in dataPerPage" :key="id">
        <div id="accordion1">
          <div class="card b0 mb-2">
            <div class="card-header">
              <h4 class="card-title">
                <a class="text-inherit cursorP" v-b-toggle.acc1collapse1>
                  <small>
                    <em class="fa fa-plus text-primary mr-2 cursorP"></em>
                  </small>
                  <span>{{titulo}}</span>
                </a>
              </h4>
            </div>
            <b-collapse id="acc1collapse1">
              <div class="card-body">
                <p v-html="texto">
                </p>
                <div class="text-right">
                  <small class="text-muted mr-2">Essa informação foi útil?</small>
                  <button class="btn btn-secondary btn-xs" type="button">
                    <em class="fa fa-thumbs-up text-muted"></em>
                  </button>
                  <button class="btn btn-secondary btn-xs" type="button">
                    <em class="fa fa-thumbs-down text-muted"></em>
                  </button>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>

      <!-- <div id="grid-template">
        <div class="table-header-wrapper">
          <table class="table-header">
            <thead>
              <th>
                <strong class="col- pedido" style="top: 2px">
                  <b>Nome</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class=" hiddenMobile padding1010">
                <strong class="col pedido">
                  <b>Serviço</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class=" hiddenMobile padding1010">
                <strong class="col- pedido">
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
                v-for="{id, nome_pixel, status, tipo} in dataPerPage"
                class="cursorP"
                v-on:click="SelectPixel(id, nome_pixel)"
              >
                <td  class="col- padding1010">
                  <router-link :to="{path: '/marketing/pixels/edit/' + getCripto(id, status)}">
                    <p class="col-md-12 mb-0 numeroPedido">{{nome_pixel}}</p>
                  </router-link>
                  
                </td>
                <td class="col- padding1010 hiddenMobile">
                  <img :src="getTipoPixel(tipo)" class="avatar imagemServico">
                </td>
                <td class="pl-0 hiddenMobile paddingStatus">
                  <div
                    class="col- spanStatus alert  padding1010 "
                    v-bind:class="getClassStatus(status)"
                  ></div>
                </td>
              </tr>            
            </tbody>
          </table>
        </div>
      </div>
      <div id="page-navigation" class="col-xl-12 mt-3">
        <button class="float-left btn btn-primary col-md-2" @click="movePages(-1)">Voltar</button>
        <p
          class="float-left text-center auto col-md-8 mt-1"
        >{{startRow / rowsPerPage + 1}} out of {{Math.ceil(filteredData.length / rowsPerPage)}}</p>
        <button class="float-right btn btn-primary col-md-2" @click="movePages(1)">Próxima</button>
      </div>-->
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
import API_PIXEL from "../../api/pixelsAPI";
import Datatable from "@/components/Tables/Datatable";
import moment from "moment";
import dateFormat from "dateformat";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";
import Hashids from "hashids";
import UTILIS_API from "../../api/utilisAPI";
import API_AJUDA from "../../api/ajudaAPI";

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
      selectedPixel: 0,
      nomeselectedPixel: "",
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
      ]
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
              API_AJUDA.GetAjuda()
                .then(retornoAjuda => {
                  retornoAjuda.data.forEach((obj, i) => {
                    this.gridData.push({
                      id: obj.id,
                      titulo: obj.titulo,
                      texto: obj.texto,
                      tag: obj.tag
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
    adicionarNovoPixel() {
      this.$router.push("/marketing/pixels/add");
    },
    SelectPixel(id, nome) {
      this.selectedPixel = id;
      this.nomeselectedPixel = nome;
    },
    excluirPixelSelecionado() {
      API_NOTIFICATION.showConfirmDialog(
        "EXCLUSÃO",
        "Deseja realmente excluir " + this.nomeselectedPixel + "?",
        "warning",
        this.Excluir
      );
    },
    Excluir() {
      API_PIXEL.DeletePixelByID(this.selectedPixel)
        .then(resExclude => {
          API_NOTIFICATION.showNotification("Excluído com Sucesso!", "success");
          setTimeout(() => {
            this.checkIfLogged();
          }, 1000);
        })
        .catch(error => {
          console.log(
            "Erro ao excluir o UpSell " + this.nomeselectedPixel,
            error
          );
        });
    },
    getTipoPixel(id) {
      if (id == 1) return "https://github.bubbstore.com/svg/facebook.svg";
      if (id == 2) return "https://github.bubbstore.com/svg/google_ads.svg";
    }
  }
};
</script>