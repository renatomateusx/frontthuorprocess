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
    <div class="content-heading" v-show="this.popup.titulo.length < 2">
      <span class="fa-2x mr-2 far fa-window-restore">
        <span class="ml-2"></span>
      </span>PopUp
    </div>
    <div class="content-heading" v-show="this.popup.titulo.length > 1">
      <span class="fa fa-edit">
        <span class="ml-2"></span>
      </span>
      UpSell: {{this.popup.titulo}}
    </div>
    <small v-show="this.popup.titulo.length > 1">Preencha os campos abaixo para criar o PopUp.</small>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="validateBeforeSubmit('popup')" data-vv-scope="popup">
          <!-- START card-->
          <div class="card card-default">
            <div class="float-right pull-right mb-3">
              <button
                class="btn btn-danger btn-lg float-right pull-right mr-3 mb-0 mt-2"
                type="button"
                v-on:click="instalarAppThourPopUp()"
              >
                <span class="fas fa-crosshairs"></span> Instalar App
              </button>
            </div>
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>

            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Título do PopUp *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('popup.titulo')}"
                  v-model="popup.titulo"
                  v-validate="'required'"
                  type="text"
                  name="titulo"
                />
                <span
                  v-show="errors.has('popup.titulo')"
                  class="invalid-feedback"
                >{{ errors.first('popup.titulo') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Oferecer o produto... *</label>
                <button
                  type="button"
                  id="buttonProduto"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('popup.id_produto_selecionado'), 'opcaoSelecionada': popup.id_produto_selecionado > 0, 'opcaoDeselecionada': popup.id_produto_selecionado == 0} "
                  v-on:click="collapse('#collapseExample', '#collapseExample', '#buttonProduto')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div
                  class="collapse"
                  id="collapseExample"
                  :class="{'show': popup.id_produto_selecionado.length > 0}"
                >
                  <div class="card">
                    <prods
                      :functionClick="SelectedValueProdutoUm"
                      :arrayAux="arrayAuxUm"
                      :key="componentProdUm"
                    ></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('popup.id_produto_selecionado')}"
                  v-model="popup.id_produto_selecionado"
                  v-validate="'required'"
                  type="hidden"
                  name="id_produto_selecionado"
                />
                <span
                  v-show="errors.has('popup.id_produto_selecionado')"
                  class="invalid-feedback"
                >{{ errors.first('popup.id_produto_selecionado') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Mensagem Para O Visitante *</label>
                <quill-editor v-model="popup.texto" :options="quillEditorOptions" class="qlEditor" />
                <span
                  v-show="errors.has('popup.texto')"
                  class="invalid-feedback"
                >{{ errors.first('popup.texto') }}</span>
              </div>
              <div class="required">* Campos Obrigatórios</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                <div class="float-left">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      :class="{'custom-control-input':true, 'is-invalid': errors.has('popup.status')}"
                      v-model="popup.status"
                      v-validate="'required'"
                      checked
                      name="status"
                      id="status"
                    />
                    <label class="custom-control-label" for="status">Ativo</label>
                    <span
                      v-show="errors.has('popup.status')"
                      class="invalid-feedback"
                    >{{ errors.first('popup.status') }}</span>
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
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import API_APPS from "../../api/appsAPI";
import API_LOJA from "../../api/lojaAPI";
import constantes from "../../api/constantes";
import API_INTEGRACAO_SHOPIFY_APPS from "../../api/integracoesShopifyAPI";
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
    Prods,
    quillEditor
  },
  data() {
    return {
      componentProdUm: 0,
      app: 10,
      arrayAuxUm: [],
      upSellIDString: "",
      upSellID: "",
      popup: {
        titulo: "Ex: Você não pode sair sem ver esta oferta!",
        status: 1,
        texto:
          "Ex: Você foi selecionado(a) para ganhar uma SUPER OFERTA! Confira:",
        id_produto_selecionado: 0
      },
      buttonPressed: 0,
      buttonPressedDois: 0,
      vueSelectMultipleValue: "",
      titulo_produto_selecionado_um: "",
      lhtml: "Clique aqui para selecionar um produto",
      quillEditorOptions: {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }, { size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" }
            ],
            [{ direction: "rtl" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"]
          ]
        }
      }
    };
  },
  methods: {
    validateBeforeSubmit(scope) {
      var self = this;
      this.$validator
        .validateAll(scope)
        .then(result => {
          if (result) {
            if (this.popup.id_produto_selecionado < 1) {
              this.errors.add({
                scope: scope,
                field: "id_produto_selecionado",
                msg: "Escolha um produto"
              });
              return;
            } else if (this.popup.tipo_checkout < 1) {
              this.errors.add({
                scope: scope,
                field: "tipo_checkout",
                msg: "Escolha quando oferecer o produto"
              });
              return;
            }

            self.salvarAppPopUp();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    async pushProducts(product) {
      return new Promise(async (resolve, reject) => {
        try {
          API_PRODUTOS.GetProdutoByIDThuorUnique(product)
            .then(retorno => {
              resolve(retorno.data);
            })
            .catch(error => {
              console.log("Error ao pegar o Produto no Thuor.com", error);
            });
        } catch (error) {
          console.log("Erro ao pegar os dados do produto na API", error);
        }
      });
    },
    getLink(prod, dadosLoja) {
      console.log(prod);
      return new Promise((resolve, reject) => {
        if (dadosLoja.plataforma == constantes.PLATAFORMA_SHOPIFY) {
          const LLink =
            dadosLoja.url_loja + "/products/" + prod.json_dados_produto.handle;
          resolve(LLink);
        }
        resolve(0);
      });
    },
    async salvarAppPopUp() {
      API_NOTIFICATION.ShowLoading();
      const LDadosLoja = await API_LOJA.GetDadosLojaS();
      const LProd = await this.pushProducts(this.popup.id_produto_selecionado);
      const LImage = LProd.json_dados_produto.image.src;
      const LTituloProd = LProd.titulo_produto;
      const LPrecoAncora =
        LProd.json_dados_produto.variants[0].compare_at_price;
      const LPrecoAtual = LProd.json_dados_produto.variants[0].price;
      this.popup.app = 10;
      this.popup.id_usuario = LDadosLoja.data.id_usuario;
      this.popup.url_loja = LDadosLoja.data.url_loja;
      this.popup.propriedades = {
        titulo: this.popup.titulo,
        produto: this.popup.id_produto_selecionado,
        texto: this.popup.texto,
        image: LImage,
        titulo_produto: LTituloProd,
        preco_ancora: LPrecoAncora,
        preco_atual: LPrecoAtual,
        link: await this.getLink(LProd, LDadosLoja.data)
      };
      API_APPS.SaveIntegracaoApps(this.popup)
        .then(async res => {
          const LLoja = await API_LOJA.GetDadosLojaS();

          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Configuração Salva!! <br> Se Você Ainda Não Instalou o App na Sua Loja, Clique no Botão Vermelho Acima para Instalar.",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao salvar app", error);
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
              if (retProd.data.length > 0) {
                var LImages = retProd.data[0].json_dados_produto;
                //console.log(LImages);
                this.produtosList = retProd.data;
                this.options2 = this.produtosList;
                var self = this;
              }
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar produtos", error);
            });
          API_APPS.GetIntegracaoApps(this.app)
            .then(res => {
              if (res.data) {
                this.popup = res.data;
                this.popup.titulo = res.data.propriedades.titulo;
                this.popup.texto = res.data.propriedades.texto;
                this.popup.id_produto_selecionado =
                  res.data.propriedades.produto;
                this.popup.status = res.data.status;
                this.arrayAuxUm[0] = {
                  id_thuor: res.data.propriedades.produto
                };
              }
            })
            .catch(error => {
              console.log("Erro ao obter dados da api de número 10", error);
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
      console.log(id, titulo, image);
      var LDiv =
        '<div class="data padding1010 cursorP"><img style="border-radius:50%!important; padding-top: 0px!important;    height: 47px!important;    padding: 0px!important;    width: 50px!important;    margin-left: 12px;" class="col-md-2 mb-0 avatar float-left pull-left text-left mt-2" src="' +
        image +
        '" />  <p class="col-md-8 mb-0 dataPedido mt-2 pull-left float-left" style="top: 15px!important; text-align:left!important">' +
        titulo +
        "</p></div>";
      this.popup.id_produto_selecionado = id;
      const el = document.getElementById("buttonProduto");
      el.innerHTML = LDiv;
      this.arrayAuxUm[0] = { id_thuor: id };
      this.componentProdUm += 1;
      /*this.collapse("#collapseExample", "#collapseExample", "#buttonProduto");*/
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },
    selecionaTipoCheckout(id) {
      this.popup.tipo_checkout = id;
    },
    instalarAppThourPopUp() {
      API_NOTIFICATION.showNotificationConfirm(
        "Oops!",
        "Deseja Instalar App Thuor PopUp?",
        "question",
        () => {
          API_NOTIFICATION.ShowLoading();
          API_INTEGRACAO_SHOPIFY_APPS.InstalaAppThuorPopUpShopify()
            .then(res => {
              API_NOTIFICATION.showNotificationW(
                "Pronto",
                "Aplicativo Instalado com Sucesso! <br> Esteja a Vontade Para Configurar o PopUp Abaixo.",
                "success"
              );
            })
            .catch(error => {
              console.log("Erro ao tentar instalar o app thuor popup", error);
            });
        }
      );
    }
  }
};
</script>
