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
.ql-container .ql-editor p {
  min-height: 200px !important;
  height: 200px !important;
}
.qlEditor p {
  min-height: 200px !important;
}
div > p{
  min-height: 200px!important;
  height: 200px!important;
}
.ql-editor{
  height: 200px!important;
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
    <div class="content-heading" v-show="ajuda.id < 1">
      <span class="fa fa-plus">
        <span class="ml-2"></span>
      </span>Nova Ajuda
    </div>
     <div class="content-heading" v-show="ajuda.id > 0">
      <span class="fa fa-edit">
        <span class="ml-2"></span>
      </span>Ajuda: {{ajuda.titulo}}
    </div>
    <small  v-show="ajuda.id < 1">Preencha os campos abaixo para criar a 'Ajuda'.</small>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="validateBeforeSubmit('ajuda')" data-vv-scope="ajuda">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Título da Ajuda *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('ajuda.titulo')}"
                  v-model="ajuda.titulo"
                  placeholder="Ex: Como Enviar Mensagem"
                  v-validate="'required'"
                  type="text"
                  name="titulo"
                />
                <span
                  v-show="errors.has('ajuda.titulo')"
                  class="invalid-feedback"
                >{{ errors.first('ajuda.titulo') }}</span>
              </div>              
              
              <!-- <div class="form-group">
                
                <strong>Variáveis disponíveis para Carrinho abandonado:</strong>
                <br><br>
                <small><strong>{first_name}</strong> - primeiro nome do cliente</small><br>
                <small><strong>{merchant}</strong> - nome de sua loja</small><br>
                <small><strong>{products_list}</strong> - lista de produtos</small><br>
                <small><strong>{link}</strong> - link do carrinho</small><br>
                <small><strong>{barcode}</strong> - código de barras</small><br>
                <small><strong>{tracking_code}</strong> - código de rastreio</small><br>
              </div> -->
              <div class="form-group">
                <label class="col-form-label">Texto *</label>
                <quill-editor
                  v-model="ajuda.texto"
                  :options="quillEditorOptions"
                  class="qlEditor"
                />
                <span
                  v-show="errors.has('ajuda.texto')"
                  class="invalid-feedback"
                >{{ errors.first('ajuda.texto') }}</span>
              </div>
              
              <div class="required">* Campos Obrigatórios</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                
                <div class="float-left">
                <label class="s col-form-label">Status</label>
                <div class>
                  <label class="switch switch-lg">
                    <input
                      type="checkbox"
                      :checked="ajuda.status == 1"
                      v-model="ajuda.status"
                      :class="{'form-control':true, 'is-invalid': errors.has('ajuda.status')}"
                    />
                    <span class></span>
                  </label>
                </div>
                <span
                  v-show="errors.has('ajuda.status')"
                  class="invalid-feedback"
                >{{ errors.first('ajuda.status') }}</span>


                  
                  <!-- <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      :class="{'custom-control-input':true, 'is-invalid': errors.has('ajuda.status')}"
                      v-model="ajuda.status"
                      v-validate="'required'"
                      checked
                      name="status"
                      id="status"
                    />
                    <label class="custom-control-label" for="status">Ativo</label>
                    <span
                      v-show="errors.has('ajuda.status')"
                      class="invalid-feedback"
                    >{{ errors.first('ajuda.status') }}</span>
                  </div> -->
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

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { min, max, numeric } from "vee-validate/dist/rules.esm";
import { Validator } from "vee-validate";
import pt from "vee-validate/dist/locale/pt_BR";
import API_PRODUTOS from "../../api/produtosAPI";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import API_LOJA from "../../api/lojaAPI";
import API_ajuda from "../../api/ajudaAPI";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import Hashids from "hashids";
import UTILIS_API from "../../api/utilisAPI";
import API_AJUDA from '../../api/ajudaAPI';
// Tag inputs
Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: 'pt',
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    if (this.$route.params.id != undefined) {
      this.ajudaID = this.$route.params.id;
      this.getAjudaByID(this.ajudaID);
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
    quillEditor
  },
  data() {
    return {
      ajuda: {
        id: 0,
        status: 1,
        titulo: "Como ... ",
        texto:
          "Como ... é muito simples, veja."        
      },
      buttonPressed: 0,
      buttonPressedDois: 0,
      vueSelectMultipleValue: "",
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
    validateBeforeSubmit(scope) {
      var self = this;

      this.$validator
        .validateAll(scope)
        .then(result => {
          if (result) {
            this.ajuda.data = new Date();
            self.salvarAjuda();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    salvarAjuda() {
      API_NOTIFICATION.ShowLoading();
      API_AJUDA.SaveAjuda(this.ajuda)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Ajuda Salva com sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/admin/ajuda");
          }, 1500);
        })
        .catch(error => {
          console.log("Erro ao salvar a ajuda", error);
        });
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_LOJA.GetDadosLojaByIdUsuario(res.data.id)
            .then(resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              API_NOTIFICATION.HideLoading();
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
    getAjudaByID(id){
      API_NOTIFICATION.ShowLoading();
      API_AJUDA.GetAjudaByID(id)
        .then(res => {
          this.ajuda = res.data;
          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao salvar a ajuda", error);
        });
    }
  }
};
</script>
