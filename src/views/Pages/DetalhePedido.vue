<style scoped>
@media only screen and (max-width: 992px) {
}
@media only screen and (max-width: 767px) {
  .contentHeading {
    margin-top: 15px;
    font-size: 12px !important;
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
  width: 180px;
}
.pedido {
  padding: 10px 10px !important;
}
.padding1010 {
  padding: 10px 10px !important;
}

.numeroPedido {
  font-size: 14px !important;
  font-family: Rubik, sans-serif;
  font-weight: 700;
}
.imgMethodo {
  width: 40px !important;
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
.cardD {
  background-color: white;
}
.nomeComprador {
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.valorTransacao {
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 15px;
}
.valorTransacaoTotal {
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 25px;
}

.emailComprador {
  font-size: 12px !important;
}
.cpfComprador {
  font-size: 12px !important;
}
.telefoneComprador {
  color: #02a681;
  font-size: 13px !important;
}
.foneWhats {
  cursor: pointer !important;
  color: #02a681;
  font-weight: 700;
  font-size: 15px !important;
}
.linkBoleto {
  cursor: pointer !important;
}
.cardTotal {
  border-left: 1px dashed #d0d0d0;
}
.paddingLeftZero {
  padding-left: 0px !important;
}
.dataCriacao {
  font-size: 12px !important;
}
</style>
<template>
  <ContentWrapper v-if="canRender">
    <div class="content-heading mt-3">
      <h4 class="contentHeading">
        Pedido: {{pedidoID}} em
        <strong class="dataCriacao">{{this.dataPedido}}</strong>
      </h4>
    </div>

    <div class="wrapper col-xl-12 row">
      <span
        class="spanStatus alert mr-2 mt-2 mb-0"
        v-bind:class="getClassStatus(status)"
      >{{getStatus()}}</span>
      <label
        class="float-left mr-2 col-form-label labelForm"
        for="inlineFormInputGroup"
      >Atualizar Status</label>
      <select
        v-model="statusAtual"
        id="select"
        class="selectPage form-control pull-left float-left"
      >
        <option v-for="status in statusArray" :value="status" :key="status">{{status}}</option>
      </select>
      <!-- <form id="search" class="form-group pull-right float-right">
        <input name="query" placeholder="Pesquise aqui" class="form-control" v-model="searchQuery" />
      </form>-->
    </div>
    <div class="cardD row col-xl-12 mt-3">
      <div class="card col-md-3 mt-3 float-left mr-1">
        <div class="card-header paddingLeftZero">
          <div class="card-title text-left">Cliente</div>
        </div>
        <div class="card-body pt-0">
          <div class="media">
            <div class="media-body py-2">
              <div class="text-bold">
                <p>
                  <span
                    class="row nomeComprador mb-0"
                  >{{this.pedido.json_front_end_user_data.dadosComprador.nome_completo.toUpperCase()}}</span>
                </p>
                <p>
                  <span
                    class="row emailComprador mb-0"
                  >{{this.pedido.json_front_end_user_data.dadosComprador.email}}</span>
                </p>
                <p>
                  <span class="row telefoneComprador mb-0">
                    <a
                      v-bind:href="'https://api.whatsapp.com/send?phone='+unMask(this.pedido.json_front_end_user_data.dadosComprador.telefone)"
                    >
                      <span class="fab fa-whatsapp foneWhats">
                        <span
                          class="ml-1"
                        >{{this.pedido.json_front_end_user_data.dadosComprador.telefone}}</span>
                      </span>
                    </a>
                  </span>
                </p>
                <p>
                  <span
                    class="row cpfComprador"
                  >CPF: {{this.pedido.json_front_end_user_data.dadosComprador.cpf}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-md-3 float-left mt-1">
        <div class="card-header paddingLeftZero">
          <div class="card-title text-left">Pagamento</div>
        </div>
        <div class="card-body pt-0 pl-0">
          <div class="media-body pt-2">
            <div class="text-bold">
              <p
                class="col-md-12"
                v-if="this.pedido.json_front_end_user_data.dadosComprador.forma != 'bolbradesco'"
              >
                <img
                  :src="getImagePaymentID(this.pedido.json_front_end_user_data.dadosComprador.forma)"
                  class="row imgMethodo float-left pull-left mr-4"
                />
                <span
                  class="row mb-0 float-left pull-left mr-6 mt-1"
                >{{this.pedido.json_front_end_user_data.dadosComprador.numero_cartao.substr(this.pedido.json_front_end_user_data.dadosComprador.numero_cartao.length - 4, this.pedido.json_front_end_user_data.dadosComprador.numero_cartao.length)}}</span>
              </p>
              <p
                class="mt-5"
                v-if="this.pedido.json_front_end_user_data.dadosComprador.forma != 'bolbradesco'"
              >
                <span
                  class="row valorTransacao mb-0 mt-3 ml-0"
                >R$ {{this.pedido.json_front_end_user_data.dadosComprador.valor}}</span>
                <span
                  class="row valorTransacao mb-0 mt-1 ml-0"
                >{{this.pedido.json_front_end_user_data.dadosComprador.parcela}}x de R$ {{this.pedido.json_front_end_user_data.dadosComprador.valorParcela.toFixed(2)}}</span>
              </p>
              <p
                class="col-md-12"
                v-if="this.pedido.json_front_end_user_data.dadosComprador.forma == 'bolbradesco'"
              >
                <img
                  :src="getImagePaymentID(this.pedido.json_front_end_user_data.dadosComprador.forma)"
                  class="row imgMethodo float-left pull-left mr-4"
                />
              </p>
              <p
                class="row col-md-12 mt-3 mb-0"
                v-if="this.pedido.json_front_end_user_data.dadosComprador.forma == 'bolbradesco'"
              >
                <span class="row valorTransacao mb-0 mt-1 ml-0">Boleto Bancário</span>
              </p>
              <p
                class="row col-md-12 mt-0 mb-0"
                v-if="this.pedido.json_front_end_user_data.dadosComprador.forma == 'bolbradesco'"
              >
                <a
                  class="linkBoleto"
                  v-bind:href="this.pedido.json_front_end_user_data.dadosComprador.urlBoleto"
                  target="_blank"
                >
                  <span class="row mb-0 mt-0 ml-0 fas fa-eye mt-1 float-left">
                    <span class="ml-1">Ver Boleto</span>
                  </span>
                </a>
              </p>
              <p
                class="row col-md-12 mt-1"
                v-if="this.pedido.json_front_end_user_data.dadosComprador.forma == 'bolbradesco'"
              >
                <a
                  class="linkBoleto"
                  v-bind:href="getLinkEnviarBoleto(this.pedido)"
                  target="_blank"
                >
                  <span class="fab fa-whatsapp">
                    <span class="ml-2">Enviar Boleto</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-md-3 float-left mt-1">
        <div class="card-header paddingLeftZero">
          <div class="card-title text-left">Entrega</div>
        </div>
        <div class="card-body pt-0">
          <div class="media-body pt-2">
            <div class="text-bold">
              <p>
                <span
                  class="row nomeComprador mb-0"
                >{{this.pedido.json_front_end_user_data.dadosComprador.destinatario.toUpperCase()}}</span>
                <span
                  class="row mb-0"
                >{{getEndereco()}}, {{this.pedido.json_front_end_user_data.dadosComprador.numero_porta}}</span>
                <span
                  class="row mb-0"
                  v-if="this.pedido.json_front_end_user_data.dadosComprador.complemento"
                >Complemento: {{this.pedido.json_front_end_user_data.dadosComprador.complemento}}</span>
                <span
                  class="row mb-0"
                >{{this.pedido.json_front_end_user_data.dadosComprador.cidade}} / {{this.pedido.json_front_end_user_data.dadosComprador.estado}}</span>
                <span class="row mb-0">
                  CEP:
                  <strong>
                    <b>{{this.pedido.json_front_end_user_data.dadosComprador.cep}}</b>
                  </strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-2 float-left mt-1 cardTotal">
        <div class="card-header paddingLeftZero">
          <div class="card-title text-left">Valor Total</div>
        </div>
        <div class="card-body pt-0">
          <div class="media-body pt-2">
            <div class="text-bold row">
              <p class="mt-1">
                <span
                  class="row valorTransacaoTotal mb-0 mt-0 ml-0"
                >R$ {{this.pedido.json_front_end_user_data.dadosComprador.valor}}</span>
              </p>
              <button
                class="form-control btn btn-danger"
                v-if="this.status.toUpperCase() != 'CANCELADA' && this.status.toUpperCase() != 'REEMBOLSADA'  && this.status.toUpperCase() != 'PENDENTE' && this.pedido.json_front_end_user_data.dadosComprador.forma !='bolbradesco'"
                v-on:click="devolverPagamento(pedido)"
              >Reembolsar</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-xl-12 pull-right float-right">
        <button
          class="form-control btn btn-danger" v-if="this.status.toUpperCase()!= 'CANCELADA' ||this.status.toUpperCase()!= 'REEMBOLSADA' "
          v-on:click="devolverPagamento(pedido)"
        >Reembolsar Cliente</button>
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
import API_CHECKOUT from "../../api/checkoutAPI";
import Datatable from "@/components/Tables/Datatable";
import moment from "moment";
import dateFormat from "dateformat";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";
import Hashids from "hashids";
import constantes from "../../api/constantes";
import UTILIS_API from "../../api/utilisAPI";

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

  async created() {
    this.pedidoID = this.$route.params.id;
    this.PedidoString = await this.getDeCripto(this.pedidoID);
    this.pedidoID = this.PedidoString[1];
    this.timeAgo = new TimeAgo("pt-BR");
    this.checkIfLogged();
  },
  data() {
    return {
      canRender: false,
      pedidoID: 0,
      timeAgo: "",
      searchQuery: "",
      sortKey: "",
      sortOrders: {},
      dataPedido: "",
      statusArray: [
        "APROVADA",
        "CANCELADA",
        "PENDENTE",
        "REEMBOLSADA",
        "ARQUIVADA",
        "AGUARDANDO PROCESSAMENTO"
      ],
      statusAtual: "",
      data: Array,
      pedido: {},
      status: "",
      DadosCheckout: {}
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
            .then(LojaData => {
              UTILIS_API.SetDadosLojaSession(LojaData.data);
              this.getCheckouts();
              API_TRANSACOES.GetTransacaoByID(this.PedidoString[0])
                .then(retProd => {
                  const obj = retProd.data[0];
                  this.populaDadosPedido(obj);
                  API_NOTIFICATION.HideLoading();
                })
                .catch(error => {
                  console.log("Erro ao pegar produtos", error);
                });
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
      return str.toUpperCase();
    },
    getImagePaymentID(paymentID) {
      if (paymentID !== undefined) {
        if (paymentID == "BOLETO" || paymentID == "bolbradesco")
          return "img/barcode.png";
        else if (paymentID.toUpperCase() == "MASTER") return "img/master.png";
        else if (paymentID.toUpperCase() == "VISA") return "img/visa.png";
        else return "img/credit-card.png";
      }
    },
    getClassStatus(status) {
      if (status.toUpperCase() == "PENDENTE") return "alert-info";
      if (status.toUpperCase() == "CANCELADA") return "alert-danger";
      if (status.toUpperCase() == "APROVADA") return "alert-success";
      if (status.toUpperCase() == "ENTREGUE") return "alert-success";
      return "alert-warning";
    },
    getCheckouts() {
      API_CHECKOUT.GetCheckouts()
        .then(retornoCheckout => {
          this.DadosCheckout = retornoCheckout.data;
        })
        .catch(error => {
          console.log("Erro ao tentar pegar dados do checkout", error);
        });
    },
    getDeCripto(crypted) {
      try {
        // console.log(id_produto);
        const hashids = new Hashids("", 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        ///const produtHashed= hashids.encode(id_produto.toString(), id_variante.toString());
        // console.log("ID Hashedid", produtHashed);
        // console.log("ID Deshashed", numbers);
        return hashids.decode(crypted);
      } catch (error) {
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "Parâmetros Inválidos na URL",
          "error"
        );
      }
    },
    maskCPF(cpf) {
      if (cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
    },
    maskTelefone(telefone) {
      if (telefone) {
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      }
    },
    unMask(telefone) {
      if (telefone) return telefone.replace(/\D/g, "");

      return "";
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getLinkEnviarBoleto(pedido) {
      var linkBase = "https://api.whatsapp.com/send?phone=";
      var produtoName = "";
      this.pedido.json_front_end_user_data.produtos.forEach((obj, i) => {
        produtoName = produtoName + obj.title + ", ";
      });
      var LLINK = constantes.MSG_BOLETO_ENVIO.replace(
        "PRODUTO_NAME",
        produtoName
      )
        .replace("VALOR_VALOR", this.formatPrice(this.pedido.valorPedido))
        .replace(
          "VENCIMENTO",
          dateFormat(this.pedido.dataExpiracao, "dd/mm/yyyy")
        )
        .replace("CODIGO_BARRAS", this.pedido.codigoBarras)
        .replace("LINK_LINK", this.pedido.linkBoleto);
      return (
        linkBase + this.unMask(this.pedido.telefoneComprador) + "&text=" + LLINK
      );
    },
    devolverPagamento(pPedido) {
      var self = this;
      API_NOTIFICATION.showNotifyCustomInputReembolsa(
        "Digite um Novo Valor Para Reembolso Parcial",
        "Confirmar",
        pPedido,
        (response, novoValor) => {
          const LOldValue =
            pPedido.json_front_end_user_data.dadosComprador.valor;
          const LNewValue = novoValor;
          if (
            LNewValue > 0 &&
            LNewValue != LOldValue &&
            LNewValue < LOldValue
          ) {
            pPedido.json_front_end_user_data.dadosComprador.valor = LNewValue;
            API_NOTIFICATION.showNotificationConfirm(
              "Atenção. <br> Esta ação não poderá ser revertida",
              "Deseja cancelar a compra e reembolsar o cliente?",
              "warning",
              event => {
                API_NOTIFICATION.ShowLoading();
                if (self.DadosCheckout.gateway == 1) {
                  self.devolverPagamentoMP(pPedido);
                } else if (self.DadosCheckout.gateway == 2) {
                  self.devolverPagamentoPS(pPedido);
                } else if (self.DadosCheckout.gateway == 3) {
                  self.devolverPagamentoPayU(pPedido);
                }
              }
            );
          }
          console.log("Testezin", response, novoValor);
        }
      );
    },
    acaoConfirmadaDevolvePagamento(event) {
      console.log("Event", event);
      API_NOTIFICATION.ShowLoading();
    },
    devolverPagamentoMP(pPedido) {
      API_TRANSACOES.ReembolsarCliente(
        pPedido.id,
        pPedido.json_front_end_user_data.dadosComprador.valor
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "Reembolsado com sucesso",
            "success"
          );
          this.checkIfLogged();
        })
        .catch(error => {
          console.log("Erro ao reembolsar o cliente", error);
        });
    },
    devolverPagamentoPS(pPedido) {
      API_TRANSACOES.ReembolsarClienteCheckoutPS(
        pPedido.id,
        pPedido.json_front_end_user_data.dadosComprador.valor
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "Reembolsado com sucesso",
            "success"
          );
          this.checkIfLogged();
        })
        .catch(error => {
          console.log("Erro ao reembolsar o cliente", error);
        });
    },
    devolverPagamentoPayU(pPedido) {
      API_TRANSACOES.ReembolsarClienteCheckoutPS(
        pPedido.id,
        pPedido.json_front_end_user_data.dadosComprador.valor
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "Reembolsado com sucesso",
            "success"
          );
          this.checkIfLogged();
        })
        .catch(error => {
          console.log("Erro ao reembolsar o cliente", error);
        });
    },
    getLastFourDigits(obj) {
      const LJSON = obj.json_front_end_user_data;
      if (LJSON.forma == "bolbradesco") {
        let LCard = LJSON.numero_cartao.replace(/ /g, "");
        return LCard.substring(LCard.length - 4, LCard.length);
      }
      return "";
    },
    getLinkBoleto(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.urlBoleto;
    },
    getBarCodeBoleto(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.barcode;
    },
    getExpiracaoBoleto(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.vencimentoBoleto;
    },
    getBandeira(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.bandeira;
    },
    getValor(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.valor;
    },
    getParcela(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.parcela;
    },
    getValorParcela(obj) {
      const LJSON = obj.json_front_end_user_data;
      return LJSON.valorParcela;
    },
    getEndereco() {
      if (this.pedido.endereco !== undefined) {
        return this.toCamelCase(this.pedido.endereco);
      }
      return;
    },
    getStatus() {
      var lstatus = "";
      if (this.pedido.status !== undefined) {
        if (this.pedido.status == "PAID") lstatus = "APROVADA";
        if (this.pedido.status == "PENDING") lstatus = "PENDENTE";
        if (this.pedido.status == "CANCELED") lstatus = "CANCELADA";
        this.statusAtual = lstatus;
        return lstatus;
      }
      return;
    },
    populaDadosPedido(obj) {
      if (obj) {
        API_NOTIFICATION.ShowLoading();
        const LID = obj.id;
        const LPaymentID = obj.json_front_end_user_data.dadosComprador.forma;
        let LStatus;
        if (obj.status == null) {
          if (this.LPaymentID == "bolbradesco" || this.LPaymentID == "BOLETO") {
            LStatus = "pendente";
          } else {
            LStatus = "aprovada";
          }
        } else {
          LStatus = obj.status;
        }
        this.status = LStatus;
        this.statusAtual = this.status.toUpperCase();
        const LData = dateFormat(
          obj.json_front_end_user_data.dadosComprador.data,
          "dd/mm/yyyy  HH:MM:ss"
        );
        const LTimeAgo = obj.json_front_end_user_data.dadosComprador.data;
        const LTotal = obj.json_front_end_user_data.dadosComprador.valor;

        //time_ago: this.timeAgo.format(Date.parse(LTimeAgo),  Date.now(), "time")
        const LOrderID = obj.json_shopify_response.order.id;
        this.dataPedido = dateFormat(
          obj.json_front_end_user_data.data,
          "dd/mm/yyyy  HH:MM:ss"
        );
        this.pedido.json_front_end_user_data = obj.json_front_end_user_data;
        //console.log(Date.now(), Date.parse(LData));
        this.pedido.id = obj.id;
        this.pedido.status = LStatus;
        this.pedido.nomeComprador = obj.json_front_end_user_data.dadosComprador.nome_completo.toUpperCase();
        this.pedido.emailComprador =
          obj.json_front_end_user_data.dadosComprador.email;
        this.pedido.cpfComprador = this.maskCPF(
          obj.json_front_end_user_data.dadosComprador.cpf
        );
        this.pedido.telefoneComprador = this.maskTelefone(
          obj.json_front_end_user_data.dadosComprador.telefone
        );
        this.pedido.bandeira = this.getBandeira(obj);
        this.pedido.quatroDigitosCartao = this.getLastFourDigits(obj);
        this.pedido.linkBoleto = this.getLinkBoleto(obj);
        this.pedido.dataExpiracao = this.getExpiracaoBoleto(obj);
        this.pedido.codigoBarras = this.getBarCodeBoleto(obj);
        this.pedido.valorPedido = this.getValor(obj);
        this.pedido.parcela = this.getParcela(obj);
        this.pedido.valorParcela = this.getValorParcela(obj);

        this.pedido.destinatario = obj.json_front_end_user_data.dadosComprador.destinatario.toUpperCase();
        this.pedido.endereco =
          obj.json_front_end_user_data.dadosComprador.endereco;
        this.pedido.numero_porta =
          obj.json_front_end_user_data.dadosComprador.numero_porta;
        this.pedido.complemlento =
          obj.json_front_end_user_data.dadosComprador.complemento;
        this.pedido.cidade = obj.json_front_end_user_data.dadosComprador.cidade;
        this.pedido.estado = obj.json_front_end_user_data.dadosComprador.estado;
        this.pedido.cep = obj.json_front_end_user_data.dadosComprador.cep;
        this.canRender = true;
        API_NOTIFICATION.HideLoading();
      }
    }
  }
};
</script>
