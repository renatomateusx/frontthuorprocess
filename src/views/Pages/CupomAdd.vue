<style scoped>
.icon {
  background: #ffffff
    url("http://icons.iconarchive.com/icons/gakuseisean/ivista-2/16/Start-Menu-Search-icon.png")
    no-repeat 4px 4px;
  padding: 4px 4px 4px 22px;
  height: 18px;
  content: "OpaOpa";
}
​ .cursorP {
  cursor: pointer !important;
}
.opcaoSelecionada {
  color: gray;
  font-weight: bold;
  height: 65px !important;
  border: 3px solid #23b7e5;
}
.opcaoDeselecionada {
  font-weight: bold;
  color: gray;
  height: 65px !important;
}
.avatar {
  vertical-align: middle !important;
  width: 80px !important;
  height: auto !important;
  border-radius: 50% !important;
  height: 55px !important;
}
.marginZeroAuto {
  margin: 0 auto !important;
}
#buttonProdutoUm {
  height: 60px !important;
}
.cursorP {
  cursor: pointer !important;
}
.fontCode {
  font-family: Rubik, sans-serif;
  font-weight: 700 !important;
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
      <span class="fa fa-tag">
        <span class="ml-2"></span>
      </span>Novo Cupom
    </div>
    <small>Preencha os campos abaixo para adicionar o Cupom.</small>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="validateBeforeSubmit('cupom')" data-vv-scope="cupom">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="s col-form-label">Status</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      checked="checked"
                      v-model="cupom.status"
                      :class="{'form-control':true, 'is-invalid': errors.has('cupom.status')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('cupom.status')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.status') }}</span>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label class="col-form-label">Nome do Cupom *</label>
                  <input
                    :class="{'form-control':true, 'is-invalid': errors.has('cupom.descricao')}"
                    v-model="cupom.descricao"
                    v-validate="'required'"
                    class
                    type="text"
                    name="descricao"
                  />
                  <span
                    v-show="errors.has('cupom.descricao')"
                    class="invalid-feedback"
                  >{{ errors.first('cupom.descricao') }}</span>
                </div>
                <div class="form-group col-md-6">
                  <label class="col-form-label">Código do Cupom *</label>
                  <div class="d-flex align-items-center">
                    <input
                      :class="{'form-control':true, 'is-invalid': errors.has('cupom.descricao')}"
                      v-model="cupom.code"
                      class="fontCode col-md-8"
                      v-validate="'required'"
                      type="text"
                      name="nome"
                    />
                    <button
                      class="ml-1 cursorP fontCode col-md-4 btn btn-primary"
                      v-on:click="gerarCodigo()"
                    >GERAR</button>
                  </div>
                  <span
                    v-show="errors.has('cupom.code')"
                    class="invalid-feedback"
                  >{{ errors.first('cupom.code') }}</span>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label">Total Disponíveis *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.total_disponivel')}"
                  v-model="cupom.total_disponivel"
                  v-validate="'required'"
                  class
                  type="text"
                  name="total_disponivel"
                />
                <span
                  v-show="errors.has('cupom.total_disponivel')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.total_disponivel') }}</span>
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label">Valor Mínimo da Compra *</label>
                <b-input-group size="md" prepend="R$">
                  <b-form-input
                    v-model.lazy="price"
                    v-model="cupom.valor_minimo_compra"
                    v-money="money"
                    id="valor_minimo_compra"
                    class="col-md-6"
                  ></b-form-input>
                </b-input-group>
                <span
                  v-show="errors.has('cupom.valor_minimo_compra')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.valor_minimo_compra') }}</span>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label class="col-form-label">Data de Início *</label>
                  <div class="block">
                    <el-date-picker
                      v-model="cupom.data_inicio"
                      class="input"
                      type="datetime"
                      :bootstrapStyling="true"
                      :calendar-button="true"
                      placeholder="Escolha uma data"
                      :picker-options="pickerOptions1"
                    ></el-date-picker>
                  </div>
                  <!-- <datepicker
                    v-model="cupom.data_inicio"
                    class="cursorP"
                    name="data_inicio"
                    :bootstrapStyling="true"
                    :monday-first="true"
                    :full-month-name="true"
                    placeholder="Escolha uma data"
                    :calendar-button="true"
                    calendar-button-icon="far fa-calendar"
                    :clear-button="true"
                    :format="customFormatter"
                    :language="pt"
                  ></datepicker>-->
                </div>
                <div class="form-group col-md-6">
                  <label class="col-form-label">Data Fim *</label>
                  <!-- <datepicker
                    v-model="cupom.data_fim"
                    class="cursorP"
                    name="data_fim"
                    :bootstrapStyling="true"
                    :monday-first="true"
                    :full-month-name="true"
                    placeholder="Escolha uma data"
                    :calendar-button="true"
                    calendar-button-icon="far fa-calendar"
                    :clear-button="true"
                    :format="customFormatter"
                    :language="pt"
                  ></datepicker>-->
                </div>
                <span
                  v-show="errors.has('cupom.data_inicio')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.data_inicio') }}</span>
                <span
                  v-show="errors.has('cupom.data_fim')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.data_fim') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Fonte do cupom *</label>
                <div class="row">
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': cupom.tipo == 1, 'opcaoDeselecionada': cupom.tipo !==1} "
                    v-on:click="selecionaTipoServico(1)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-3"
                  >
                    <span>
                      <img :src="getTipocupom(1)" class="imgTipoServico mt-2" />
                    </span>
                    <p>
                      <small>cupom do Facebook</small>
                    </p>
                  </button>
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': cupom.tipo == 2, 'opcaoDeselecionada': cupom.tipo !==2} "
                    v-on:click="selecionaTipoServico(2)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-4"
                  >
                    <span>
                      <img :src="getTipocupom(2)" class="imgTipoServico mt-2" />
                    </span>
                    <p>
                      <small>cupom do Google</small>
                    </p>
                  </button>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.tipo')}"
                  v-model="cupom.tipo"
                  v-validate="'required'"
                  type="hidden"
                  name="tipo"
                />
                <span
                  v-show="errors.has('cupom.tipo')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.tipo') }}</span>
              </div>

              <div class="form-group" v-show="cupom.tipo == 1">
                <label class="col-form-label">ID do cupom *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.facebook_id_cupom')}"
                  v-model="cupom.facebook_id_cupom"
                  v-validate="{'required': cupom.tipo == 1}"
                  type="text"
                  name="facebook_id_cupom"
                />
                <span
                  v-show="errors.has('cupom.facebook_id_cupom')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.facebook_id_cupom') }}</span>
              </div>
              <div class="form-group" v-show="cupom.tipo == 2">
                <label class="col-form-label">ID do Analytics *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.google_analytics_id')}"
                  v-model="cupom.google_analytics_id"
                  v-validate="{'required': cupom.tipo == 2}"
                  type="text"
                  name="google_analytics_id"
                />
                <span
                  v-show="errors.has('cupom.google_analytics_id')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.google_analytics_id') }}</span>
              </div>
              <div class="form-group" v-show="cupom.tipo == 2">
                <label class="col-form-label">ID de Conversão *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.google_id_conversao')}"
                  v-model="cupom.google_id_conversao"
                  v-validate="{'required': cupom.tipo == 2}"
                  type="text"
                  name="google_id_conversao"
                />
                <span
                  v-show="errors.has('cupom.google_id_conversao')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.google_id_conversao') }}</span>
              </div>
              <div class="form-group" v-show="cupom.tipo == 2">
                <label class="col-form-label">Rótulo de Conversão *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.google_rotulo_conversao')}"
                  v-model="cupom.google_rotulo_conversao"
                  v-validate="{'required': cupom.tipo == 2}"
                  type="text"
                  name="google_rotulo_conversao"
                />
                <span
                  v-show="errors.has('cupom.google_rotulo_conversao')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.google_rotulo_conversao') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Marca Boleto? *</label>
                <select
                  id="marca_boleto"
                  name="marca_boleto"
                  class="form-control"
                  v-model="cupom.marca_boleto"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
                <span
                  v-show="errors.has('cupom.marca_boleto')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.marca_boleto') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">cupom exclusivo para o produto... *</label>
                <button
                  type="button"
                  id="buttonProdutoUm"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('cupom.id_produto_selecionado_um'), 'opcaoSelecionada': cupom.array_produtos_id.length > 0, 'opcaoDeselecionada': cupom.array_produtos_id.length == 0} "
                  v-on:click="collapse('#collapseExample', '#collapseExample', '#buttonProdutoUm')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div
                  class="collapse"
                  id="collapseExample"
                  :class="{'show':cupom.array_produtos_id.length > 0}"
                >
                  <div class="card">
                    <prods :functionClick="selectedProduct" :arrayAux="arrayAux"></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('cupom.array_produtos_id')}"
                  v-model="cupom.array_produtos_id"
                  v-validate="{'required': false}"
                  type="hidden"
                  name="array_produtos_id"
                />
                <span
                  v-show="errors.has('cupom.id_produto_selecionado_um')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.id_produto_selecionado_um') }}</span>
              </div>
              <div class="required">* Required fields</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                <div class="float-right">
                  <button class="btn btn-primary" type="submit">Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->
        </form>
      </div>
    </div>
    <!-- END row-->
  </ContentWrapper>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { min, max, numeric } from "vee-validate/dist/rules.esm";
