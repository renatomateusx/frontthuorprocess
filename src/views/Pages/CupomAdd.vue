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
  height: 36px !important;
  border: 3px solid #23b7e5;
}
.opcaoDeselecionada {
  font-weight: bold;
  color: gray;
  height: 36px !important;
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
.buttonProduto {
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
.sizeIconDiscount {
  font-size: 20px !important;
}
.sizeDiscountLabel {
  font-size: 25px !important;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading" v-show="cupom.id  == undefined">
      <span class="fa fa-tag">
        <span class="ml-2"></span>
      </span>Novo Cupom
    </div>
    <div class="content-heading" v-show="cupom.id > 0">
      <span class="fa fa-edit">
        <span class="ml-2"></span>
      </span>Cupom: {{cupom.descricao}}
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
              <div class="form-group ml-3">
                <label class="s col-form-label">Status</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="cupom.status == 1"
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

              <div class="form-group col-md-5">
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
              <div class="form-group col-md-5">
                <label class="col-form-label">Código do Cupom *</label>
                <div class="d-flex align-items-center">
                  <input
                    :class="{'form-control':true, 'is-invalid': errors.has('cupom.descricao')}"
                    v-model="cupom.code"
                    class="fontCode col-md-8"
                    v-validate="'required'"
                    type="text"
                    @input="maskCupomCode()"
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

              <div class="form-group col-md-3">
                <label class="col-form-label">Total Disponíveis *</label>
                <el-input-number
                 :class="{'is-invalid': errors.has('cupom.total_disponivel')}"
                    v-model="cupom.total_disponivel"
                    :min="1"
                    :max="10000"
                    name="total_disponivel"
                    v-validate="'required'"
                  ></el-input-number>                
                <span
                  v-show="errors.has('cupom.total_disponivel')"
                  class="invalid-feedback"
                >{{ errors.first('cupom.total_disponivel') }}</span>
              </div>
              <div class="form-group col-md-4">
                <label class="col-form-label">Valor Mínimo da Compra *</label>
                <b-input-group size="md" prepend="R$">
                  <b-form-input
                    v-model.lazy="price"
                    v-model="cupom.valor_minimo_compra"
                    v-money="money"
                    v-validate="'required'"
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
                <div class="form-group col-md-4 ml-3">
                  <label class="col-form-label">Data de Início *</label>
                  <div class="block">
                    <el-date-picker
                      v-model="cupom.data_inicio"
                      class="input"
                      v-validate="'required'"
                      type="datetime"
                      format="dd-MM-yyyy HH:mm:ss"
                      placeholder="Escolha uma data"
                      :picker-options="DateTimePickerOptions"
                    ></el-date-picker>
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label class="col-form-label">Data Fim *</label>
                  <div class="block">
                    <el-date-picker
                      v-model="cupom.data_fim"
                      class="input"
                      type="datetime"
                      v-validate="'required'"
                      format="dd-MM-yyyy HH:mm:ss"
                      placeholder="Escolha uma data"
                      :picker-options="DateTimePickerOptions"
                    ></el-date-picker>
                  </div>
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
              <div class="row ml-3">
                <div class="form-group">
                  <label class="s col-form-label">Exige quantidade mínima?</label>
                  <div class>
                    <label class="switch switch-lg">
                      <input
                        type="checkbox"
                        checked="checked"
                        v-model="cupom.exige_quantidade_minima"
                        :class="{'form-control':true, 'is-invalid': errors.has('cupom.exige_quantidade_minima')}"
                      />
                      <span class></span>
                    </label>
                    <small>Será considerada a quantidade de itens no carrinho.</small>
                  </div>
                  <span
                    v-show="errors.has('cupom.exige_quantidade_minima')"
                    class="invalid-feedback"
                  >{{ errors.first('cupom.exige_quantidade_minima') }}</span>
                </div>

                <div class="form-group col-md-4 ml-5" v-show="cupom.exige_quantidade_minima">
                  <label class="col-form-label">Quantidade Mínima de Itens *</label>
                  <el-input-number
                    v-model="cupom.quantidade_minima"
                    :min="1"
                    :max="10000"
                    v-validate="{'required':cupom.exige_quantidade_minima}"
                    :class="{'is-invalid': errors.has('cupom.exige_quantidade_minima')}"
                  ></el-input-number>
                  <span
                    v-show="errors.has('cupom.quantidade_minima')"
                    class="invalid-feedback"
                  >{{ errors.first('cupom.quantidade_minima') }}</span>
                </div>
              </div>
            </div>
            <hr />
            <div class="card-body">
              <span class="el-icon-s-ticket sizeIconDiscount mt-2 ml-3 mb-3"></span>
              <span class="ml-2 sizeDiscountLabel">Desconto</span>
              <div class="row">
                <div class="form-group col-md-2 ml-3">                  
                  <input
                    :class="{'form-control':true, 'is-invalid': errors.has('cupom.total_disponivel')}"
                    v-model="cupom.valor_desconto"
                    v-validate="'required'"
                    @input="valorDesconto()"
                    class
                    type="text"
                    name="valor_desconto"
                  />
                </div>
                <div class="form-group col-md-1 ml-0 mr-0 pl-0 pr-0">
                  <button
                    type="button"
                    :class="{'opcaoSelecionada': cupom.tipo_desconto == 1, 'opcaoDeselecionada': cupom.tipo_desconto !==1} "
                    v-on:click="selecionaTipoDesconto(1)"
                    class="btn btn-secondary btn col-md-10 p-0 pl-0 pd-0 pt-0 pb-0 ml-1"
                  >
                    <span>
                      <strong class="tipo_desconto">%</strong>
                    </span>
                  </button>
                </div>
                <div class="form-group col-md-1 ml-0 mr-0 pl-0 pr-0">
                  <button
                    type="button"
                    :class="{'opcaoSelecionada': cupom.tipo_desconto == 2, 'opcaoDeselecionada': cupom.tipo_desconto !==2} "
                    v-on:click="selecionaTipoDesconto(2)"
                    class="btn btn-secondary btn col-md-10 p-0 pl-0 pd-0 pt-0 pb-0 ml-1"
                  >
                    <span>
                      <strong class="tipo_desconto">R$</strong>
                    </span>
                  </button>
                </div>
              </div>
              <small class="ml-3">
                <strong>Desconto aplicado apenas no valor dos produtos.</strong>
              </small>
              <br />
              <small class="ml-3">Não será considerado o valor do frete.</small>
              <span
                v-show="errors.has('cupom.valor_desconto')"
                class="invalid-feedback"
              >{{ errors.first('cupom.valor_desconto') }}</span>
            </div>
            <hr />
            <div class="card-body">
              <span class="fa fa-truck sizeIconDiscount mt-2 ml-3 mb-3"></span>
              <span class="ml-2 sizeDiscountLabel">Frete grátis</span>

              <div class="ml-3">
                <label class="col-form-label">Aplicar frete grátis *</label>
                <label class="switch switch-lg">
                  <input
                    type="checkbox"
                    checked="checked"
                    v-model="cupom.frete_gratis"
                    :class="{'form-control':true, 'is-invalid': errors.has('cupom.frete_gratis')}"
                  />
                  <span class></span>
                </label>
              </div>
              <span
                v-show="errors.has('cupom.frete_gratis')"
                class="invalid-feedback"
              >{{ errors.first('cupom.frete_gratis') }}</span>
            </div>
            <hr />
            <div class="card-body ml-3">
              <span class="fa fa-gavel sizeIconDiscount mt-2 ml-3 mb-3"></span>
              <span class="ml-2 sizeDiscountLabel">Regras</span>

              <div class="row">
                <div class="col-md-2 mt-3">
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      checked="checked"
                      v-model="cupom.aplicar_regra_automatica_carrinho"
                      :class="{'form-control':true, 'is-invalid': errors.has('cupom.frete_gratis')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <div class="col-md-8">
                  <p class="col-form-label">Aplicar automaticamente no carrinho</p>
                  <small class="mt-0 pt-0">Não é preciso informar o cupom no checkout</small>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-2 mt-1">
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      checked="checked"
                      v-model="cupom.permite_acumular"
                      :class="{'form-control':true, 'is-invalid': errors.has('cupom.frete_gratis')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <div class="col-md-8">
                  <p class="col-form-label">Permite acumular com outras promoções ativas</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-2 mt-1">
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      checked="checked"
                      v-model="cupom.uso_unico"
                      :class="{'form-control':true, 'is-invalid': errors.has('cupom.frete_gratis')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <div class="col-md-8">
                  <p class="col-form-label">Uso único - (1 vez por cliente)</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-2 mt-1">
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      checked="checked"
                      v-model="cupom.envia_automaticamente_carrinho_abandonado"
                      :class="{'form-control':true, 'is-invalid': errors.has('cupom.frete_gratis')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <div class="col-md-8">
                  <p
                    class="col-form-label"
                  >Enviar automaticamente nos e-mails de carrinho abandonado</p>
                </div>
              </div>
              <hr />
            </div>
            <hr />
            <div class="card-body ml-3">
              <span class="fa fa-tags sizeIconDiscount mt-2 ml-3 mb-3"></span>
              <span class="ml-2 sizeDiscountLabel">Inserir Produtos Específicos</span>

              <p></p>
                <label class="col-form-label">Aplicar regra em produtos específicos</label>
                <button
                  type="button"
                  id="buttonProdutoUm"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('cupom.aplicar_regra_automatica_carrinho'), 'opcaoSelecionada': cupom.aplicar_regra_automatica_carrinho > 0, 'opcaoDeselecionada': cupom.aplicar_regra_automatica_carrinho == 0} "
                  v-on:click="collapse('#collapseExample', '#collapseExample', '#buttonProdutoUm')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0 buttonProduto"
                >{{lhtml}}</button>
                <div
                  class="collapse"
                  id="collapseExample"
                  :class="{'show':cupom.aplicar_regra_produtos_especificos.length > 0}"
                >
                  <div class="card">
                    <prods :functionClick="selectedProduct" :arrayAux="arrayAux"></prods>
                  </div>
                </div>
              
            </div>
            <hr>
            <div class="card-body ml-3">
              <span class="fa fa-tags sizeIconDiscount mt-2 ml-3 mb-3"></span>
              <span class="ml-2 sizeDiscountLabel">Excluir Produtos Específicos</span>

                <p></p>
                <label class="col-form-label">Exceptuar regra em produtos específicos</label>
                <button
                  type="button"
                  id="buttonProdutoDois"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('cupom.exceptuar_regra_produtos_especificos'), 'opcaoSelecionada': cupom.exceptuar_regra_produtos_especificos > 0, 'opcaoDeselecionada': cupom.exceptuar_regra_produtos_especificos == 0} "
                  v-on:click="collapse('#collapseExcluir', '#collapseExcluir', '#buttonProdutoDois')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0 buttonProduto"
                >{{lhtml}}</button>
                <div
                  class="collapse"
                  id="collapseExcluir"
                  :class="{'show':cupom.exceptuar_regra_produtos_especificos.length > 0}"
                >
                  <div class="card">
                    <prods :functionClick="selectedProductExcluir" :arrayAux="arrayAuxExcluir"></prods>
                  </div>
                </div>
              
            </div>
            <div class="card-footer">
              <div class="required">* Campos Obrigatórios</div>
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
import UTILIS_API from "../../api/utilisAPI";
import lang from "element-ui/lib/locale/lang/pt-br";
import locale from "element-ui/lib/locale";

Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: 'pt',
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
      this.cupomID = this.$route.params.id;
      this.cupomString = await this.getDeCripto(this.cupomID);
      console.log(this.cupomString);
      this.getcupomByID(this.cupomString[0]);
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
      DateTimePickerOptions: {
        shortcuts: [
          {
            text: "Hoje",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "Amanhã",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "+ 2 Dias",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 48);
              picker.$emit("pick", date);
            }
          },
          {
            text: "+ 7 Dias",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          },
          {
            text: "+ 15 Dias",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 15);
              picker.$emit("pick", date);
            }
          },
          {
            text: "+ 30 Dias",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit("pick", date);
            }
          },
          {
            text: "+ 45 Dias",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 45);
              picker.$emit("pick", date);
            }
          },
          {
            text: "+ 1 Ano",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 365);
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
      arrayAuxExcluir: [],
      cupom: {
        id_usuario: "",
        code: "",
        status: 0,
        descricao: "",
        total_disponivel: "",
        valor_minimo_compra: "",
        data_inicio: "",
        data_fim: "",
        exige_quantidade_minima: 0,
        quantidade_minima: 0,
        tipo_desconto: 1,
        valor_desconto: "",
        frete_gratis: 0,
        aplicar_regra_automatica_carrinho: 0,
        permite_acumular: 0,
        uso_unico: 0,
        envia_automaticamente_carrinho_abandonado: 0,
        cupom_primeira_compra: 0,
        aplicar_regra_produtos_especificos: [],
        aplicar_regra_colecao: [],
        aplicar_regra_marca: [],
        aplicar_regra_categoria: [],
        aplicar_regra_forma_pagamento: [],
        exceptuar_regra_produtos_especificos: [],
        exceptuar_regra_colecao: [],
        exceptuar_regra_marca: [],
        exceptuar_regra_categoria: [],
        exceptuar_regra_forma_pagamento: [],      
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
      if (this.cupom.aplicar_regra_produtos_especificos.length > 0) {
        this.cupom.aplicar_regra_produtos_especificos = JSON.stringify(
          this.cupom.aplicar_regra_produtos_especificos
        );
      }
      if (this.cupom.exceptuar_regra_produtos_especificos.length > 0) {
        this.cupom.exceptuar_regra_produtos_especificos = JSON.stringify(
          this.cupom.exceptuar_regra_produtos_especificos
        );
      }
      API_CUPOM.SalvarCupom(this.cupom)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "cupom Adicionado com Sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/marketing/cupons");
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
          API_NOTIFICATION.HideLoading();
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
      if (this.cupom.aplicar_regra_produtos_especificos.length > 0) {
        const LFind = this.cupom.aplicar_regra_produtos_especificos.find(x => x.id_thuor == id);
        console.log("find", LFind);
        if (LFind != undefined) {
          this.cupom.aplicar_regra_produtos_especificos.forEach((obj, i) => {
            if (id == obj.id_thuor) {
              this.cupom.aplicar_regra_produtos_especificos.splice(i, 1);
            }
             
          });
          console.log("Updated", this.cupom.aplicar_regra_produtos_especificos);
          this.arrayAux = this.cupom.aplicar_regra_produtos_especificos;
          return;
        } else if (LFind == undefined) {
          this.cupom.aplicar_regra_produtos_especificos.push({ id_thuor: id });
           this.arrayAux = this.cupom.aplicar_regra_produtos_especificos;
          console.log("Pushed", this.cupom.aplicar_regra_produtos_especificos);
          return;
        }
      } else {
        this.cupom.aplicar_regra_produtos_especificos.push({ id_thuor: id });
         this.arrayAux = this.cupom.aplicar_regra_produtos_especificos;
        console.log("Pushed", this.cupom.aplicar_regra_produtos_especificos);
        return;
      }
     
    },
    selectedProductExcluir(id, titulo, image) {
      if (this.cupom.exceptuar_regra_produtos_especificos.length > 0) {
        const LFind = this.cupom.exceptuar_regra_produtos_especificos.find(x => x.id_thuor == id);
        //console.log("find", LFind);
        if (LFind != undefined) {
          this.cupom.exceptuar_regra_produtos_especificos.forEach((obj, i) => {
            if (id == obj.id_thuor) {
              this.cupom.exceptuar_regra_produtos_especificos.splice(i, 1);
            }
          });
          //console.log("Updated", this.cupom.exceptuar_regra_produtos_especificos);
          this.arrayAuxExcluir = this.cupom.exceptuar_regra_produtos_especificos;
          return;
        } else if (LFind == undefined) {
          this.cupom.exceptuar_regra_produtos_especificos.push({ id_thuor: id });
          this.arrayAuxExcluir = this.cupom.exceptuar_regra_produtos_especificos;
          //console.log("Pushed", this.cupom.exceptuar_regra_produtos_especificos);
          return;
        }
      } else {
        this.cupom.exceptuar_regra_produtos_especificos.push({ id_thuor: id });
        this.arrayAuxExcluir = this.cupom.exceptuar_regra_produtos_especificos;
        //console.log("Pushed", this.cupom.exceptuar_regra_produtos_especificos);
        return;
      }
      
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },
    selecionaTipoDesconto(id) {
      this.cupom.tipo_desconto = id;
    },
    getTipocupom(id) {
      if (id == 1) return "https://github.bubbstore.com/svg/facebook.svg";
      if (id == 2) return "https://github.bubbstore.com/svg/google_ads.svg";
    },
    getcupomByID(id) {
      API_NOTIFICATION.ShowLoading();
      API_CUPOM.GetCupomByID(id)
        .then(res => {
          this.cupom = res.data;
          this.arrayAux = this.cupom.aplicar_regra_produtos_especificos;
          this.arrayAuxExcluir = this.cupom.exceptuar_regra_produtos_especificos;
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
    },
    valorDesconto() {
      this.cupom.valor_desconto = this.cupom.valor_desconto.replace(
        /[,.]/g,
        ","
      );
    },
    maskCupomCode(){
      this.cupom.code = this.cupom.code.toUpperCase();
    }
  }
};
</script>
