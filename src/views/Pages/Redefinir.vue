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
</style>
<template>
  <div class="block-center mt-4 wd-xl">
    <!-- START card-->
    <div class="card card-flat">
      <div class="card-header text-center bg-dark">
        <a href="#">
          <img
            class="block-center rounded"
            src="img/logoThuor.png"
            width="85"
            height="34"
            alt="Thuor"
          />
        </a>
      </div>
      <div class="card-body">
        <p class="text-center py-2">Redefinir Senha</p>
        <form @submit.prevent="validateBeforeSubmit('redefinir')" data-vv-scope="redefinir">
          <p class="text-justify">Preencha os campos para redefinir sua senha.</p>
          <div class="form-group">
            <label class="text-muted" for="signupInputPassword1">Senha</label>
            <div class="input-group with-focus">
              <input
                ref="password"
                :class="{'form-control border-right-0':true, 'is-invalid': errors.has('redefinir.senha')}"
                v-model="redefinir.senha"
                v-validate="'required'"
                type="password"
                name="senha"
                placeholder="Senha"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-lock"></em>
                </span>
              </div>
              <span
                v-show="errors.has('redefinir.senha')"
                class="invalid-feedback"
              >{{ errors.first('redefinir.senha') }}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="text-muted" for="signupInputRePassword1">Confirmar Senha</label>
            <div class="input-group with-focus">
              <input
                :class="{'form-control border-right-0':true, 'is-invalid': errors.has('redefinir.confirma_senha')}"
                v-model="redefinir.confirma_senha"
                v-validate="'required'"
                type="password"
                name="confirma_senha"
                placeholder="Confirmar Senha"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-lock"></em>
                </span>
              </div>
              <span
                v-show="errors.has('redefinir.confirma_senha')"
                class="invalid-feedback"
              >{{ errors.first('redefinir.confirma_senha') }}</span>
            </div>
          </div>

          <button class="btn btn-danger btn-block" type="submit">
            Enviar
            <span class="ml-2 fa fa-paper-plane"></span>
          </button>
          <router-link class="text-center btn btn-link row" to="/login" v-show="podeLogar == 1">
            <small class="text-center">Efetuar Login</small>
          </router-link>
        </form>
      </div>
    </div>
    <!-- END card-->
    <div class="p-3 text-center footerText">
      <br />
      <span>
        Thuor
        <span class="mr-2">&copy;</span>- Integrando Ideias e Negócios Desde 2009
      </span>
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
      podeLogar: 0,
      token: "",
      redefinir: {
        senha: "",
        confirma_senha: ""
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
