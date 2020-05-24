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
  background-color: #23b7e5;
  color: white;
  font-weight: bold;
  height: 65px !important;
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
</style>
<template>
  <ContentWrapper>
    <div class="content-heading" v-show="this.novoupsell.nome.length < 2">
      <span class="fa fa-plus">
        <span class="ml-2"></span>
      </span>Novo UpSell
    </div>
    <div class="content-heading" v-show="this.novoupsell.nome.length > 1">
      <span class="fa fa-edit">
        <span class="ml-2"></span>
      </span>UpSell: {{this.novoupsell.nome}}
    </div>
    <small v-show="this.novoupsell.nome.length > 1">Preencha os campos abaixo para criar o UpSell.</small>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="validateBeforeSubmit('novoupsell')" data-vv-scope="novoupsell">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Nome do UpSell *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novoupsell.nome')}"
                  v-model="novoupsell.nome"
                  v-validate="'required'"
                  type="text"
                  name="nome"
                />
                <span
                  v-show="errors.has('novoupsell.nome')"
                  class="invalid-feedback"
                >{{ errors.first('novoupsell.nome') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Ao Comprar o produto... *</label>
                <button
                  type="button"
                  id="buttonProdutoUm"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('novoupsell.id_produto_selecionado_um'), 'opcaoSelecionada': novoupsell.id_produto_selecionado_um > 0, 'opcaoDeselecionada': novoupsell.id_produto_selecionado_um == 0} "
                  v-on:click="collapse('#collapseExample', '#collapseExample', '#buttonProdutoUm')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div class="collapse" id="collapseExample" :class="{'show': novoupsell.id_produto_selecionado_um.length > 0}">  
                  <div class="card">
                    <prods :functionClick="SelectedValueProdutoUm" :arrayAux="arrayAuxUm"></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novoupsell.id_produto_selecionado_um')}"
                  v-model="novoupsell.id_produto_selecionado_um"
                  v-validate="'required'"
                  type="hidden"
                  name="id_produto_selecionado_um"
                />
                <span
                  v-show="errors.has('novoupsell.id_produto_selecionado_um')"
                  class="invalid-feedback"
                >{{ errors.first('novoupsell.id_produto_selecionado_um') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Oferecer o produto... *</label>
                <button
                  type="button"
                  id="buttonProdutoDois"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('novoupsell.id_produto_selecionado_dois'), 'opcaoSelecionada': novoupsell.id_produto_selecionado_dois > 0, 'opcaoDeselecionada': novoupsell.id_produto_selecionado_dois ==0} "
                  v-on:click="collapse('#collapseExampleDois', '#collapseExampleDois', '#buttonProdutoDois')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div class="collapse" id="collapseExampleDois" :class="{'show': novoupsell.id_produto_selecionado_dois.length > 0}">
                  <div class="card">
                    <prods :functionClick="SelectedValueProdutoDois" :arrayAux="arrayAuxDois"></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novoupsell.id_produto_selecionado_dois')}"
                  v-model="novoupsell.id_produto_selecionado_dois"
                  v-validate="'required'"
                  type="hidden"
                  name="id_produto_selecionado_dois"
                />
                <span
                  v-show="errors.has('novoupsell.id_produto_selecionado_dois')"
                  class="invalid-feedback"
                >{{ errors.first('novoupsell.id_produto_selecionado_dois') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Quando Oferecer *</label>
                <div class="row">
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': novoupsell.tipo_checkout == 1, 'opcaoDeselecionada': novoupsell.tipo_checkout !==1} "
                    v-on:click="selecionaTipoCheckout(1)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-3"
                  >
                    <span class="fa fa-credit-card">
                      <span class="ml-1"></span> Checkout
                    </span>
                    <p>
                      <small>Antes da compra</small>
                    </p>
                  </button>
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': novoupsell.tipo_checkout == 2, 'opcaoDeselecionada': novoupsell.tipo_checkout !==2} "
                    v-on:click="selecionaTipoCheckout(2)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-4"
                  >
                    <span class="fa fa-check-circle">
                      <span class="ml-1"></span> Na Finalização
                    </span>
                    <p>
                      <small>Depois da compra</small>
                    </p>
                  </button>

                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': novoupsell.tipo_checkout == 3, 'opcaoDeselecionada': novoupsell.tipo_checkout !==3} "
                    v-on:click="selecionaTipoCheckout(3)"
                    class="btn btn-secondary btn-lg col-md-4 p-0 pl-0 pd-0 pt-0 pb-0 ml-4"
                  >
                    <span class="fa fa-bullhorn">
                      <span class="ml-1"></span> Por E-mail e WhatsApp
                    </span>
                    <p>
                      <small>5 min depois da compra</small>
                    </p>
                  </button>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novoupsell.tipo_checkout')}"
                  v-model="novoupsell.tipo_checkout"
                  v-validate="'required'"
                  type="hidden"
                  name="tipo_checkout"
                />
                <span
                  v-show="errors.has('novoupsell.tipo_checkout')"
                  class="invalid-feedback"
                >{{ errors.first('novoupsell.tipo_checkout') }}</span>
              </div>

              <div class="form-group" v-show="novoupsell.tipo_checkout == 3">
                <label class="col-form-label">Assunto do E-mail *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novoupsell.assunto_email')}"
                  v-model="novoupsell.assunto_email"
                  v-validate="'required'"
                  type="text"
                  name="assunto_email"
                />
                <span
                  v-show="errors.has('novoupsell.mensagem_sms')"
                  class="invalid-feedback"
                >{{ errors.first('novoupsell.mensagem_sms') }}</span>
              </div>
              <div class="form-group" v-show="novoupsell.tipo_checkout == 3">
                <label class="col-form-label">Texto da Mensagem WhatsApp *</label>
                <textarea
                  :class="{'form-control':true, 'is-invalid': errors.has('novoupsell.mensagem_sms')}"
                  v-model="novoupsell.mensagem_sms"
                  v-validate="'required'"
                  type="text"
                  name="mensagem_sms"
                ></textarea>
                <span
                  v-show="errors.has('novoupsell.mensagem_sms')"
                  class="invalid-feedback"
                >{{ errors.first('novoupsell.mensagem_sms') }}</span>
              </div>
              <div class="required">* Required fields</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                <div class="float-left">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      :class="{'custom-control-input':true, 'is-invalid': errors.has('novoupsell.status')}"
                      v-model="novoupsell.status"
                      v-validate="'required'"
                      checked
                      name="status"
                      id="status"
                    />
                    <label class="custom-control-label" for="status">Ativo</label>
                    <span
                      v-show="errors.has('novoupsell.status')"
                      class="invalid-feedback"
                    >{{ errors.first('novoupsell.status') }}</span>
                  </div>
                </div>
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
import API_MKT from "../../api/marketingAPI";
import Hashids from "hashids";

// Tag inputs
Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    if (this.$route.params.id != undefined) {
      this.upSellID = this.$route.params.id;
      this.upSellIDString = await this.getDeCripto(this.upSellID);
      this.getUpSellByID(this.upSellIDString[0]);
    } else {
      this.checkIfLogged();
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
    Prods
  },
  data() {
    return {
      arrayAuxUm: [],
      arrayAuxDois: [],
      upSellIDString: "",
      upSellID: "",
      novoupsell: {
        nome: "",
        status: 1,
        id_produto_selecionado_um: 0,
        id_produto_selecionado_dois: 0,
        tipo_checkout: 0,
        id_usuario: 0,
        quantidade: 1,
        preco: "",
        assunto_email: "Re: {first_name}, você foi selecionado(a)!",
        mensagem_sms:
          "{first_name}, você foi selecionado(a) para ganhar uma SUPER OFERTA! Confira:"
      },
      buttonPressed: 0,
      buttonPressedDois: 0,
      vueSelectMultipleValue: "",
      titulo_produto_selecionado_um: "",
      lhtml: "Clique aqui para selecionar um produto"
    };
  },
  methods: {
    validateBeforeSubmit(scope) {
      var self = this;
      this.$validator
        .validateAll(scope)
        .then(result => {
          if (result) {
            if (this.novoupsell.id_produto_selecionado_um < 1) {
              this.errors.add({
                scope: scope,
                field: "id_produto_selecionado_um",
                msg: "Escolha um produto"
              });
              return;
            } else if (this.novoupsell.id_produto_selecionado_dois < 1) {
              this.errors.add({
                scope: scope,
                field: "id_produto_selecionado_dois",
                msg: "Escolha um produto"
              });
              return;
            } else if (this.novoupsell.tipo_checkout < 1) {
              this.errors.add({
                scope: scope,
                field: "tipo_checkout",
                msg: "Escolha quando oferecer o produto"
              });
              return;
            }
            
            self.salvarUpSell();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    salvarUpSell() {
      API_NOTIFICATION.ShowLoading();
      API_MKT.SalvarUpSell(this.novoupsell)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "UpSell Criado com sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/marketing/upsell");
          }, 1500);
        })
        .catch(error => {
          console.log("Erro ao salvar o upsell", error);
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
    getDeCripto(crypted) {
      return new Promise(async (resolve, reject) => {
        try {
          const hashids = new Hashids("", 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
          var LHash = hashids.decode(crypted);
          resolve(LHash);
        } catch (error) {
          API_NOTIFICATION.showNotificationW(
            "Oops!",
            "Parâmetros Inválidos na URL",
            "error"
          );
          reject(error);
        }
      });
    },
    getUpSellByID(id) {
      API_NOTIFICATION.ShowLoading();
      API_MKT.GetUpSellsByID(id)
        .then(res => {
          this.novoupsell = res.data;
          
          this.novoupsell.id_produto_selecionado_um = this.novoupsell.id_produto_from;
          this.novoupsell.id_produto_selecionado_dois = this.novoupsell.id_produto_to;
          this.arrayAuxUm.push({
            id_thuor: this.novoupsell.id_produto_selecionado_um
          });
          this.arrayAuxDois.push({
            id_thuor: this.novoupsell.id_produto_selecionado_dois
          });

          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao pegar o pixel", error);
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
    SelectedValueProdutoUm(id, titulo, image) {
      var LDiv =
        '<div class="data padding1010 cursorP"><img style="border-radius:50%!important; padding-top: 0px!important;    height: 47px!important;    padding: 0px!important;    width: 50px!important;    margin-left: 12px;" class="col-md-2 mb-0 avatar float-left pull-left text-left mt-2" src="' +
        image +
        '" />  <p class="col-md-8 mb-0 dataPedido mt-2 pull-left float-left" style="top: 15px!important; text-align:left!important">' +
        titulo +
        "</p></div>";
      this.novoupsell.id_produto_selecionado_um = id;
      const el = document.getElementById("buttonProdutoUm");
      el.innerHTML = LDiv;
      this.collapse("#collapseExample", "#collapseExample", "#buttonProdutoUm");
    },
    SelectedValueProdutoDois(id, titulo, image) {
      var LDiv =
        '<div class="data padding1010 cursorP"><img style="border-radius:50%!important; padding-top: 0px!important;    height: 47px!important;    padding: 0px!important;    width: 50px!important;    margin-left: 12px;" class="col-md-2 mb-0 avatar float-left pull-left text-left mt-2" src="' +
        image +
        '" />  <p class="col-md-8 mb-0 dataPedido mt-2 pull-left float-left" style="top: 15px!important; text-align:left!important">' +
        titulo +
        "</p></div>";
      this.novoupsell.id_produto_selecionado_dois = id;
      const el = document.getElementById("buttonProdutoDois");
      el.innerHTML = LDiv;
      this.collapse(
        "#collapseExampleDois",
        "#collapseExampleDois",
        "#buttonProdutoDois"
      );
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },
    selecionaTipoCheckout(id) {
      this.novoupsell.tipo_checkout = id;
    }
  }
};
</script>
