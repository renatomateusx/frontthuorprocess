<style scoped>
.card-flat {
  margin-top: 80px !important;
}
.bg-dark {
  background-color: #23b7e5 !important;
}
.btn-outline-info {
  color: white;
  border-color: white;
}
.green {
  color: green !important;
}
.holder-icon {
  left: 0;
  position: absolute;
  top: 15px;
  font-size: 22px;
}
.remove {
  position: relative;
  top: 33px;
  cursor: pointer;
}
.center {
  text-align: center;
  display: block;
}
.QuatroCincopx {
  width: 45px !important;
}
.compare {
  color: red;
  font-weight: 700;
}
.priceReal {
  color: green;
  font-weight: 700;
}
.desconto {
  color: blue;
  font-weight: 700;
}
.btnIncrementDecrement {
  height: 21px;
}
.spanIncrementDecrement {
  top: -6px;
  margin: 0 auto;
  position: relative;
}
.cursorP {
  cursor: pointer !important;
}
.btnKeepBuyingFooter {
  color: #5d9cec;
  border-color: #5d9cec;
}
.iconBadge {
  background-color: #5d9cec;
  font-size: 15px;
  color: white;
}
.iconStep {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  display: block;
  color: white;
  background-color: #5d9cec;
  text-align: center;
  font-size: 34px;
  margin-top: 5px;
  line-height: normal;
}
.dadosPessoais {
  font-size: 20px;
  font-weight: 900;
  top: 2px;
  position: relative;
  color: #5d9cec;
  margin-left: 10px;
}
.labelForm {
  margin: 0 0 0px;

  color: #4d4d4d;
  font-weight: 700;
}
.formGroup {
  margin-bottom: 0rem;
}
.card-default {
  border-color: #5d9cec;
}
.cardSide {
  padding: 0 5px;
  box-sizing: border-box;
  border-radius: 50px;
}
.textInformation {
  line-height: 14px;
  color: #999 !important;
  padding: 0;
  padding-left: 30px;
  float: left;
  font-size: 12px;
  margin-bottom: 10px;
}
.minusmargintop {
  margin-top: -30px !important;
}
.box-title {
  position: relative;
  padding: 0 30px 0 35px;
  box-sizing: border-box;
}
.card-default {
  border-radius: 20px;
}
.btnContinue {
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
}
.rounded {
  border-radius: 20px !important;
}
.disabledBox {
  cursor: default;
  pointer-events: none;
  -moz-opacity: 0.6;
  -khtml-opacity: 0.6;
  -webkit-opacity: 0.6;
  opacity: 0.6;
}
.paddingZero{
  padding: 0;
}
@media only screen and (max-width: 992px) {
  #btnTop {
    display: block !important;
  }
}
@media only screen and (max-width: 767px) {
  .QuatroCincopx {
    margin-left: 0px !important;
  }
  .remove {
    float: left;
    left: 60px;
    position: relative;
    top: -54px;
    cursor: pointer;
    font-size: 25px;
  }
}
</style>
<template>
  <div class="block-center">
    <div class="container-fluid">
      <div class="card shopping-cart mb-0">
        <div class="card-header bg-dark text-light">
          {{this.dadosLoja.nome_loja || 'Thuor.com'}}
          <!-- <div class="clearfix"></div> -->
          <div class="item-security pull-right float-right black-70 ml30 row" aria-hidden="true">
            <div class="holder-icon col-md-2" style="display:none;">
              <div class="fa fa-lock"></div>
              <!-- /.icon -->
            </div>
            <!-- /.holder-icon -->
            <div class="text mr-2">
              <div class="fa fa-lock"></div>
              <strong class="ml-1">Pagamento</strong>
              <br />
              <strong class="green">100% seguro</strong>
            </div>
            <!-- /.text -->
          </div>
        </div>
        <span class></span>
        <div class="badge badge-blue iconStep" style="display:none;">1</div>
      </div>
      <div class="row">
        <!-- START STEP 1-->
        <div class="col-md-4 mt-1 cardSide">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="badge badge-blue iconBadge">1</span>
              <span class="dadosPessoais">Dados Pessoais</span>
              <p>
                <small
                  class="textInformation col-md-10"
                >Solicitamos somente as informações essenciais para você fazer sua compra.</small>
              </p>
            </div>
            <div class="card-body minusmargintop">
              <form class="form-horizontal">
                <div class="form-group row formGroup">
                  <label class="col-xl-2 col-form-label labelForm">Nome Completo</label>
                  <div class="col-xl-10">
                    <input
                      class="form-control required"
                      autocomplete="name"
                      type="text"
                      id="nome_completo"
                      placeholder="Digite seu nome aqui"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-md-10 col-form-label labelForm">E-mail</label>
                  <div class="col-xl-10">
                    <input
                      autocomplete="email"
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Digite seu E-mail"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">CPF</label>
                  <div class="col-md-10">
                    <input
                      class="form-control required"
                      autocomplete="cpf"
                      type="text"
                      placeholder="Digite seu CPF"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label
                    class="col-xl-2 col-form-label labelForm"
                    for="inlineFormInputGroup"
                  >Celular / WhatsApp</label>
                  <div class="col-xl-12 col-md-9">
                    <div class="input-group mb-0">
                      <div class="input-group-prepend">
                        <div class="input-group-text">+55</div>
                      </div>
                      <input
                        class="form-control"
                        id="inlineFormInputGroup"
                        type="text"
                        placeholder="71 9 9130-6561"
                        required
                      />
                    </div>
                  </div>
                  <!-- <div class="input-group mb-0">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input
                      class="form-control"
                      id="inlineFormInputGroup"
                      type="text"
                      placeholder="Username"
                    />
                  </div>-->
                </div>

                <div class="form-group row mt-3">
                  <div class="col-xl-10">
                    <button
                      class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                      v-on:click="validarStep(currentStep)"
                      type="button"
                    >Continuar<span class="fa fa-arrow-right ml-2" style="position:relative; top:1px"></span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 1-->
        <!-- START STEP 2-->
        <div class="col-md-4 mt-1 cardSide">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="badge badge-blue iconBadge">2</span>
              <span class="dadosPessoais">Endereço</span>
              <p>
                <small
                  class="textInformation col-md-10"
                >Cadastre ou selecione um endereço.</small>
              </p>
            </div>
            <div class="card-body minusmargintop">
              <form class="form-horizontal">
                <div class="form-group row formGroup">
                  <label class="col-xl-2 col-form-label labelForm">CEP</label>
                  <div class="col-md-7">
                    <input
                      class="form-control required"
                      autocomplete="zipcode"
                      type="text"
                      id="cep"
                      placeholder="Digite seu CEP"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-md-10 col-form-label labelForm">Endereço</label>
                  <div class="col-xl-10">
                    <input
                      autocomplete="email"
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Digite seu E-mail"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  
                  <div class="col-md-6">
                    <label class="col-xl-2 col-form-label labelForm paddingZero">Número</label>
                    <input
                      class="form-control required"
                      autocomplete="number"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                  
                  <div class="col-md-6">
                    <label class="col-xl-6 col-form-label labelForm paddingZero">Bairro</label>
                    <input
                      class="form-control required"
                      autocomplete="neighborhood"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">Complemento</label>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      autocomplete="complement"
                      type="text"
                      placeholder=""                      
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">Destinatário</label>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      autocomplete="receiver"
                      type="text"
                      placeholder=""                      
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-xl-10">
                    <button
                      class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                      v-on:click="validarStep(currentStep)"
                      type="button"
                    >Continuar<span class="fa fa-arrow-right ml-2" style="position:relative; top:1px"></span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 2-->
        <!-- START STEP 3-->
        <div class="col-md-4 mt-1 cardSide">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="badge badge-blue iconBadge">3</span>
              <span class="dadosPessoais">Pagamento</span>
              <p>
                <small
                  class="textInformation col-md-10"
                >Escolha abaixo uma forma de pagamento.</small>
              </p>
            </div>
            <div class="card-body minusmargintop">
              <form class="form-horizontal">
                <div class="form-group row formGroup">
                  <label class="col-xl-2 col-form-label labelForm">Nome Completo</label>
                  <div class="col-xl-10">
                    <input
                      class="form-control required"
                      autocomplete="name"
                      type="text"
                      id="nome_completo"
                      placeholder="Digite seu nome aqui"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-md-10 col-form-label labelForm">E-mail</label>
                  <div class="col-xl-10">
                    <input
                      autocomplete="email"
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Digite seu E-mail"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">CPF</label>
                  <div class="col-md-10">
                    <input
                      class="form-control required"
                      autocomplete="cpf"
                      type="text"
                      placeholder="Digite seu CPF"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label
                    class="col-xl-2 col-form-label labelForm"
                    for="inlineFormInputGroup"
                  >Celular / WhatsApp</label>
                  <div class="col-xl-12 col-md-9">
                    <div class="input-group mb-0">
                      <div class="input-group-prepend">
                        <div class="input-group-text">+55</div>
                      </div>
                      <input
                        class="form-control"
                        id="inlineFormInputGroup"
                        type="text"
                        placeholder="71 9 9130-6561"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-xl-10">
                    <button
                      class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                      v-on:click="validarStep(currentStep)"
                      type="button"
                    ><span class="fa fa-lock mr-2" style="position:relative; top:1px"></span>Comprar Agora</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 3-->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import money from "v-money";
