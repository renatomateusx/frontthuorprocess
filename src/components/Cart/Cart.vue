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
@media only screen and (max-width: 992px) {
  #btnTop{
      display: block!important;
  }
}

</style>
<template>
  <div class="block-center">
    <div class="container">
      <div class="card shopping-cart">
        <div class="card-header bg-dark text-light">
        
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          Shipping cart
          <a href class="btn btn-outline-info btn-sm pull-right ml-3">
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
                <div class="fa fa-lock"></div>
              Pagamento
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
            </div>
            <div class="col-md-12 col-lg-4 float-right">
              <div class="summary" id="btnTop" style="display:none;">                
                <button type="button" class="btn btn-primary btn-lg btn-block float-right">Checkout</button>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-12 col-lg-8">
                <div class="items">
                  <div class="product">
                    <div class="row">
                      <div class="col-md-3">
                        <img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg" />
                      </div>
                      <div class="col-md-8">
                        <div class="info">
                          <div class="row">
                            <div class="col-md-5 product-name">
                              <div class="product-name">
                                <a href="#">Lorem Ipsum dolor</a>
                                <div class="product-info">
                                  <div>
                                    Display:
                                    <span class="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM:
                                    <span class="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory:
                                    <span class="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                class="form-control quantity-input"
                              />
                            </div>
                            <div class="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product">
                    <div class="row">
                      <div class="col-md-3">
                        <img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg" />
                      </div>
                      <div class="col-md-8">
                        <div class="info">
                          <div class="row">
                            <div class="col-md-5 product-name">
                              <div class="product-name">
                                <a href="#">Lorem Ipsum dolor</a>
                                <div class="product-info">
                                  <div>
                                    Display:
                                    <span class="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM:
                                    <span class="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory:
                                    <span class="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                class="form-control quantity-input"
                              />
                            </div>
                            <div class="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product">
                    <div class="row">
                      <div class="col-md-3">
                        <img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg" />
                      </div>
                      <div class="col-md-8">
                        <div class="info">
                          <div class="row">
                            <div class="col-md-5 product-name">
                              <div class="product-name">
                                <a href="#">Lorem Ipsum dolor</a>
                                <div class="product-info">
                                  <div>
                                    Display:
                                    <span class="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM:
                                    <span class="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory:
                                    <span class="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                class="form-control quantity-input"
                              />
                            </div>
                            <div class="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="summary">
                  <h3>Summary</h3>
                  <div class="summary-item">
                    <span class="text">Subtotal</span>
                    <span class="price">$360</span>
                  </div>
                  <div class="summary-item">
                    <span class="text">Discount</span>
                    <span class="price">$0</span>
                  </div>
                  <div class="summary-item">
                    <span class="text">Shipping</span>
                    <span class="price">$0</span>
                  </div>
                  <div class="summary-item">
                    <span class="text">Total</span>
                    <span class="price">$360</span>
                  </div>
                  <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
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

import API_NOTIFICATION from "../../api/notification";

// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    API_NOTIFICATION.HideLoading();
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
        rememberme: false
      }
    };
  },
  methods: {
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
    }
  }
};
</script>
