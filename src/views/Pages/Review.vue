<style scoped>
.card-flat {
  margin-top: 80px !important;
}
.bg-dark {
  background-color: #23b7e5 !important;
}
.footerText {
  font-size: 12px !important;
}
.custom-file-label::after {
  content: "Procurar" !important;
  height: 100% !important;
}
.cursorP {
  cursor: pointer !important;
}
.starFulFill {
  color: gold;
}
.starNotFulFill {
  color: white;
}
</style>
<template>
  <!-- Blog Content-->
  <div class="col-md-12 mt-5">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-xl-3 ml-1 card card-default">
        <a href="#">
          <img class="img-fluid" src="img/bg1.jpg" alt="demo" />
        </a>
        <div class="card-body">
          <p class="d-flex">
            <span>
              <small class="mr-1">
                <a class="ml-1" href="#">
                  Erica Castro
                  <span class="ml-2 fa fa-check-circle"></span>
                </a>
              </small>
            </span>
          </p>
          <h4>
            <a href="#">
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="far fa-star starFulFill"></span>
              <span class="far fa-star starFulFill"></span>
              <span class="far fa-star starFulFill"></span>
            </a>
          </h4>
          <p>Amei! Chegou com 14 dias!</p>
        </div>
      </div>
      <div class="col-xl-3 ml-1 card card-default">
        <a href="#">
          <img class="img-fluid" src="img/bg1.jpg" alt="demo" />
        </a>
        <div class="card-body">
          <p class="d-flex">
            <span>
              <small class="mr-1">
                <a class="ml-1" href="#">
                  Erica Castro
                  <span class="ml-2 fa fa-check-circle"></span>
                </a>
              </small>
            </span>
          </p>
          <h4>
            <a href="#">
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="far fa-star starFulFill"></span>
            </a>
          </h4>
          <p>Amei! Chegou com 14 dias!</p>
        </div>
      </div>
      <div class="col-xl-3 ml-1 card card-default">
        <a href="#">
          <img class="img-fluid" src="img/bg1.jpg" alt="demo" />
        </a>
        <div class="card-body">
          <p class="d-flex">
            <span>
              <small class="mr-1">
                <a class="ml-1" href="#">
                  Erica Castro
                  <span class="ml-2 fa fa-check-circle"></span>
                </a>
              </small>
            </span>
          </p>
          <h4>
            <a href="#">
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
              <span class="fa fa-star starFulFill"></span>
            </a>
          </h4>
          <p>Amei! Chegou com 14 dias!</p>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-3 mr-0 pr-0 pl-0"></div>
      <div class="col-xl-6 ml-0 mr-0 pr-0 pl-0">
        <form @submit.prevent="validateBeforeSubmit('review')" data-vv-scope="review">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Deixe um comentário sobre o produto {{produto}}</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Deseja enviar uma imagem?</label>
                <div class="ml-0 mr-0 p-0 col-xl-10 cursorP">
                  <!-- Styled -->
                  <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    accept="image/jpeg, image/png, image/gif"
                    placeholder="Escolha uma imagem..."
                    class="ml-0 mr-0"
                  ></b-form-file>
                  <div
                    v-show="file && file.name.length > 0"
                    class="mt-3"
                  >Arquivo selecionado: {{file && file.name}}</div>
                </div>
                <span
                  v-show="errors.has('review.imagem')"
                  class="invalid-feedback"
                >{{ errors.first('review.imagem') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">O que você achou do produto? *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('review.titulo')}"
                  v-model="review.titulo"
                  v-validate="'required'"
                  type="text"
                  name="titulo"
                  placeholder="Ex: Muito bom!"
                />
                <span
                  v-show="errors.has('review.titulo')"
                  class="invalid-feedback"
                >{{ errors.first('review.titulo') }}</span>
              </div>
              <div class="form-group">
                <label class="col-form-label">Descreva sua avaliação</label>
                <textarea
                  :class="{'form-control':true, 'is-invalid': errors.has('review.avaliacao')}"
                  v-model="review.avaliacao"
                  type="text"
                  name="avaliacao"
                  placeholder="Ex: Chegou com 20 dias. Tem qualidade."
                ></textarea>
                <span
                  v-show="errors.has('review.avaliacao')"
                  class="invalid-feedback"
                >{{ errors.first('review.avaliacao') }}</span>
              </div>
              <div class="required">* Campos Obrigatórios</div>
            </div>

            <div class="card-footer">
              <div class="clearfix">
                <div class="float-left"></div>
                <div class="float-right">
                  <button class="btn btn-primary" type="submit">Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->
        </form>
      </div>
      <div class="col-md-3 mr-0 pr-0 pl-0"></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { Validator } from "vee-validate";
import pt from "vee-validate/dist/locale/pt_BR";
import API_LOGIN from "../../api/loginAPI";
import API_NOTIFICATION from "../../api/notification";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    if (this.$route.params.id != undefined) {
      this.token = this.$route.params.id;
    }
  },
  data() {
    return {
      produto_id: 0,
      produto: "",
      file: "",
      review: {
        titulo: "",
        mensagem: ""
      }
    };
  },
  mounted() {
    this.$validator.localize("pt", {
      messages: {
        required: field => "* Este campo é obrigatório."
      },
      attributes: {}
    });
  },
  methods: {
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          if (this.redefinir.senha !== this.redefinir.confirma_senha) {
            this.errors.add({
              scope: scope,
              field: "confirma_senha",
              msg: "Senha e Confirma Senha devem ter valores iguais."
            });
            return;
          }
          this.solicitaUpdateSenha();
          console.log("Form Submitted!");
          console.log(`Email: ${this.redefinir.email}`);
          return;
        }
        console.log("Correct them errors!");
      });
    },
    solicitaUpdateSenha() {
      API_LOGIN.AlteraSenha(this.token, this.redefinir.senha)
        .then(resRedefine => {
          this.podeLogar = 1;
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Senha alterada. Clique em efetuar login para ser direcionado.",
            "success"
          );
        })
        .catch(error => {
          console.log(
            "Erro ao tentar enviar e-mail de redefinição de senha",
            error
          );
        });
    }
  }
};
</script>
