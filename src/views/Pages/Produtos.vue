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
      <span class="fa fa-tag"></span>Produtos
    </div>
    <small>
      Todos os seus produtos estão aqui?
      <br />Pode demorar um tempo até que a sua loja nos envie. Caso queira forçar a importação, clique no botão de importar abaixo.
    </small>
    <p></p>
    <button type="button" v-on:click="importFromShopify()" class="btn btn-secondary btn-lg">
      <span class>
        <img src="../../../public/img/shopify.svg" width="25" height="25px" />
      </span> Importar do Shopify
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
      <form id="search" class="form-group pull-right float-right expandInMobile">
        <input name="query" placeholder="Pesquise aqui" class="form-control" v-model="searchQuery" />
      </form>
      <div id="grid-template">
        <div class="table-header-wrapper">
          <table class="table-header">
            <thead>
              <th style="width: 10em!important; min-width: 10em!important" class="hiddenMobile">
                <strong class="col-md-4 pedido">
                  <b>ID</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th
                class="data pl-0 paddingInMobile"
                style="width: 30em!important;min-width: 30em!important;"
              >
                <strong class>
                  <b>NOME</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th
                class="data pl-0 hiddenMobile"
                style="min-width: 9em!important; width: 9em!important;"
              >
                <strong class>
                  <b>VARIANTES</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th
                class="status pl-2 hiddenMobile"
                style="min-width: 9em!important; width: 9em!important;"
              >
                <strong class="col-md-2">
                  <b>ESTOQUE</b>
                </strong>
                <span class="arrow"></span>
              </th>

              <th
                class="status pl-2 hiddenMobile"
                style="min-width: 9em!important; width: 9em!important;"
              >
                <strong class="col-md-2">
                  <b>MODIFICADO</b>
                </strong>
                <span class="arrow"></span>
              </th>
            </thead>
          </table>
        </div>
        <div class="table-body-wrapper">
          <!-- table table-striped table-hover w-100 -->
          <table class="table-body">
            <tbody>
              <tr v-for="{id_produto_json, titulo_produto, json_dados_produto} in dataPerPage">
                <td class="hiddenMobile" style="min-width: 10em!important; width: 10em!important;">
                  <div class="row">
                    <div class="checkbox c-checkbox">
                      <label>
                        <input type="checkbox" />
                        <span class="fa fa-check"></span>
                      </label>
                    </div>
                    <span class="id_produto">{{id_produto_json}}</span>
                  </div>
                </td>
                <td class="padding1010" style="width: 34em!important;min-width: 34em!important;">
                  <div class="media ml-0 mr-0">
                    <img
                      class="img-fluid circle ml-0 mr-0"
                      v-bind:src="getImage(json_dados_produto)"
                      alt="Image"
                    />
                    <span class="titulo_produto ml-2">
                      <router-link :to="{path: '/produtos/detalhe/' + id_produto_json}">
                        <b>{{titulo_produto}}</b>
                      </router-link>
                    </span>
                  </div>
                </td>
                <td
                  style="width: 3em!important;min-width: 3em!important;"
                  class="hiddenMobile"
                >{{json_dados_produto.variants.length}}</td>
                <td
                  class="text-center hiddenMobile"
                  style="width: 15em!important;min-width: 15em!important;"
                >
                  <span class="badge badge-success">Ativo</span>
                </td>

                <td class="padding1010 hiddenMobile">{{json_dados_produto.updated_at | formatDate}}</td>
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
      LNoImage : 'https://app.thuor.com/img/no-image.png',
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
          this.getProdutos();
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    async importFromShopify() {
      API_NOTIFICATION.ShowLoading();
      const Luser = await UTILIS_API.GetUserSession();
      var LDadosLoja = await API_LOJA.GetDadosLojaByIdUsuario(Luser.user.id);
      LDadosLoja = LDadosLoja.data;

      if (LDadosLoja.plataforma == constantes.PLATAFORMA_SHOPIFY) {
        API_PRODUTOS.ImportFromShopify()
          .then(retorno => {
            this.getProdutos();
          })
          .catch(error => {
            API_NOTIFICATION.HideLoading();
            API_NOTIFICATION.Notifica(
              "Oops!",
              "Ocorreu um problema ao tentar importar os produtos.",
              "error"
            );
            console.log("Erro ao importar produtos do shopify", error);
          });
      } else {
        API_NOTIFICATION.Notifica(
          "Oops!",
          "Nenhuma Loja Shopify foi cadastrada.",
          "error"
        );
      }
    },
    getImage(json_dados_produto) {
      
      if (json_dados_produto != null && json_dados_produto != undefined) {
        if (json_dados_produto.image != null) {
          return json_dados_produto.image.src;
        }
        if(json_dados_produto.image == null && json_dados_produto.images.length == 0){
          return this.LNoImage;
        }
        return "";
      }
      return "";
    },
    getProdutos() {
      API_PRODUTOS.GetProdutos()
        .then(retProd => {
          retProd.data.forEach((obj, i) => {
            var LImages = obj.json_dados_produto;
            //this.produtosList = retProd.data;
            this.gridData.push({
              id_produto_json: obj.id_produto_json,
              titulo_produto: obj.titulo_produto,
              json_dados_produto: obj.json_dados_produto
            });
          });

          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao pegar produtos", error);
        });
    }
  }
};
</script>
