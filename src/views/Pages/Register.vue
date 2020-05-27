<style scoped>
.card-flat {
  margin-top: 80px !important;
}
.bg-dark {
  background-color: #23b7e5 !important;
}
.footerText{
  font-size: 12px!important;
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
        <p class="text-center py-2">Cadastre-se e tenha acesso aos melhores recursos.</p>
        <form
          class="mb-3"
          @submit.prevent="validateBeforeSubmit('register')"
          data-vv-scope="register"
        >
          <div class="form-group">
            <label class="text-muted" for="signupInputEmail1">E-mail</label>
            <div class="input-group with-focus">
              <input
                :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.email')}"
                placeholder="Seu e-mail "
                v-model="register.email"
                v-validate="'required|email'"
                type="text"
                name="email"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-envelope"></em>
                </span>
              </div>
              <span
                v-show="errors.has('register.email')"
                class="invalid-feedback"
              >{{ errors.first('register.email') }}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="text-muted" for="signupInputPassword1">Senha</label>
            <div class="input-group with-focus">
              <input
                ref="password1"
                :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.password1')}"
                v-model="register.password1"
                v-validate="'required'"
                type="password"
                name="password1"
                placeholder="Senha"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-lock"></em>
                </span>
              </div>
              <span
                v-show="errors.has('register.password1')"
                class="invalid-feedback"
              >{{ errors.first('register.password1') }}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="text-muted" for="signupInputRePassword1">Confirmar Senha</label>
            <div class="input-group with-focus">
              <input
                :class="{'form-control border-right-0':true, 'is-invalid': errors.has('register.password2')}"
                v-model="register.password2"
                v-validate="'required|confirmed:password1'"
                type="password"
                name="password2"
                placeholder="Confirmar Senha"
              />
              <div class="input-group-append">
                <span class="input-group-text text-muted bg-transparent border-left-0">
                  <em class="fa fa-lock"></em>
                </span>
              </div>
              <span
                v-show="errors.has('register.password2')"
                class="invalid-feedback"
              >{{ errors.first('register.password2') }}</span>
            </div>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              :class="{'custom-control-input':true, 'is-invalid': errors.has('register.agreements')}"
              v-model="register.agreements"
              v-validate="'required'"
              name="agreements"
              id="registeragree"
            />
            <label class="custom-control-label" for="registeragree">
              Concordo com os
              <a class="ml-1" href="#">termos</a>
            </label>
            <span
              v-show="errors.has('register.agreements')"
              class="invalid-feedback"
            >{{ errors.first('register.agreements') }}</span>
          </div>
          <button class="btn btn-block btn-primary mt-3" type="submit">Enviar para análise</button>
        </form>
        <p class="pt-0 text-center mb-0">Já tem conta?</p>
        <router-link class="btn btn-block btn-link" to="/login">Faça o Login</router-link>
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

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  data() {
    return {
      register: {
        email: "",
        password1: "",
        password2: "",
        agreements: false
      }
    };
  },
  methods: {
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          console.log("Form Submitted!");
          console.log(`Email: ${this.register.email}`);
          console.log(`Password: ${this.register.password1}`);
          console.log(`Agreed: ${this.register.agreements}`);
          return;
        }
        console.log("Correct them errors!");
      });
    }
  }
};
</script>