import { Validator } from "vee-validate";
import pt from "vee-validate/dist/locale/pt_BR";
import API_PRODUTOS from "../../api/produtosAPI";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import Prods from "../../components/Tables/TableProdutos";
import API_CUPOM from "../../api/cuponsAPI";
import Hashids from "hashids";
import money from "v-money";
import moment from "moment";
import Element from "element-ui";
import { DatePicker, TimeSelect } from "element-ui";

import lang from "element-ui/lib/locale/lang/pt-br";
import locale from "element-ui/lib/locale";

locale.use(lang);

// Tag inputs
Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});
Vue.use(money, { precision: 2 });
Vue.use(Element);
Vue.use(DatePicker);
Vue.use(TimeSelect);

export default {
  async created() {
    this.cupom.data_inicio = moment().format("DD-MM-YYYY");
    if (this.$route.params.id != undefined) {
      this.mensagemID = this.$route.params.id;
      this.MensagemString = await this.getDeCripto(this.mensagemID);
      console.log(this.MensagemString);
      this.getcupomByID(this.MensagemString[0]);
    } else {
      //this.checkIfLogged();
    }
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
    Prods,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect
  },
  data() {
    return {
      pickerOptions1: {
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "Yesterday",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "A week ago",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      price: 123.45,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */
      },
      arrayAux: [],
      cupom: {
        id_usuario: "",
        code: "",
        status: 0,
        descricao: "",
        total_disponivel: "",
        valor_minimo_compra: "",
        data_inicio: "",
        data_fim: "",
        exige_quantidade_minima: "",
        quantidade_minima: "",
        tipo_desconto: "",
        valor_desconto: "",
        aplicar_regra_automatica_carrinho: "",
        permite_acumular: "",
        uso_unico: "",
        envia_automaticamente_carrinho_abandonado: "",
        cupom_primeira_compra: "",
        aplicar_regra_produtos_especificos: "",
        aplicar_regra_colecao: "",
        aplicar_regra_marca: "",
        aplicar_regra_categoria: "",
        aplicar_regra_forma_pagamento: "",
        exceptuar_regra_produtos_especificos: "",
        exceptuar_regra_colecao: "",
        exceptuar_regra_marca: "",
        exceptuar_regra_categoria: "",
        exceptuar_regra_forma_pagamento: "",

        id_usuario: 0,
        descricao: "",
        facebook_id_cupom: "",
        marca_boleto: 1,
        google_id_conversao: "",
        google_rotulo_conversao: "",
        status: 1,
        array_produtos_id: [],
        tipo: 0,
        google_analytics_id: ""
      },
      pixel: {},
      buttonPressed: 0,
      buttonPressedDois: 0,
      vueSelectMultipleValue: "",
      titulo_produto_selecionado_um: "",
      lhtml: "Clique aqui para selecionar um ou mais produtos"
    };
  },
  methods: {
    getDeCripto(crypted) {
      try {
        const hashids = new Hashids("", 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        return hashids.decode(crypted);
      } catch (error) {
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "Parâmetros Inválidos na URL",
          "error"
        );
      }
    },
    validateBeforeSubmit(scope) {
      var self = this;
      this.$validator
        .validateAll(scope)
        .then(result => {
          if (result) {
            console.log("Form Submitted!");
            self.salvarcupom();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    salvarcupom() {
      API_NOTIFICATION.ShowLoading();
      if (this.cupom.array_produtos_id.length > 0) {
        this.cupom.array_produtos_id = JSON.stringify(
          this.cupom.array_produtos_id
        );
      }
      API_cupom.Salvarcupom(this.cupom)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "cupom Adicionado com Sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/marketing/cupoms");
          }, 1500);
        })
        .catch(error => {
          console.log("Erro ao salvar o cupom", error);
        });
    },
    addTag(newTag) {
      this.vueSelectMultipleValue = newTag;
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_PRODUTOS.GetProdutos()
            .then(retProd => {
              var LImages = JSON.parse(retProd.data[0].json_dados_produto);
              this.produtosList = retProd.data;
              this.options2 = this.produtosList;
              var self = this;
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar produtos", error);
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    collapse(id, idComando, btn) {
      const element = document.querySelector(id);
      const elementComando = document.querySelector(idComando);
      const btnbtn = document.querySelector(btn);
      if (element.classList.contains("show")) {
        this.buttonPressed = 0;
        element.classList.remove("show");
      } else {
        this.buttonPressed = 1;
        element.classList.add("show");
      }
    },
    selectedProduct(id, titulo, image) {
      if (this.cupom.array_produtos_id.length > 0) {
        const LFind = this.cupom.array_produtos_id.find(x => x.id_thuor == id);
        console.log("find", LFind);
        if (LFind != undefined) {
          this.cupom.array_produtos_id.forEach((obj, i) => {
            if (id == obj.id_thuor) {
              this.cupom.array_produtos_id.splice(i, 1);
            }
          });
          console.log("Updated", this.cupom.array_produtos_id);
          return;
        } else if (LFind == undefined) {
          this.cupom.array_produtos_id.push({ id_thuor: id });
          console.log("Pushed", this.cupom.array_produtos_id);
          return;
        }
      } else {
        this.cupom.array_produtos_id.push({ id_thuor: id });
        console.log("Pushed", this.cupom.array_produtos_id);
        return;
      }
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },
    selecionaTipoServico(id) {
      this.cupom.tipo = id;
    },
    getTipocupom(id) {
      if (id == 1) return "https://github.bubbstore.com/svg/facebook.svg";
      if (id == 2) return "https://github.bubbstore.com/svg/google_ads.svg";
    },
    getcupomByID(id) {
      API_NOTIFICATION.ShowLoading();
      API_cupom.GetcupomByID(id)
        .then(res => {
          console.log(res.data);
          this.cupom = res.data;
          if (
            (this.cupom.array_produtos_id != null) &
            (this.cupom.array_produtos_id.length > 2)
          ) {
            this.cupom.array_produtos_id = JSON.parse(
              this.cupom.array_produtos_id
            );
          } else {
            this.cupom.array_produtos_id = [];
          }
          this.arrayAux = this.cupom.array_produtos_id;
          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao pegar o cupom", error);
        });
    },
    gerarCodigo() {
      this.cupom.code = "";
      const hashids = new Hashids("", 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      const L1 = Math.floor(Math.random() * 100);
      const L2 = Math.floor(Math.random() * 100);
      const L3 = Math.floor(Math.random() * 100);
      const LCodeHash = hashids.encode(L1, L2, L3);
      console.log(LCodeHash);
      this.cupom.code = LCodeHash;
    },
    customFormatter(date) {
      return moment(date).format("DD-MM-YYYY HH:mm:ss");
    },
    formatDate(event) {
      this.cupom.data_inicio = event.target.value.replace(
        /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g,
        "$1-$2-$3 $4:$5:$6"
      );
    }
  }
};
</script>
