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
  border-radius: 4px !important;
  height: 20px;
  padding: 3px !important;
  font-size: 12px !important;
}
.background-whatsapp {
  background-image: url("/img/whatsapp.png");
  background-repeat: no-repeat;
  margin-left: 0px !important;
  padding-left: 0px !important;
  margin-right: 20px !important;
  background-position: 0px center; /*Posição da imagem do background*/
  border: 1px solid #ddd;
  background-size: 25px 25px;
}
option {
  position: 20px !important;
  margin-left: 20px !important;
  text-indent: 20px;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-donate">
        <span class="ml-2"></span>
      </span>Pedidos
    </div>
    <small>
      Todos os pedidos processados pelo Thuor estão aqui.
      <br />Nós avisamos sempre para a loja, onde você poderá processar o pedido. Solicitando, se for o caso, do seu fornecedor.
    </small>
    <p></p>

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
            <thead>
              <th class="metodo">
                <strong>
                  <b></b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th style="width: 160px!important;">
                <strong class="col-md-4 pedido">
                  <b>Pedido</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="data pl-0">
                <strong class>
                  <b>Data</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="data pl-0" style="min-width: 80px!important; width: 80px!important;">
                <strong class>
                  <b>Valor</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="status pl-2">
                <strong class="col-md-2">
                  <b>Status</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="pl-2">
                <strong class="col-md-2">
                  <b>Ação</b>
                </strong>
              </th>
              <th></th>
            </thead>
          </table>
        </div>
        <div class="table-body-wrapper">
          <table class="table-body">
            <tbody>
              <tr
                v-for="{id, metodo, order_id, status, data, total, nome_comprador, time_ago, bandeira, order_number} in dataPerPage"
              >
                <td class="metodo">
                  <img :src="getImagePaymentID(metodo,bandeira)" class="imgMethodo" />
                </td>
                <td class="pedido" style="width: 120px!important;">
                  <router-link :to="{path: '/pedidos/detalhe/' + getCripto(id, order_id)}">
                    <p class="col-md-12 numeroPedido mb-0">{{order_id}}</p>
                    <p class="col-md-12 numeroPedido mb-0">#{{order_number}}</p>
                  </router-link>
                  <p class="col-md-12 text-left nomeComprador grey mb-0">{{nome_comprador}}</p>
                </td>
                <td class="data padding1010">
                  <p class="col-md-12 mb-0 dataPedido">{{data}}</p>
                  <p class="col-md-12 mb-0 tempoPedido">{{time_ago}}</p>
                </td>
                <td class="total pl-0 p-0">R$ {{total.toLocaleString('pt-BR')}}</td>
                <td class="pl-0" style="min-width: 80px!important; width: 80px!important;">
                  <span
                    class="spanStatus alert"
                    v-bind:class="getClassStatus(status)"
                  >{{toUpperCase(status)}}</span>
                </td>
                <td>
                  <div class="row">
                    <select
                      v-bind:id="getCripto(id, order_id)"
                      @change="selecionaMensagemEnviar($event)"
                      class="form-control col-md-8 background-whatsapp"
                    >
                      <option value="-1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEnvie uma Mensagem</option>
                      <option
                        value="0"
                        v-show="metodo == 'bolbradesco' || metodo == 'BOLETO'"
                      >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMensagem de Boleto</option>
                      <option
                        v-for="{id_mensagem, nome_mensagem} in arrayWhatsAppMessage"
                        :key="id_mensagem"
                        :value="id_mensagem"
                      >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{nome_mensagem}}</option>
                    </select>
                    <button
                      v-on:click="enviarMensagemAcao(id, mensagemEnviarSelecionada)"
                      class="btn btn-primary col-md-2 ml-1"
                    >
                      <span class="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </td>
                <td></td>
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
import API_TRANSACOES from "../../api/transacoesAPI";
import API_LOJA from "../../api/lojaAPI";
import Datatable from "@/components/Tables/Datatable";
import moment from "moment";
import dateFormat from "dateformat";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";
import Hashids from "hashids";
import API_CHECKOUT from "../../api/checkoutAPI";
import API_MENSAGERIA from "../../api/mensageriaAPI";
import UTILIS_API from "../../api/utilisAPI";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import constantes_mensagens from "../../api/constantes_mensagens";
import constantes from '../../api/constantes';
Vue.component("v-select", vSelect);

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
    API_NOTIFICATION.ShowLoading();
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
      columns: [
        "metodo",
        "id",
        "order_id",
        "status",
        "data",
        "total",
        "nome_comprador"
      ],
      gridData: [],
      startRow: 0,
      rowsPerPage: 10,
      pageSizeMenu: [10, 20, 50, 100],
      data: Array,
      pedidosList: {},
      acaoWhats: -1,
      arrayWhatsAppMessage: [],
      arrayWhatsAppMessageOriginal: [],
      mensagemEnviarSelecionada: -1
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
      API_LOGIN.VerificaToken()
        .then(async res => {
          const lwatloja = await API_LOJA.GetDadosLojaByIdUsuario(res.data.id)
            .then(async resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              const LWaitMensagem = await API_MENSAGERIA.GetMensagensWhatsApp()
                .then(resMensagensWhats => {
                  //console.log(resMensagensWhats.data);
                  this.arrayWhatsAppMessageOriginal = resMensagensWhats.data;
                  resMensagensWhats.data.forEach((obj, i) => {
                    this.arrayWhatsAppMessage.push({
                      id_mensagem: obj.id,
                      nome_mensagem: obj.nome
                    });
                  });
                })
                .catch(error => {
                  console.log("Erro ao pegar produtos", error);
                });
              await API_TRANSACOES.GetTransacoes()
                .then(retProd => {
                  this.gridData = [];
                  // var LImages = JSON.parse(retProd.data[0].json_dados_produto);
                  //this.pedidosList = retProd.data;
                  retProd.data.forEach((obj, i) => {
                    if (obj != null && obj.json_shopify_response.order) {
                      const LID = obj.id;

                      const LPaymentID = this.getPaymentMethodID(obj);
                      //console.log(LPaymentID);
                      let LStatus;
                      if (obj.status == null) {
                        if (this.LPaymentID == "BOLETO") {
                          LStatus = "pendente";
                        } else {
                          LStatus = "aprovada";
                        }
                      } else {
                        LStatus = this.getStatusTranslate(obj.status);
                      }
                      const LData = dateFormat(
                        this.getDataCreated(obj),
                        "dd/mm/yyyy  HH:MM:ss"
                      );
                      const LTimeAgo = this.getDataCreated(obj);
                      const LTotal = this.getValue(obj);
                      const LNomeComprador = this.toCamelCase(
                        obj.json_front_end_user_data.dadosComprador
                          .nome_completo
                      );
                      const Bandeira =
                        obj.json_front_end_user_data.dadosComprador.Bandeira;
                      const LOrderID = obj.json_shopify_response.order.id;
                      this.gridData.push({
                        metodo: LPaymentID,
                        id: LID,
                        order_id: LOrderID,
                        status: LStatus,
                        data: LData,
                        total: LTotal,
                        nome_comprador: LNomeComprador,
                        time_ago: this.timeAgo.format(
                          Date.parse(LTimeAgo),
                          Date.now(),
                          "time"
                        ),
                        json_front_end_user_data: obj.json_front_end_user_data,
                        json_gw_response: obj.json_gw_response,
                        bandeira: Bandeira,
                        order_number: obj.json_front_end_user_data.dadosLoja.plataforma == constantes.PLATAFORMA_SHOPIFY ? obj.json_shopify_response.order.order_number : ''
                      });
                    }
                    console.log(obj.json_shopify_response);
                  });
                })
                .catch(error => {
                  console.log("Erro ao pegar produtos", error);
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
      if (str) {
        return str.toUpperCase();
      }else{
        return "INDEFINIDO";
      }
    },
    getImagePaymentID(paymentForm, bandeira) {
      if (paymentForm == "BOLETO" || paymentForm == "bolbradesco") {
        return "img/barcode.png";
      } else {
        if (bandeira) {
          if (
            bandeira.toUpperCase() == "MASTER" ||
            bandeira.toUpperCase() == "MASTERCARD"
          ) {
            return "img/master.png";
          } else if (bandeira.toUpperCase() == "VISA") {
            return "img/visa.png";
          } else return "img/credit-card.png";
        } else {
          return "img/credit-card.png";
        }
      }
    },
    getClassStatus(status) {
      if (status != undefined) {
        if (status == "pendente" || status.toUpperCase() == "PENDING")
          return "alert-warning";
        if (status == "cancelada" || status.toUpperCase() == "CANCELED")
          return "alert-danger";
        if (status == "aprovada" || status.toUpperCase() == "APPROVED")
          return "alert-success";
        if (status == "entregue" || status.toUpperCase() == "DELIVERED")
          return "alert-success";
        return "alert-warning";
      }else{
        return "alert-warning";
      }
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
    getPaymentMethodID(obj) {
      const LJSON = obj.json_front_end_user_data;
      //console.log(LJSON.payment_method);
      return LJSON.dadosComprador.forma;
    },
    getDataCreated(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.dadosComprador.data;
    },
    getValue(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.dadosComprador.valor;
    },
    selecionaMensagemEnviar(event) {
      this.mensagemEnviarSelecionada = event.target.value;
    },
    async enviarMensagemAcao(id, id_mensagem) {
      if (id_mensagem > 0) {
        const LURL =
          "https://api.whatsapp.com/send?phone={@PHONE}&text={@MENSAGEM}";
        var Mensagem = this.arrayWhatsAppMessageOriginal.find(
          x => x.id == id_mensagem
        ).mensagem;
        const Telefone =
          "55" +
          this.gridData
            .find(x => x.id == id)
            .json_front_end_user_data.dadosComprador.telefone.replace(
              /[^0-9\.]+/g,
              ""
            );
        const Nome = this.gridData
          .find(x => x.id == id)
          .json_front_end_user_data.dadosComprador.nome_completo.split(" ")[0];
        Mensagem = Mensagem.replace("{first_name}", "%0a" + Nome + "%0a");
        const LURLFinal = LURL.replace("{@PHONE}", Telefone).replace(
          "{@MENSAGEM}",
          Mensagem
        );
        var win = window.open(LURLFinal, "_blank");
        win.focus();
      } else if (id_mensagem == 0) {
        const LURL =
          "https://api.whatsapp.com/send?phone={@PHONE}&text={@MENSAGEM}";
        var Mensagem = constantes_mensagens.MENSAGEM_BOLETO;
        const Telefone =
          "55" +
          this.gridData
            .find(x => x.id == id)
            .json_front_end_user_data.dadosComprador.telefone.replace(
              /[^0-9\.]+/g,
              ""
            );
        const DadosBoleto = this.gridData.find(x => x.id == id);
        const LBarCode = this.getBarCodeBoleto(DadosBoleto);
        const LProdutos = this.gridData.find(x => x.id == id)
          .json_front_end_user_data.produtos;
        const Link = this.gridData.find(x => x.id == id);
        const LlinkBoleto = await this.getLinkBoleto(Link);
        var LprodutoTitle = await this.getProdutoName(LProdutos);
        const Nome = this.gridData
          .find(x => x.id == id)
          .json_front_end_user_data.dadosComprador.nome_completo.split(" ")[0];
        Mensagem = Mensagem.replace("{first_name}", "%0a" + Nome + "%0a");
        Mensagem = Mensagem.replace("{produto_name}", LprodutoTitle);
        Mensagem = Mensagem.replace("{boleto_bar_code}", LBarCode);
        Mensagem = Mensagem.replace("{link_boleto}.", LlinkBoleto);
        const LURLFinal = LURL.replace("{@PHONE}", Telefone).replace(
          "{@MENSAGEM}",
          Mensagem
        );
        var win = window.open(LURLFinal, "_blank");
        win.focus();
      }
    },
    getBarCodeBoleto(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.dadosComprador.barcode;
      return "";
    },
    getProdutoName(arrayProdutos) {
      return new Promise(async (resolve, reject) => {
        var LprodutoTitle = "";
        arrayProdutos.forEach((obj, i) => {
          LprodutoTitle = LprodutoTitle + obj.title + ", ";
        });
        LprodutoTitle = LprodutoTitle.substring(0, LprodutoTitle.length - 1);
        LprodutoTitle = LprodutoTitle.replace(/.$/, ".", " e ");
        resolve(LprodutoTitle);
      });
    },
    getLinkBoleto(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.dadosComprador.urlBoleto;
    },
    getStatusTranslate(status) {
      if (status != undefined) {
        if (status.toUpperCase() == "APPROVED") {
          return "aprovada";
        }
        if (status.toUpperCase() == "PAID") {
          return "aprovada";
        }
        if (status.toUpperCase() == "PENDING") {
          return "pendente";
        }
      }
    }
  }
};
</script>
