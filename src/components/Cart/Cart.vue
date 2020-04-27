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
    <div class="container">
      <div class="card shopping-cart">
        <div class="card-header bg-dark text-light">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          {{this.dadosLoja.nome_loja || 'Thuor.com'}}
          <a
            :href="this.dadosLoja.url_loja"
            class="btn btn-outline-info btn-sm pull-right ml-3"
          >
            <span class="fa fa-arrow-left"></span> Continue comprando
          </a>
          <!-- <div class="clearfix"></div> -->
          <div class="item-security pull-right float-right black-70 ml30 row" aria-hidden="true">
            <div class="holder-icon col-md-2" style="display:none;">
              <div class="fa fa-lock"></div>
              <!-- /.icon -->
            </div>
            <!-- /.holder-icon -->
            <div class="text mr-2">
              <div class="fa fa-lock"></div> Pagamento
              <br />
              <strong class="green">100% seguro</strong>
            </div>
            <!-- /.text -->
          </div>
        </div>
        <div class="card-body">
          <!-- PRODUCT -->

          <div class="block-heading">
            <div class="col-md-12">
              <h2>Carrinho de compras</h2>
            </div>
            <div class="col-md-12 col-lg-4 float-right">
              <div class="summary" id="btnTop" style="display:none;">
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block float-right mb-3"
                >Checkout</button>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="row col-md-12">
              <div class="col-md-12 col-lg-8">
                <div class="items">
                  <div
                    class="product"
                    v-for="{title, variant_id, variant_title, quantity, variant_price_ancora, variant_price, variant_img, id_thuor} in produtosCart"
                    :key="id_thuor"
                  >
                    <div class="row">
                      <div class="col-md-3">
                        <img class="img-fluid mx-auto d-block image" :src="variant_img" />
                      </div>
                      <div class="col-md-8">
                        <div class="info">
                          <div class="row">
                            <div class="col-md-7 product-name">
                              <div class="product-name">
                                <a href="#">{{title}}</a>
                                <div class="product-info">
                                  <div>
                                    <span class="value">{{variant_title}}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4 quantity">
                              <label for="quantity" class>Qtd.:</label>
                              <!-- <input
                                id="quantity"
                                type="number"
                                v-bind:value="quantity"
                                class="form-control quantity-input"
                              />-->
                              <div class="row QuatroCincopx">
                                <button
                                  class="input-group-btn btn btn-danger btnIncrementDecrement cursorP"
                                  v-on:click="decrementaQuantidade(id_thuor)"
                                >
                                  <span class="fa fa-minus spanIncrementDecrement"></span>
                                </button>
                                <input
                                  type="text"
                                  name="quant[2]"
                                  v-bind:id="'qtd_'+id_thuor"
                                  @change="changeQuantity(id_thuor)"
                                  class="form-control input-number"
                                  v-bind:value="quantity"
                                  readonly
                                  min="1"
                                  max="100"
                                />
                                <button
                                  class="input-group-btn btn btn-success btnIncrementDecrement cursorP"
                                  v-on:click="incrementaQuantidade(id_thuor)"
                                >
                                  <span class="fa fa-plus spanIncrementDecrement"></span>
                                </button>
                              </div>
                            </div>
                            <div class="col-md-1">
                              <span class="remove fa fa-trash-alt" v-on:click="remove(id_thuor)"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="summary">
                  <div class="summary-item">
                    <span class="text">
                      <b>Subtotal:</b>
                    </span>
                    <span class="price compare">R$ {{formatPrice(getTotal().subTotal)}}</span>
                  </div>
                  <div class="summary-item">
                    <span class="text">
                      <b>Total:</b>
                    </span>
                    <span class="price priceReal">R$ {{formatPrice(getTotal().total)}}</span>
                  </div>
                  <div class="summary-item">
                    <span class="text">
                      <b>Desconto:</b>
                    </span>
                    <span class="price desconto">R$ {{formatPrice(getTotal().discount)}}</span>
                  </div>
                  <!-- <div class="summary-item">
                    <span class="text">Shipping</span>
                    <span class="price">$0</span>
                  </div>
                  <div class="summary-item">
                    <span class="text">Total</span>
                    <span class="price">$360</span>
                  </div>-->
                  <button type="button" class="btn btn-primary btn-lg btn-block mt-3">Checkout</button>
                  <a
                    :href="this.dadosLoja.url_loja"
                    class="btn btn-outline-info btn-sm pull-right mt-3 btnKeepBuyingFooter"
                  >
                    <span class="fa fa-arrow-left"></span> Continue comprando
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      nomeLoja: ""
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          API_NOTIFICATION.ShowLoading();
          // simulate AJAX
          API_LOGIN.EfetuarLogin(this.login.email, this.login.password)
            .then(retorno => {
              if (retorno !== undefined) {
                sessionStorage.setItem("user", JSON.stringify(retorno.data));
                this.$router.go("home");
              }
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              if (error.response.status === 401) {
                API_NOTIFICATION.Notifica("Oops!", "Login e Senha inválidos");
              }
              console.log("Erro ao efetuar login", error);
            });

          return;
        }
        console.log("Correct them errors!");
      });
    },
    async checkURL() {
      var url = window.location.href;
      if (sessionStorage.getItem("DadosLoja") != null) {
        this.dadosLoja = JSON.parse(sessionStorage.getItem("DadosLoja"));
        console.log("loja", this.dadosLoja);
      }

      if (url.includes("items")) {
        console.log("0");
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
        this.$router.push("/cart");
      } else {
        console.log("1");
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
    }
  }
};
</script>
