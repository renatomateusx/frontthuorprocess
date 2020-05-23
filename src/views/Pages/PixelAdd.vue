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
</style>
<template>
  <ContentWrapper>
    <div class="content-heading" v-show="pixel.nome_pixel.length < 2">
      <span class="fa fa-plus">
        <span class="ml-2"></span>
      </span>Novo Pixel
    </div>
    <div class="content-heading" v-show="pixel.nome_pixel.length > 2">
      <span class="fa fa-edit">
        <span class="ml-2"></span>
      </span>Pixel: {{pixel.nome_pixel}}
    </div>
    <small v-show="pixel.nome_pixel.length < 2">Preencha os campos abaixo para adicionar o Pixel.</small>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="validateBeforeSubmit('pixel')" data-vv-scope="pixel">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Nome do Pixel *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.nome_pixel')}"
                  v-model="pixel.nome_pixel"
                  v-validate="'required'"
                  type="text"
                  name="nome"
                />
                <span
                  v-show="errors.has('pixel.nome_pixel')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.nome_pixel') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Fonte do Pixel *</label>
                <div class="row">
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': pixel.tipo == 1, 'opcaoDeselecionada': pixel.tipo !==1} "
                    v-on:click="selecionaTipoServico(1)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-3"
                  >
                    <span>
                      <img :src="getTipoPixel(1)" class="imgTipoServico mt-2" />
                    </span>
                    <p>
                      <small>Pixel do Facebook</small>
                    </p>
                  </button>
                  <button
                    type="button"
                    id="buttonCheckout"
                    :class="{'opcaoSelecionada': pixel.tipo == 2, 'opcaoDeselecionada': pixel.tipo !==2} "
                    v-on:click="selecionaTipoServico(2)"
                    class="btn btn-secondary btn-lg col-md-3 p-0 pl-0 pd-0 pt-0 pb-0 ml-4"
                  >
                    <span>
                      <img :src="getTipoPixel(2)" class="imgTipoServico mt-2" />
                    </span>
                    <p>
                      <small>Pixel do Google</small>
                    </p>
                  </button>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.tipo')}"
                  v-model="pixel.tipo"
                  v-validate="'required'"
                  type="hidden"
                  name="tipo"
                />
                <span
                  v-show="errors.has('pixel.tipo')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.tipo') }}</span>
              </div>

              <div class="form-group" v-show="pixel.tipo == 1">
                <label class="col-form-label">ID do Pixel *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.facebook_id_pixel')}"
                  v-model="pixel.facebook_id_pixel"
                  v-validate="{'required': pixel.tipo == 1}"
                  type="text"
                  name="facebook_id_pixel"
                />
                <span
                  v-show="errors.has('pixel.facebook_id_pixel')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.facebook_id_pixel') }}</span>
              </div>
              <div class="form-group" v-show="pixel.tipo == 2">
                <label class="col-form-label">ID do Analytics *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.google_analytics_id')}"
                  v-model="pixel.google_analytics_id"
                  v-validate="{'required': pixel.tipo == 2}"
                  type="text"
                  name="google_analytics_id"
                />
                <span
                  v-show="errors.has('pixel.google_analytics_id')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.google_analytics_id') }}</span>
              </div>
              <div class="form-group" v-show="pixel.tipo == 2">
                <label class="col-form-label">ID de Conversão *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.google_id_conversao')}"
                  v-model="pixel.google_id_conversao"
                  v-validate="{'required': pixel.tipo == 2}"
                  type="text"
                  name="google_id_conversao"
                />
                <span
                  v-show="errors.has('pixel.google_id_conversao')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.google_id_conversao') }}</span>
              </div>
              <div class="form-group" v-show="pixel.tipo == 2">
                <label class="col-form-label">Rótulo de Conversão *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.google_rotulo_conversao')}"
                  v-model="pixel.google_rotulo_conversao"
                  v-validate="{'required': pixel.tipo == 2}"
                  type="text"
                  name="google_rotulo_conversao"
                />
                <span
                  v-show="errors.has('pixel.google_rotulo_conversao')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.google_rotulo_conversao') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Marca Boleto? *</label>
                <select
                  id="marca_boleto"
                  name="marca_boleto"
                  class="form-control"
                  v-model="pixel.marca_boleto"
                >
                  <option selected value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
                <span
                  v-show="errors.has('pixel.marca_boleto')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.marca_boleto') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Pixel exclusivo para o produto... *</label>
                <button
                  type="button"
                  id="buttonProdutoUm"
                  :class="{'custom-control-input':false, 'is-invalid': errors.has('pixel.id_produto_selecionado_um'), 'opcaoSelecionada': pixel.array_produtos_id.length > 0, 'opcaoDeselecionada': pixel.array_produtos_id.length == 0} "
                  v-on:click="collapse('#collapseExample', '#collapseExample', '#buttonProdutoUm')"
                  class="btn btn-secondary btn-lg col-md-12 p-0 pl-0 pd-0 pt-0 pb-0"
                >{{lhtml}}</button>

                <div
                  class="collapse"
                  id="collapseExample"
                  :class="{'show':pixel.array_produtos_id.length > 0}"
                >
                  <div class="card">
                    <prods :functionClick="selectedProduct" :arrayAux="pixel.array_produtos_id"></prods>
                  </div>
                </div>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('pixel.array_produtos_id')}"
                  v-model="pixel.array_produtos_id"
                  v-validate="{'required': false}"
                  type="hidden"
                  name="array_produtos_id"
                />
                <span
                  v-show="errors.has('pixel.id_produto_selecionado_um')"
                  class="invalid-feedback"
                >{{ errors.first('pixel.id_produto_selecionado_um') }}</span>
              </div>
              <div class="required">* Required fields</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                <div class="float-left">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      :class="{'custom-control-input':true, 'is-invalid': errors.has('pixel.status')}"
                      v-model="pixel.status"
                      v-validate="'required'"
                      checked
                      name="status"
                      id="status"
                    />
                    <label class="custom-control-label" for="status">Ativo</label>
                    <span
                      v-show="errors.has('pixel.status')"
                      class="invalid-feedback"
                    >{{ errors.first('pixel.status') }}</span>
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
import Multiselect from "vue-multiselect";
import API_PRODUTOS from "../../api/produtosAPI";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import Prods from "../../components/Tables/TableProdutos";
import API_PIXEL from "../../api/pixelsAPI";
import Hashids from "hashids";
// Tag inputs
Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    if (this.$route.params.id != undefined) {
      this.pixelID = this.$route.params.id;
      this.pixelString = await this.getDeCripto(this.pixelID);
      console.log(this.pixelString);
      this.getPixelByID(this.pixelString[0]);
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
    Multiselect,
    Prods
  },
  data() {
    return {
      pixelID: '',
      pixelString: '',
      arrayAux: [],
     
      pixel: {
        id_usuario: 0,
        nome_pixel: "",
        facebook_id_pixel: "",
        marca_boleto: 1,
        google_id_conversao: "",
        google_rotulo_conversao: "",
        status: 1,
        array_produtos_id: [],
        tipo: 0,
        google_analytics_id: ""
      },
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
            self.salvarPixel();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    salvarPixel() {
      API_NOTIFICATION.ShowLoading();
      if (this.pixel.array_produtos_id.length > 0) {
        this.pixel.array_produtos_id = JSON.stringify(
          this.pixel.array_produtos_id
        );
      }
      API_PIXEL.SalvarPixel(this.pixel)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Pixel Adicionado com Sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/marketing/pixels");
          }, 1500);
        })
        .catch(error => {
          console.log("Erro ao salvar o pixel", error);
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
      if (this.pixel.array_produtos_id.length > 0) {
        const LFind = this.pixel.array_produtos_id.find(x => x.id_thuor == id);
        //console.log("find", LFind);
        if (LFind != undefined) {
          this.pixel.array_produtos_id.forEach((obj, i) => {
            if (id == obj.id_thuor) {
              this.pixel.array_produtos_id.splice(i, 1);
            }
          });
          //console.log("Updated", this.pixel.array_produtos_id);
           this.arrayAux = this.pixel.array_produtos_id;
          return;
        } else if (LFind == undefined) {
          this.pixel.array_produtos_id.push({ id_thuor: id });
           this.arrayAux = this.pixel.array_produtos_id;
          //console.log("Pushed", this.pixel.array_produtos_id);
          return;
        }
      } else {
        this.pixel.array_produtos_id.push({ id_thuor: id });
         this.arrayAux = this.pixel.array_produtos_id;
        //console.log("Pushed", this.pixel.array_produtos_id);
        return;
      }
     
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },
    selecionaTipoServico(id) {
      this.pixel.tipo = id;
    },
    getTipoPixel(id) {
      if (id == 1) return "https://github.bubbstore.com/svg/facebook.svg";
      if (id == 2) return "https://github.bubbstore.com/svg/google_ads.svg";
    },
    getPixelByID(id) {
      API_NOTIFICATION.ShowLoading();
      API_PIXEL.GetPixelByID(id)
        .then(res => {
          console.log(res.data);
          this.pixel = res.data;
          if (
            this.pixel.array_produtos_id != null &&
            this.pixel.array_produtos_id.length > 2
          ) {
            this.pixel.array_produtos_id = JSON.parse(
              this.pixel.array_produtos_id
            );
          } else {
            this.pixel.array_produtos_id = [];
          }
          this.arrayAux = this.pixel.array_produtos_id;
          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao pegar o pixel", error);
        });
    }
  }
};
</script>
