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
.bold {
  font-family: Rubik, sans-serif;
  font-size: 35px !important;
  font-weight: 900;
  color: #23b7e5;
}
.bold-md {
  font-family: Rubik, sans-serif;
  font-size: 25px !important;
  font-weight: 900;
  color: #23b7e5;
}
.bold-sd {
  font-family: Rubik, sans-serif;
  font-size: 20px !important;
  font-weight: 900;
  color: #23b7e5;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-calendar-check">
        <span class="ml-2"></span>
      </span>Mensalidades
    </div>
    <small>Todos as transações processadas pelo Thuor estão aqui.</small>
    <p></p>
    <div class="row mb-2">
      <button
        v-on:click="processarMensalidades()"
        v-show="qtd_pendente > 0"
        class="btn btn-danger float-left pull-left ml-4 col-md-3"
      >
        <span class="fa fa-donate"></span> Processar Mensalidades
      </button>
      <span class="col-md-8 float right pull-right mt-1">
        Há
        <strong class="bold-sd">{{qtd_pendente}}</strong> para processar.
      </span>
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
        <option v-for="pageSize in pageSizeMenu" :value="pageSize" :key="pageSize">{{pageSize}}</option>
      </select>
      <form id="search" class="form-group pull-right float-right">
        <input name="query" placeholder="Pesquise aqui" class="form-control" v-model="searchQuery" />
      </form>
      <div id="grid-template">
        <div class="table-header-wrapper">
          <table class="table-header">
            <thead>
              <th style="min-width: 5rem!important;">
                <strong class="col- pedido">
                  <b>Data Processar</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="data pl-0" style="min-width: 15rem!important;">
                <strong class="col-">
                  <b>Nome</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="data pl-0" style="min-width: 13rem!important;">
                <strong class="col- ml-2">
                  <b>Plano</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="status pl-0 ml-0 mr-0 pr-0" style="min-width: 5rem!important;">
                <strong class="col- ml-2">
                  <b>Valor</b>
                </strong>
                <span class="arrow"></span>
              </th>
              <th class="status pl-0">
                <strong class="col- ml-4">
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
                v-for="{data, nome, plano, valor, id_usuario, status} in dataPerPage"
                :key="id_usuario"
              >
                <td class="metodo col" style="min-width: 16rem!important;">
                  <p class="col- mb-0 dataPedido text-left ml-3">{{data}}</p>
                </td>
                <td class="pedido" style="min-width: 15rem!important;">
                  <router-link
                    :to="{path: '/transacoes-internas/detalhe/' + getCripto(parseInt(id_usuario), 0)}"
                  >
                    <p class="col- numeroPedido mb-0">{{nome}}</p>
                  </router-link>
                </td>
                <td style="min-width: 13rem!important;">
                  <p class="col- text-left numeroPedido mr-0 ml-0 pr-0 pl-0 ml-0">{{plano}}</p>
                </td>
                <td
                  class="total text-left ml-1"
                  style="min-width: 7rem!important;"
                >R$ {{formatPrice(valor)}}</td>

                <td class="pl-0" style="min-width: 10rem!important;">
                  <span
                    class="col- spanStatus alert mr-3 ml-4"
                    v-bind:class="getClassStatus(status)"
                  >{{status.toUpperCase()}}</span>
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
import constantes from "../../api/constantes";
import API_PLANOS from "../../api/planosAPI";
import API_CHECKOUT_THUOR_COMISSION from "../../api/checkoutAPIThuorComission";
import API_MENSALIDADES from '../../api/mensalidadesAPI';


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

  async created() {
    const LUser = await UTILIS_API.GetUserSession();
    if (LUser != null && LUser.user.is_user_admin == 1) {
      this.timeAgo = new TimeAgo("pt-BR");
      let sortOrders = {};
      this.columns.forEach(function(key) {
        sortOrders[key] = 1;
      });
      this.sortOrders = sortOrders;
      this.checkIfLogged();
      this.data = this.gridData;

    } else {
      API_NOTIFICATION.showNotificationW(
        "Oops!",
        "Você precisa ser Administrador para acessar essa página",
        "error"
      );
    }
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.onload = function() {
      this.canPay = true;
    };
    plugin.setAttribute(
      "src",
      "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },
  data() {
    return {
      planos: [],
      canPay: false,
      timeAgo: "",
      searchQuery: "",
      sortKey: "",
      sortOrders: {},
      qtd_pendente: 0,
      login: {
        email: "",
        password: "",
        rememberme: false
      },
      columns: [
        "nome",
        "data",
        "status",
        "plano",
        "valor"
      ],
      gridData: [],
      startRow: 0,
      rowsPerPage: 10,
      pageSizeMenu: [10, 20, 50, 100],
      data: Array,
      mensalidadesList: {},
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
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_LOJA.GetDadosLojaByIdUsuario(res.data.id)
            .then(async resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              this.planos = await API_PLANOS.GetPlanos();
              API_LOGIN.GetUsersMensalidades()
                .then(retMensalidades => {
                  this.gridData = [];
                  this.mensalidadesList = retMensalidades.data;
          
                  this.qtd_pendente = retMensalidades.data.length || 0;
                  if (retMensalidades.data.length > 0) {
                    retMensalidades.data.forEach(async (obj, i) => {
                      this.gridData.push({
                        id_usuario: obj.id_usuario,
                        nome: obj.nome,
                        data: moment(obj.proximo_pagamento_mensalidade).format(
                          "DD/MM/YYYY"
                        ),
                        status: 'PENDENTE',
                        plano: this.getPlano(obj.plano).json.nome,
                        valor: this.getPlano(obj.plano).json.price
                      });
                    });
                  }
                  API_NOTIFICATION.HideLoading();
                })
                .catch(error => {
                  console.log("Erro ao pegar transações internas", error);
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
    getPlano(plano) {
      return this.planos.filter(x => x.id == plano)[0];
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
        else return "img/visa.png";
      }
    },
    getClassStatus(status) {
      if (status == "pendente") return "alert-info";
      if (status == "cancelada") return "alert-danger";
      if (status == "aprovada") return "alert-success";
      if (status == "entregue") return "alert-success";
      return "alert-warning";
    },
    sleep(seconds) {
      return new Promise(r => setTimeout(r, seconds));
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
      const LJSON = JSON.parse(obj.json_gw_response);
      //console.log(LJSON.payment_method);
      if (LJSON.hasOwnProperty("payment_method_id"))
        return LJSON.payment_method_id;
      if (
        LJSON.hasOwnProperty("payment_method") &&
        LJSON.payment_method.type == "CREDIT_CARD"
      )
        return LJSON.payment_method.card.brand;
      if (
        LJSON.hasOwnProperty("payment_method") &&
        LJSON.payment_method.type == "BOLETO"
      )
        return LJSON.payment_method.type;
    },
    selecionaMensagemEnviar(event) {
      this.mensagemEnviarSelecionada = event.target.value;
    },    
    processarMensalidades() {
      API_NOTIFICATION.showConfirmDialog(
        "Processar Mensalidades",
        "Tem certeza de que deseja processar as mensalidades?",
        "question",
        () => {
          API_NOTIFICATION.ShowLoading();
          window.Mercadopago.setPublishableKey(
            constantes.SAND_BOX_MP_PUBLICK_KEY
          );
          window.Mercadopago.clearSession();
          this.mensalidadesList.forEach(async (obj, i) => {
            API_NOTIFICATION.ShowLoading();
            await this.sleep(2000);
            var LDadoUsuario = await API_LOGIN.GetUserByID(obj.id);          
            LDadoUsuario = LDadoUsuario.data;            
            const LPlanoPagar = this.getPlano(obj.plano);
            const LValor = parseFloat(LPlanoPagar.json.price);
            var FormToken = await UTILIS_API.CREATE_FORM_MP(
              constantes.CONSTANTE_THUOR,
              LValor,
              LDadoUsuario.json_pagamento.dadosProcessamento.numero_cartao
                .trim()
                .replace(/ /g, ""),
              LDadoUsuario.json_pagamento.dadosProcessamento.nome_completo,
              LDadoUsuario.json_pagamento.dadosProcessamento.mes_validade,
              LDadoUsuario.json_pagamento.dadosProcessamento.ano_validade,
              LDadoUsuario.json_pagamento.dadosProcessamento.codigo_seguranca,
              1,
              LDadoUsuario.json_pagamento.dadosProcessamento.cpf_titular.replace(
                /[.-]/g,
                ""
              ),
              LDadoUsuario.email,
              LDadoUsuario.json_pagamento.dadosProcessamento.metodoPag
            );

            window.Mercadopago.createToken(FormToken, (status, response) => {
              var paymentData = {
                transaction_amount: LValor,
                token: response.id,
                description: constantes.CONSTANTE_THUOR,
                installments: 1,
                payment_method_id:
                  LDadoUsuario.json_pagamento.dadosProcessamento.metodoPag,
                payer: {
                  email: LDadoUsuario.email
                }
              };
              API_CHECKOUT_THUOR_COMISSION.DoPayBackEnd(paymentData)
                .then(async retornoPay => {
                  if (
                    retornoPay.data.status != undefined &&
                    (retornoPay.data.status.toUpperCase() == "REJECTED" ||
                      retornoPay.data.status.toUpperCase() == "CANCELED" ||
                      retornoPay.data.status.toUpperCase() == "VACATED")
                  ) {
                    const LMensagem = await UTILIS_API.getErrorMPDetail(
                      retornoPay.data.status_detail
                    );
                    console.log("Pagamento Rejeitado", LMensagem);
                    return;
                  }
                  LDadoUsuario.json_pagamento.paymentDataGW = retornoPay.data;
                  window.Mercadopago.clearSession();
                  const LUser = await UTILIS_API.GetUserSession();
                  if (LUser) {
                    const LDataUltimoPagamentoMensalidade = moment().format();
                    var LData = moment()
                      .add({ days: 30 })
                      .format();
                    LDadoUsuario.proximo_pagamento_mensalidade = LData;
                    API_LOGIN.UpdateUser(
                      LDadoUsuario.id,
                      LDadoUsuario.plano,
                      LDadoUsuario.json_pagamento,
                      LDadoUsuario.proximo_pagamento,
                      LDadoUsuario.proximo_pagamento_mensalidade
                    )
                      .then(async resUpdate => {                        
                            const LInsereMensalidadesPagas = await API_MENSALIDADES.InsereTransacoesInternasMensalidades(obj.id, obj.data, paymentData, retornoPay.data, 'PAID');
                            const LUltimoPagamentoMensalidade = await API_LOGIN.UpdateUltimoPagamentoUser(obj.id, LDataUltimoPagamentoMensalidade);
                            console.log("Payment Done");
                            API_NOTIFICATION.HideLoading();                          
                      })
                      .catch(error => {
                        console.log(
                          "Erro ao tentar atualizar o usuário",
                          error
                        );
                      });
                  }
                })
                .catch(error => {
                  console.log("Erro ao tentar efetuar o pagamento", error);
                });
            });
            
          });
        }
      );
    }
  }
};
</script>
