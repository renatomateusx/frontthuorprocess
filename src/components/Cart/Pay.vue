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
          {{this.nome_loja || 'Thuor.com'}}
          <a
            :href="this.url_loja"
            v-show="this.nome_loja"
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
              <div class="fa fa-lock"></div>Pagamento
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
                  v-on:click="goToCheckout()"
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
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block mt-3"
                    v-on:click="goToCheckout()"
                  >Checkout</button>
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
import VueCryptojs from "vue-cryptojs";
import Hashids from "hashids";
import UTILIS_API from "../../api/utilisAPI";
Vue.use(VueCryptojs);
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
      dadosLoja: {},
      nomeLoja: "",
      nome_loja: "",
      url_loja: "",
      ProdutoString: []
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async checkURL() {
      var url = window.location.href;      
      if (url.includes("pay")) {
        sessionStorage.removeItem("cart");
        var newURL = url.split("/pay/");
        const PRODUTO = newURL[1];
        var ID_VARIANTE, QUANTITY;
        if (PRODUTO.includes(":")) {
          ID_VARIANTE = PRODUTO.split(":")[0];
          QUANTITY = PRODUTO.split(":")[1] || 1;
        } else {
          ID_VARIANTE = PRODUTO;
          QUANTITY = 1;
        }
        this.ProdutoString = await this.getDeCripto(ID_VARIANTE);
        //https://thuor.com/pay/XVELYQDPLWEJSLKYNEEKMJEQ:2
        var lpro = await this.pushProducts(
          this.ProdutoString[0],
          QUANTITY,
          this.ProdutoString[1]
        );
        this.produtosCart.push(lpro);
        sessionStorage.setItem("cart", JSON.stringify(this.produtosCart));
        this.$router.push("/checkout");
      } else {
        const LCart = sessionStorage.getItem("cart");
        this.dadosLoja = await UTILIS_API.GetDadosLojaSession();
        if (this.dadosLoja) {
          this.nome_loja = this.dadosLoja.nome_loja;
          this.url_loja = this.dadosLoja.url_loja;
        }

        this.produtosCart = JSON.parse(LCart);
        API_NOTIFICATION.HideLoading();
      }
    },
    async pushProducts(product, quantity, variante_id) {
      return new Promise(async (resolve, reject) => {
        try {
          API_PRODUTOS.GetProdutoByIDImported(product, quantity, variante_id)
            .then(async retorno => {
              const LDaL = await this.getDadosLoja(retorno.data.id_usuario);
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
    async getDadosLoja(id_usuario) {
      return new Promise((resolve, reject) => {
        API_LOJA.GetDadosLojaByIdUsuario(id_usuario)
          .then(res => {
            const LojaData = res.data;
            this.dadosLoja = LojaData;
            UTILIS_API.SetDadosLojaSession(LojaData);
            resolve(1);
            //API_NOTIFICATION.HideLoading();
          })
          .catch(error => {
            console.log("Erro ao pegar dados da Loja", error);
          });
      });
      //API_NOTIFICATION.ShowLoading();
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
    },
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
    }
  }
};
</script>
