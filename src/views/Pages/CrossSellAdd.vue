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
    <div class="content-heading" v-show="this.novocrosssell.nome.length < 2">
      <span class="fa fa-plus">
        <span class="ml-2"></span>
      </span>Novo CrossSell
    </div>
    <div class="content-heading" v-show="this.novocrosssell.nome.length > 1">
      <span class="fa fa-edit">
        <span class="ml-2"></span>
      </span>
      UpSell: {{this.novocrosssell.nome}}
    </div>
    <small
      v-show="this.novocrosssell.nome.length > 1"
    >Preencha os campos abaixo para criar o UpSell.</small>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="validateBeforeSubmit('novocrosssell')" data-vv-scope="novocrosssell">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Nome do CrossSell *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novocrosssell.nome')}"
                  v-model="novocrosssell.nome"
                  v-validate="'required'"
                  type="text"
                  name="nome"
                />
                <span
                  v-show="errors.has('novocrosssell.nome')"
                  class="invalid-feedback"
                >{{ errors.first('novocrosssell.nome') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Ao Visualizar o produto... *</label>
                <button
                  type="button"
                  id="buttonProdutoUm"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('novocrosssell.id_produto_selecionado_um'), 'opcaoSelecionada': novocrosssell.id_produto_selecionado_um > 0, 'opcaoDeselecionada': novocrosssell.id_produto_selecionado_um == 0} "
                  v-on:click="collapse('#collapseExample', '#collapseExample', '#buttonProdutoUm')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div
                  class="collapse"
                  id="collapseExample"
                  :class="{'show': novocrosssell.id_produto_selecionado_um.length > 0}"
                >
                  <div class="card">
                    <prods :functionClick="SelectedValueProdutoUm" :arrayAux="arrayAuxUm"></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novocrosssell.id_produto_selecionado_um')}"
                  v-model="novocrosssell.id_produto_selecionado_um"
                  v-validate="'required'"
                  type="hidden"
                  name="id_produto_selecionado_um"
                />
                <span
                  v-show="errors.has('novocrosssell.id_produto_selecionado_um')"
                  class="invalid-feedback"
                >{{ errors.first('novocrosssell.id_produto_selecionado_um') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Oferecer... *</label>
                <button
                  type="button"
                  id="buttonProdutoDois"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('novocrosssell.id_produto_selecionado_dois'), 'opcaoSelecionada': novocrosssell.id_produto_selecionado_dois.length > 0, 'opcaoDeselecionada': novocrosssell.id_produto_selecionado_dois.length ==0} "
                  v-on:click="collapse('#collapseExampleDois', '#collapseExampleDois', '#buttonProdutoDois')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div
                  class="collapse"
                  id="collapseExampleDois"
                  :class="{'show': novocrosssell.id_produto_selecionado_dois.length > 0}"
                >
                  <div class="card">
                    <prods
                      :functionClick="SelectedValueProdutoDois"
                      :arrayAux="arrayAuxDois"
                      :key="componentProdDois"
                    ></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novocrosssell.id_produto_selecionado_dois')}"
                  v-model="novocrosssell.id_produto_selecionado_dois"
                  v-validate="'required'"
                  type="hidden"
                  name="id_produto_selecionado_dois"
                />
                <span
                  v-show="errors.has('novocrosssell.id_produto_selecionado_dois')"
                  class="invalid-feedback"
                >{{ errors.first('novocrosssell.id_produto_selecionado_dois') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Onde Oferecer *</label>
                <div class="row">
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': novocrosssell.quando_oferecer == 1, 'opcaoDeselecionada': novocrosssell.quando_oferecer !==1} "
                    v-on:click="selecionaTipoCheckout(1)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-3"
                  >
                    <span class="fa fa-eye">
                      <span class="ml-1"></span> No Produto
                    </span>
                    <p>
                      <small>Na Página do Produto</small>
                    </p>
                  </button>
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': novocrosssell.quando_oferecer == 2, 'opcaoDeselecionada': novocrosssell.quando_oferecer !==2} "
                    v-on:click="selecionaTipoCheckout(2)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-4"
                  >
                    <span class="fa fa-shopping-cart">
                      <span class="ml-1"></span> No Carrinho
                    </span>
                    <p>
                      <small>Na Página do Carrinho</small>
                      <br />
                      <small>Não Rastreado Por Face ou Google</small>
                    </p>
                  </button>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('novocrosssell.quando_oferecer')}"
                  v-model="novocrosssell.quando_oferecer"
                  v-validate="'required'"
                  type="hidden"
                  name="quando_oferecer"
                />
                <span
                  v-show="errors.has('novocrosssell.quando_oferecer')"
                  class="invalid-feedback"
                >{{ errors.first('novocrosssell.quando_oferecer') }}</span>
              </div>
              
              <div class="required">* Campos Obrigatórios</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                <div class="float-left">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      :class="{'custom-control-input':true, 'is-invalid': errors.has('novocrosssell.status')}"
                      v-model="novocrosssell.status"
                      v-validate="'required'"
                      checked
                      name="status"
                      id="status"
                    />
                    <label class="custom-control-label" for="status">Ativo</label>
                    <span
                      v-show="errors.has('novocrosssell.status')"
                      class="invalid-feedback"
                    >{{ errors.first('novocrosssell.status') }}</span>
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
import UTILIS_API from "../../api/utilisAPI";
// Tag inputs
Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: "pt",
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    if (this.$route.params.id != undefined) {
      this.upSellID = this.$route.params.id;
      this.upSellIDString = await this.getDeCripto(this.upSellID);
      this.getCrossSellByID(this.upSellIDString[0]);
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
      componentProdDois: 0,
      arrayAuxUm: [],
      arrayAuxDois: [],
      upSellIDString: "",
      upSellID: "",
      novocrosssell: {
        nome: "",
        status: 1,
        id_produto_selecionado_um: 0,
        id_produto_selecionado_dois: [],
        quando_oferecer: 0,
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
            if (this.novocrosssell.id_produto_selecionado_um < 1) {
              this.errors.add({
                scope: scope,
                field: "id_produto_selecionado_um",
                msg: "Escolha um produto"
              });
              return;
            } else if (
              this.novocrosssell.id_produto_selecionado_dois.length < 1
            ) {
              this.errors.add({
                scope: scope,
                field: "id_produto_selecionado_dois",
                msg: "Escolha um produto"
              });
              return;
            } else if (this.novocrosssell.quando_oferecer < 1) {
              this.errors.add({
                scope: scope,
                field: "quando_oferecer",
                msg: "Escolha Onde oferecer o produto"
              });
              return;
            }

            self.salvarCrossSell();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    salvarCrossSell() {
      API_NOTIFICATION.ShowLoading();
      this.novocrosssell.id_produto_selecionado_dois = this.novocrosssell.id_produto_selecionado_dois.toString();
      API_MKT.SalvarCrossSell(this.novocrosssell)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "CrossSell Criado com sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/marketing/crosssell");
          }, 1500);
        })
        .catch(error => {
          console.log("Erro ao salvar o CrossSell", error);
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
              var LImages = retProd.data[0].json_dados_produto;
              //console.log(LImages);
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
    getCrossSellByID(id) {
      API_NOTIFICATION.ShowLoading();
      API_MKT.GetCrossSellsByID(id)
        .then(res => {
          this.novocrosssell = res.data;

          this.novocrosssell.id_produto_selecionado_um = this.novocrosssell.id_produto_from;
          this.novocrosssell.id_produto_selecionado_dois = this.novocrosssell.id_produto_to.split(
            ","
          );
          var larrayAuxy=[];
          this.novocrosssell.id_produto_selecionado_dois.forEach((objP, i) => {
            const Lpo = larrayAuxy.includes(objP);
            if(!Lpo) larrayAuxy.push(objP);
          });
          this.novocrosssell.id_produto_selecionado_dois = larrayAuxy;
          this.arrayAuxUm.push({
            id_thuor: this.novocrosssell.id_produto_selecionado_um
          });
          this.novocrosssell.id_produto_selecionado_dois.forEach((objP, i) => {
            const LFind = this.arrayAuxDois.findIndex(x => x.id_thuor == id);
            if (LFind > -1) {
              this.arrayAuxDois.splice(LFind, 1);
            } else {
              this.arrayAuxDois.push({ id_thuor: objP });
            }
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
      this.novocrosssell.id_produto_selecionado_um = id;
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
      
      const LFind = this.arrayAuxDois.findIndex(x => x.id_thuor == id);
      if (LFind > -1) {
        this.arrayAuxDois.splice(LFind, 1);
        this.novocrosssell.id_produto_selecionado_dois.splice(LFind, 1);
      } else {
        this.arrayAuxDois.push({ id_thuor: id });
        this.novocrosssell.id_produto_selecionado_dois.push(id);
      }
      this.arrayAuxDois.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );
      this.componentProdDois += 1;
      const el = document.getElementById("buttonProdutoDois");
      el.innerHTML = LDiv;
      // this.collapse(
      //   "#collapseExampleDois",
      //   "#collapseExampleDois",
      //   "#buttonProdutoDois"
      // );
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },
    selecionaTipoCheckout(id) {
      this.novocrosssell.quando_oferecer = id;
    }
  }
};
</script>