import API_NOTIFICATION from "../../api/notification";
import API_PRODUTOS from "../../api/produtosAPI";
import API_LOJA from "../../api/lojaAPI";
// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});
Vue.use(money, { precision: 2 });
export default {
  created() {
    API_NOTIFICATION.ShowLoading();
    this.checkURL();
  },
  data() {
    return {
      price: 123.45,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */
      },
      login: {
        email: "",
        password: "",
        rememberme: false
      },
      produtosCart: [],
      dadosLoja: null,
      nomeLoja: "",
      currentStep: 1
    };
  },
  methods: {
    validarStep(step) {},
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          API_NOTIFICATION.ShowLoading();
          // simulate AJAX

          return;
        }
        console.log("Correct them errors!");
      });
    },
    async checkURL() {
      var url = window.location.href;
      if (sessionStorage.getItem("DadosLoja") != null) {
        this.dadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        //console.log("loja", this.dadosLoja);
      }

      if (url.includes("items")) {
        //console.log("0");
        sessionStorage.removeItem("cart");
        var newURL = url.split("items");

        const produtos = [],
          variantes = [],
          quantidade = [];
        var params = new URL(window.location.href);
        const cart_token = params.searchParams.get("cart_token");
        const isShopify = params.searchParams.get("isShopify");
        const limpa_carrinho = params.searchParams.get("limpa_carrinho");
        const qtdItems = params.searchParams.get("qtd_items");
        const redirectTo = params.searchParams.get("redirectTo");
        this.getDadosLoja();

        for (var i = 0; i < qtdItems; i++) {
          var lpro = await this.pushProducts(
            params.searchParams.get("produto_option_id[" + i + "]"),
            params.searchParams.get("produto_option_quantity[" + i + "]"),
            params.searchParams.get("produto_option_variante_id[" + i + "]")
          );
          //console.log("LPro", lpro);
          this.produtosCart.push(lpro);
        }
        sessionStorage.setItem("cart", JSON.stringify(this.produtosCart));
        API_NOTIFICATION.HideLoading();
        //GUARDA O [1] PARA USAR COMO QUISER.
        window.location.href = newURL[0];
        if (redirectTo == "checkout") {
          this.$router.push("/checkout");
        }
        if (redirectTo == "cart") {
          this.$router.push("/cart");
        }
      } else {
        //console.log("1");
        const LCart = sessionStorage.getItem("cart");
        this.dadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        this.produtosCart = JSON.parse(LCart);
        API_NOTIFICATION.HideLoading();
      }
    },
    async pushProducts(product, quantity, variante_id) {
      return new Promise((resolve, reject) => {
        try {
          API_PRODUTOS.GetProdutoByIDThuor(product, quantity, variante_id)
            .then(retorno => {
              //console.log("Opa", product, quantity, variante_id);
              //console.log("Opa", retorno.data);

              //this.produtosCart.push(LProd);
              //console.log("Lprod", LProd);
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
    async recalculaSubtotal() {},
    async remove(id) {
      for (var i = 0; i < this.produtosCart.length; i++) {
        if (this.produtosCart[i].id_thuor == id) {
          this.produtosCart.splice(i, 1);
          sessionStorage.setItem("cart", JSON.stringify(this.produtosCart));
          this.recalculaSubtotal();
        }
      }
      //console.log("ID Thuor", id);
    },
    async getDadosLoja() {
      //API_NOTIFICATION.ShowLoading();
      var params = new URL(window.location.href);
      const store = params.searchParams.get("store");
      API_LOJA.GetDadosLoja(store)
        .then(res => {
          const LojaData = res.data;
          this.dadosLoja = LojaData;
          sessionStorage.setItem("DadosLoja", JSON.stringify(LojaData));
          //API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao pegar dados da Loja", error);
        });
    },
    getNomeLoja() {
      this.dadosLoja = JSON.parse();
    },
    getTotal() {
      var subTotal = 0,
        total = 0,
        discount = 0;
      var LTotal = {
        subTotal: 0,
        total: 0,
        discount: 0
      };
      if (this.produtosCart != null) {
        this.produtosCart.forEach((item, i) => {
          subTotal = subTotal + item.variant_price_ancora * item.quantity;
          total = total + item.variant_price * item.quantity;
          discount = subTotal - total;
        });
        var LTotal = {
          subTotal: subTotal,
          total: total,
          discount: discount
        };
        return LTotal;
      }
    },
    async changeQuantity(idThuor) {
      var Comp = document.getElementById("qtd_" + idThuor);
      //console.log("IdThuor", idThuor);
      //console.log("Comp", Comp.value);
      for (const [i, item] of this.produtosCart.entries()) {
        //this.produtosCart.forEach((item, i)=>{
        if (item.id_thuor == idThuor) {
          item.quantity = Comp.value;
          this.produtosCart[i].quantity = Comp.value;
          sessionStorage.setItem("cart", JSON.stringify(this.produtosCart));
          this.getTotal();
          break;
        }
      }
    },
    incrementaQuantidade(idThuor) {
      var Comp = document.getElementById("qtd_" + idThuor);
      var qtd = parseInt(Comp.value) + 1;
      document.getElementById("qtd_" + idThuor).value = qtd;
      this.changeQuantity(idThuor);
    },
    decrementaQuantidade(idThuor) {
      var Comp = document.getElementById("qtd_" + idThuor);
      var qtd = parseInt(Comp.value) - 1;
      document.getElementById("qtd_" + idThuor).value = qtd;
      this.changeQuantity(idThuor);
    },
    goToCheckout() {
      this.$router.push("/checkout");
    }
  }
};
</script>
