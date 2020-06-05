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
      <span class="fa fa-user-cog">
        <span class="ml-2"></span>
      </span>Admin
    </div>
    <small>Gerenciador do Thuor.</small>
    <p></p>
    <div class="row mb-2">
      
    </div>
    <div class="wrapper col-xl-12">
     <template>
    <ContentWrapper>
        <div class="unwrap">
            <div class="bg-cover">
                <div class="container container-md py-4">
                    <div class="text-center mb-3 pb-3">
                        <div class="h1 text-bold">Admin Center</div>
                        <p>Gerenciamento do Thuor</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container container-md">
            <form action="#">
                <div class="input-group input-group-lg">
                    <input class="form-control form-control-lg rounded-0" type="text" name="term" placeholder="Procure" />
                    <select class="form-control form-control-lg">
                        <option>All Products</option>
                        <option>Templates</option>
                        <option>Servers</option>
                        <option>Billing</option>
                        <option>Buyers</option>
                        <option>Sellers</option>
                        <option>Plans</option>
                        <option>Accounts</option>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-info btn-lg b0 rounded-0" type="button">
                            <strong>Buscar</strong>
                        </button>
                    </div>
                </div>
            </form>
            <p class="my-3 py-4 text-muted text-center">
                <small>Selecione qualquer uma das opções abaixo;</small>
            </p>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card b">
                      <router-link to="/admin/comissoes">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-primary" href="#">
                                <em class="fa-5x fas fa-donate mb-3"></em>
                                <br/>
                                <span class="h4">Comissões</span>
                                <br/>
                                <div class="text-sm text-muted">Ver &rarr;</div>
                            </a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card b">
                      <router-link to="/admin/mensalidades">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-info" href="#">
                                <em class="fa-5x fas fa-calendar-check mb-3"></em>
                                <br/>
                                <span class="h4">Mensalidades</span>
                                <br/>
                                <div class="text-sm text-muted">Ver &rarr;</div>
                            </a>
                        </div>
                      </router-link>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card b">
                      <router-link to="/admin/ajuda">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-purple" href="#">
                                <em class="fa-5x fa fa-life-ring mb-3"></em>
                                <br/>
                                <span class="h4">Ajuda</span>
                                <br/>
                                <div class="text-sm text-muted">Ver &rarr;</div>
                            </a>
                        </div>
                      </router-link>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card b">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-warning" href="#">
                                <em class="fa-5x far fa-gem mb-3"></em>
                                <br/>
                                <span class="h4">Buyers</span>
                                <br/>
                                <div class="text-sm text-muted">View all &rarr;</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card b">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-danger" href="#">
                                <em class="fa-5x far fa-building mb-3"></em>
                                <br/>
                                <span class="h4">Sellers</span>
                                <br/>
                                <div class="text-sm text-muted">View all &rarr;</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card b">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-success" href="#">
                                <em class="fa-5x far fa-calendar-check mb-3"></em>
                                <br/>
                                <span class="h4">Billing</span>
                                <br/>
                                <div class="text-sm text-muted">View all &rarr;</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-4">
                    <div class="card b">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-dark" href="#">
                                <em class="fa-5x fa fa-recycle mb-3"></em>
                                <br/>
                                <span class="h4">Plans</span>
                                <br/>
                                <div class="text-sm text-muted">View all &rarr;</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card b">
                        <div class="card-body text-center">
                            <a class="link-unstyled text-dark" href="#">
                                <em class="fa-5x fa fa-street-view mb-3"></em>
                                <br/>
                                <span class="h4">Accounts</span>
                                <br/>
                                <div class="text-sm text-muted">View all &rarr;</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

      
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
    API_NOTIFICATION.HideLoading();
    const LUser = await UTILIS_API.GetUserSession();
    if (LUser != null && LUser.user.is_user_admin == 1) {
      // this.timeAgo = new TimeAgo("pt-BR");
      // let sortOrders = {};
      // this.columns.forEach(function(key) {
      //   sortOrders[key] = 1;
      // });
      // this.sortOrders = sortOrders;
      // this.checkIfLogged();
      //this.data = this.gridData;
      ///sconsole.log("Filtered", this.dataPerPage);
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
      comissoesList: {},
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
            .then(resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              API_TRANSACOES.GetTransacoesInternas()
                .then(retProd => {
                  this.gridData = [];
                  this.comissoesList = retProd.data;
                  this.qtd_pendente = retProd.data.length;
                  if (retProd.data.length > 0) {
                    retProd.data.forEach(async (obj, i) => {
                      this.gridData.push({
                        id_usuario: obj.id_usuario,
                        data_processar: moment(obj.data_processar).format(
                          "DD/MM/YYYY"
                        ),
                        loja: obj.url_loja,
                        status: obj.status,
                        valor: parseFloat(obj.comissao)
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
    async getValorComissao(obj) {
      const LJSON = obj.json_front_end_user_data;
      const LUser = await UTILIS_API.GetUserSession();
      var LValorComissao = 0;
      const LArrayPlan = await API_PLANOS.GetPlanosById(LUser.user.plano);
      //const LPlano = LArrayPlan.filter(x => x.id == LUser.user.plano)[0];
      const LPercentComission = LArrayPlan.addon.replace("%", "");
      const LValCom =
        (parseFloat(LPercentComission) / 100) *
        parseFloat(LJSON.dadosComprador.valor);
      LValorComissao = parseFloat(LValCom);
      return LValorComissao;
    },
    processarComissoes() {
      API_NOTIFICATION.showConfirmDialog(
        "Processar Comissões",
        "Tem certeza de que deseja processar as comissões?",
        "question",
        () => {
          API_NOTIFICATION.ShowLoading();
          window.Mercadopago.setPublishableKey(
            constantes.SAND_BOX_MP_PUBLICK_KEY
          );
          window.Mercadopago.clearSession();
          this.comissoesList.forEach(async (obj, i) => {
            API_NOTIFICATION.ShowLoading();
            await this.sleep(2000);
            var LDadoUsuario = await API_LOGIN.GetUserByID(obj.id_usuario);
            LDadoUsuario = LDadoUsuario.data;
            //console.log(LDadoUsuario.data);
            const LValor = parseFloat(obj.comissao);
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
                    var LData = moment()
                      .add({ days: 7 })
                      .format();
                    LDadoUsuario.proximo_pagamento = LData;
                    API_LOGIN.UpdateUser(
                      LDadoUsuario.id,
                      LDadoUsuario.plano,
                      LDadoUsuario.json_pagamento,
                      LDadoUsuario.proximo_pagamento
                    )
                      .then(resUpdate => {
                        API_TRANSACOES.SetPaymentComissionDone(
                          obj.id_usuario,
                          obj.data_processar,
                          paymentData,
                          retornoPay.data
                        )
                          .then(resUpdateSetPaymentDone => {
                            console.log("Payment Done");
                            API_NOTIFICATION.HideLoading();
                          })
                          .catch(error => {
                            console.log("Erro ao setar pagamento ", error);
                          });
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
            console.log(LDadoUsuario);
          });
        }
      );
    }
  }
};
</script>
