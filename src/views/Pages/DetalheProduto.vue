<style scoped>
.card-flat {
  margin-top: 80px !important;
}
.shopifysvg {
  width: 20px !important;
  height: 20px !important;
}
.borderButton {
  border: solid 1px grey;
}
.titulo_produto {
  position: relative;
  top: 1.5em;
}
.circle {
  width: 70px;
  height: auto;
}
.id_produto {
  float: left;
  font-size: 12px !important;
}
.display-inline {
  float: left;
  display: inline-flex;
}
.td {
  width: 150px;
}
.right {
  float: right;
}
.marginLeft {
  margin-left: 40px;
}
.marginBottom {
  margin-bottom: 20px;
}
.produto-com-variante {
  font-weight: bold;
  color: #f05050;
  font-size: 15px;
}
.ativo {
  background-color: rgb(1, 200, 155) !important;
  border-color: rgb(1, 200, 155) !important;
  margin-top: 3px !important;
}
.inativo {
  background-color: rgb(229, 15, 56) !important;
  border-color: rgb(229, 15, 56) !important;
  margin-top: 3px !important;
}
.ativoInativo {
  font-weight: bold;
  color: white;
}
.opcaoSelecionada {
  background-color: #23b7e5;
  color: white;
  font-weight: bold;
}
.opcaoDeselecionada {
  font-weight: bold;
  color: gray;
}
.labelCheckBox {
  font-size: 18px !important;
  font-weight: bold;
}
.block {
  display: block;
}
.btnSalvar {
  color: white;
  font-weight: bold;
  font-size: 18px;
}
.precoAtual {
  color: green;
}
.precoCompare {
  color: red;
}
.linkCompra {
  color: #23b7e5;
}
.sku {
  font-size: 13px;
  font-weight: 700;
  font-family: Rubik, sans-serif !important;
  word-break: break-word;
  color: purple;
}
.myDropDownPrazo /deep/ .dropdown-menu {
  max-height: 100px;
  overflow-y: auto;
}
.fontSizeSmall{
  font-size: 12px!important;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <b>Produto:</b>
      {{this.produtoByID.title}}
    </div>
    <div class="row col-lg-10"></div>
    <div class="text-right mt-2 mb-3" style="display:none">
      <b-btn variant="warning mr-2">Descartar</b-btn>
      <b-btn variant="success">Salvar</b-btn>
    </div>
    <div class="row">
      <form class="card col-lg-8">
        <b-tabs nav-class="nav-justified" class="ie-fix-flex">
          <b-tab title="INFORMAÇÕES BÁSICAS" active>
            <div class="text-right mt-2 mb3 col-lg-12">
              <span
                v-if="this.produtoByID.variants !== undefined"
                class="produto-com-variante"
              >PRODUTO COM VARIANTE</span>
            </div>
            <div class="form-group row">
              <span class="col-md-3 col-form-label labelCheckBox">Status</span>
              <div class="col-md-9 mt-1">
                <label class="switch switch-lg">
                  <input
                    @change="alteraStatusProduto()"
                    type="checkbox"
                    true-value="1"
                    false-value="0"
                    v-model="statusProd"
                    :class="this.statusProd == 1 ? 'ativo': 'inativo'"
                    :checked="this.produtoTable.status"
                  />
                  <span :class="this.statusProd == 1 ? 'ativo': 'inativo'"></span>
                </label>
              </div>
            </div>
            <div class="form-group row">
              <div
                class="col-md-10 btn-group btn-group-lg"
                role="group"
                aria-label="Definição de Produto"
              >
                <button
                  type="button"
                  v-on:click="selecionaProduto('FISICO')"
                  class="btn btn-secondary"
                  :class="this.produtoTable.tipo_produto === 'FISICO'? 'opcaoSelecionada':'opcaoDeselecionada'"
                >PRODUTO FÍSICO</button>
                <button
                  type="button"
                  v-on:click="selecionaProduto('DIGITAL')"
                  class="btn btn-secondary"
                  :class="this.produtoTable.tipo_produto === 'DIGITAL'? 'opcaoSelecionada':'opcaoDeselecionada'"
                >PRODUTO DIGITAL</button>
              </div>
            </div>
            <!-- <fieldset>
              <div class="form-group row">
                <label class="col-lg-2 col-form-label">Name:</label>
                <div class="col-lg-10">
                  <input class="form-control" type="text" placeholder="Product name.." />
                </div>
              </div>
            </fieldset>-->
            <hr />
            <div class="card card">
              <div class="form-group row">
                <span class="col-md-9 col-form-label labelCheckBox">Frete Personalizado</span>
                <div class="text-right col-md-3">
                  <label class="switch switch-lg">
                    <input
                      @change="alteraCustomFrete()"
                      type="checkbox"
                      v-model="customFrete"
                      true-value="1"
                      false-value="0"
                      :class="this.customFrete == 1 ? 'ativo' : 'inativo'"
                    />
                    <span :class="this.customFrete == 1 ? 'ativo' : 'inativo'"></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="card card" v-show="this.customFrete == 1">
              <div class="form-group row">
                <span class="col-md-9 col-form-label labelCheckBox">Tipo Frete</span>
                <div
                  class="col-md-10 btn-group btn-group-lg"
                  role="group"
                  aria-label="Definição de Produto"
                >
                  <button
                    type="button"
                    v-on:click="selecionaTipoFrete('FIXO')"
                    class="btn btn-secondary"
                    :class="this.produtoTable.tipo_frete === 'FIXO'? 'opcaoSelecionada':'opcaoDeselecionada'"
                  >FIXO</button>
                  <button
                    type="button"
                    v-on:click="selecionaTipoFrete('GRATIS')"
                    class="btn btn-secondary"
                    :class="this.produtoTable.tipo_frete === 'GRATIS'? 'opcaoSelecionada':'opcaoDeselecionada'"
                  >GRÁTIS</button>
                </div>
                <!-- SE SELECIONAR FRETE FIXO, APARECE A INFORMAÇÃO DO VALOR -->
                <span
                  class="col-md-9 col-form-label labelCheckBox"
                  v-show="this.produtoTable.tipo_frete === 'FIXO'"
                >Preço do Frete</span>
                <div
                  class="col-md-8 btn-group btn-group-lg"
                  role="group"
                  aria-label="Definição de Produto"
                  v-show="this.produtoTable.tipo_frete === 'FIXO'"
                >
                  <b-input-group size="lg" prepend="R$">
                    <b-form-input
                      v-model.lazy="price"
                      v-model="preco_frete"
                      v-money="money"
                      id="preco_frete"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-btn v-on:click="salvaTipoFrete()" variant="info">Salvar</b-btn>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </div>
            <div class="card card-default">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <span class="col-md-9 col-form-label labelCheckBox">URL Redirecionamento Boleto</span>
                    <input
                      class="form-control form-control-lg"
                      type="url"
                      v-model="urlDirBoleto"
                      placeholder="Ex: https://meusite.com/obrigado-boleto"
                    />
                  </div>
                  <div class="form-group">
                    <span class="col-md-9 col-form-label labelCheckBox">URL Redirecionamento Cartão</span>
                    <input
                      class="form-control form-control-lg"
                      type="url"
                      v-model="urlDirCartao"
                      placeholder="Ex: https://meusite.com/obrigado-cartao"
                    />
                  </div>
                  <div class="float-right block">
                    <button
                      type="button"
                      v-on:click="salvarURLRedirecionamentos()"
                      class="btn btn-primary btn-lg float-right btnSalvar"
                    >Salvar</button>
                  </div>
                </form>
              </div>
            </div>
          </b-tab>
          <b-tab title="ESTOQUE">
            <div v-for="optionsValues in this.produtoByID.options">
              <div class="card card-default" v-for="(title, index) in optionsValues.values">
                <div class="popover-body">
                  <!-- <div>{{optionsValues}}</div> -->
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="mr-3 rounded-circle thumb48"
                      :src="getImageVariantById(getVariantOptionByTitle(title).image_id)"
                      alt="Image"
                    />
                    <p class="m-0">
                      <span class="text-muted">
                        <strong class="sku">
                          <b>SKU:</b>
                          {{getVariantOptionByTitle(title).sku}}
                        </strong>
                      </span>
                      <br />
                      <span class="mr-2 text-muted">
                        <b class>{{optionsValues.name}}: {{title}}</b>
                      </span>
                      <br />
                    </p>
                  </div>
                  <div class="card-body">
                    <span class="col-md-9 col-form-label labelCheckBox">Gerenciar Estoque?</span>

                    <p>
                      <small
                        class="col-md-9 col-form-label"
                      >Para não gerenciar o estoque, deixe em branco ou zerado em clique em salvar</small>
                    </p>
                    <div class="card">
                      <div class="form-group">
                        <div class="col-lg-6">
                          <span class="col-md-4 col-form-label labelCheckBox">Quantidade</span>
                          <input
                            class="form-control float-right col-md-3"
                            type="text"
                            placeholder="Qtd. Est."
                            v-bind:id="'qtd'+getVariantOptionByTitle(title).id"
                          />
                        </div>
                      </div>
                      <br />
                      <div class="form-group">
                        <div class="col-lg-6">
                          <span class="col-md-4 col-form-label labelCheckBox">Quantidade Mínima</span>
                          <input
                            class="form-control float-right col-md-3"
                            type="text"
                            placeholder="Qtd. Est."
                            v-bind:id="'qtd_minima'+getVariantOptionByTitle(title).id"
                          />
                        </div>
                      </div>
                      <b-input-group-append class="float-right" style="display:block;">
                        <b-btn
                          class="float-right btnSalvar"
                          v-on:click="salvarEstoqueQuantidades(getVariantOptionByTitle(title).id, 'qtd'+getVariantOptionByTitle(title).id, 'qtd_minima'+getVariantOptionByTitle(title).id, 'check'+getVariantOptionByTitle(title).id)"
                          variant="info"
                        >Salvar</b-btn>
                      </b-input-group-append>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <span class="col-md-9 col-form-label labelCheckBox">Prazo para Postagem</span>

                  <div class="col-sm-7 col-lg-6">
                    <!-- START box placeholder-->
                    <div class="box">
                      <small>Insira/Deixe 0 para postagem IMEDIATA</small>
                      <!-- START button group-->

                      <b-input-group size="lg" prepend="Dias Úteis">
                        <b-form-input
                          v-bind:value="getValuePrazoEnvioVariantByID(getVariantOptionByTitle(title).id, 'prazo_envio'+getVariantOptionByTitle(title).id)"
                          v-bind:id="'prazo_envio'+getVariantOptionByTitle(title).id"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-btn
                            v-on:click="salvarPrazoEnvio(getVariantOptionByTitle(title).id,'prazo_envio'+getVariantOptionByTitle(title).id )"
                            variant="info"
                          >Salvar</b-btn>
                        </b-input-group-append>
                      </b-input-group>
                      <!-- END button group-->
                    </div>
                    <!-- END box placeholder-->
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <!-- <b-tab title="Pictures"> -->
          <!-- <div class="row mb-3">
            <div class="col-3">
              <strong>Preview</strong>
            </div>
            <div class="col-9">
              <strong>Details</strong>
            </div>
          </div>
          <div class="row mb-3 pb-3 bb">
            <div class="col-6 col-md-3">
              <a href="#" title="Product 1">
                <img class="img-fluid" src="img/bg7.jpg" alt="Product 1" />
              </a>
            </div>
            <div class="col-6 col-md-9">
              <fieldset>
                <div class="form-group row">
                  <input class="form-control" type="text" placeholder="Brief description.." />
                </div>
              </fieldset>
              <p>
                <strong>Picture type</strong>
              </p>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod1-pic" value="option1" checked />
                  <span></span>Primary
                </label>
              </div>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod1-pic" value="option2" />
                  <span></span>Thumbnail
                </label>
              </div>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod1-pic" value="option3" />
                  <span></span>Gallery
                </label>
              </div>
              <div class="text-right">
                <button class="btn btn-sm btn-danger" type="button">
                  <em class="fa fa-times-circle fa-fw"></em>Remove
                </button>
              </div>
            </div>
          </div>
          <div class="row mb-3 pb-3 bb">
            <div class="col-6 col-md-3">
              <a href="#" title="Product 2">
                <img class="img-fluid" src="img/bg8.jpg" alt="Product 1" />
              </a>
            </div>
            <div class="col-6 col-md-9">
              <fieldset>
                <div class="form-group row">
                  <input class="form-control" type="text" placeholder="Brief description.." />
                </div>
              </fieldset>
              <p>
                <strong>Picture type</strong>
              </p>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod2-pic" value="option1" checked />
                  <span></span>Primary
                </label>
              </div>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod2-pic" value="option2" />
                  <span></span>Thumbnail
                </label>
              </div>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod2-pic" value="option3" />
                  <span></span>Gallery
                </label>
              </div>
              <div class="text-right">
                <button class="btn btn-sm btn-danger" type="button">
                  <em class="fa fa-times-circle fa-fw"></em>Remove
                </button>
              </div>
            </div>
          </div>
          <div class="row mb-3 pb-3">
            <div class="col-6 col-md-3">
              <a href="#" title="Product 3">
                <img class="img-fluid" src="img/bg10.jpg" alt="Product 1" />
              </a>
            </div>
            <div class="col-6 col-md-9">
              <fieldset>
                <div class="form-group row">
                  <input class="form-control" type="text" placeholder="Brief description.." />
                </div>
              </fieldset>
              <p>
                <strong>Picture type</strong>
              </p>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod3-pic" value="option1" checked />
                  <span></span>Primary
                </label>
              </div>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod3-pic" value="option2" />
                  <span></span>Thumbnail
                </label>
              </div>
              <div class="c-radio c-radio-nofont">
                <label>
                  <input type="radio" name="prod3-pic" value="option3" />
                  <span></span>Gallery
                </label>
              </div>
              <div class="text-right">
                <button class="btn btn-sm btn-danger" type="button">
                  <em class="fa fa-times-circle fa-fw"></em>Remove
                </button>
              </div>
            </div>
          </div>-->
          <!-- </b-tab> -->
        </b-tabs>
      </form>
      <form class="card card-default col-lg-3 right marginLeft">
        <div class="card">
          <div class="card-body mb-0">
            <div class="text-center">
              <h3 class="mt-0">RESUMO</h3>
            </div>
            <hr />
            <p>
              <b>Criado em:</b>
              {{this.produtoByID.created_at | formatDate}}
            </p>
            <p>
              <b>Modificado em:</b>
              {{this.produtoByID.updated_at | formatDate}}
            </p>
            <hr />
          </div>

          <div class="arrow"></div>
          <!-- AQUI COMEÇA O COMPONENTE DA VARIANTE, DOLADO DIREITO. TRANSFORME EM COMPONENTE DEPOIS -->
          <div
            class="card card-default"
            v-for="{id, compare_at_price, price, image_id, sku } in this.produtoByID.variants"
            :key="id"
          >
            <div class="popover-body">
              <div class="d-flex align-items-center mb-2">
                <img
                  class="mr-3 rounded-circle thumb48"
                  :src="getImageVariantById(image_id)"
                  alt="Image"
                />
                <p class="m-0">
                  <span class="text-muted">
                    <strong class="sku">
                      <b>SKU:</b>
                      {{sku}}
                    </strong>
                  </span>
                  <br />
                  <span class="mr-2 text-muted">
                    <strike class="precoCompare">R$ {{compare_at_price}}</strike>
                  </span>
                  <span class="text-muted">
                    <strong class="precoAtual">R$ {{price}}</strong>
                  </span>
                  <br />
                  <a
                    class="text-muted"
                    title="Clique para copiar"
                    style="cursor:pointer!important;"
                    @click.stop.prevent="copyToClip('https://app.thuor.com/pay/'+getCripto(produtoByID.id, id))"
                  >
                    <span class="fa fa-link linkCompra"></span>
                    <strong class="linkCompra">Link de Compra</strong>
                    <!-- AO CLICAR, COPIAR PARA O CLIBPBOARD -->
                  </a>
                </p>
              </div>
            </div>
          </div>
          <input type="hidden" id="copyClipBoard" />
          <!-- AQUI TERMINA O COMPONENTE DA VARIANTE, DO LADO DIREITO. TRANSFORME EM COMPONENTE DEPOIS -->
        </div>
        <div class="card">
          <div class="card-body mb-0">
            <div class="text-center">
              <h3 class="mt-0">Landing Pages</h3>
            </div>
            <hr />
            <p>
              <b role="button" class="ml-0 mr-0 btn btn-success" v-on:click="obterCheckout(produtoByID.id_thuor)">Checkout p/ Landing Page.</b>            
            </p>            
            <hr />
             <p>
              <b role="button" class="ml-0 mr-0 btn btn-warning" v-on:click="obterVariantes(produtoByID.id_thuor)">Variantes p/ Landing Page.</b>            
            </p>            
            <hr />
          </div>

          <div class="arrow"></div>
        </div>
      </form>
    </div>
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import Loading from "vue-loading-overlay";
import API_NOTIFICATION from "../../api/notification";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import API_PRODUTOS from "../../api/produtosAPI";
import Datatable from "@/components/Tables/Datatable";
import money from "v-money";
import moment from "moment";
import Hashids from "hashids";

Vue.use(Loading);
Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});
Vue.use(money, { precision: 2 });
export default {
  components: {
    Datatable
  },
  created() {
    API_NOTIFICATION.ShowLoading();
    this.checkIfLogged();
  },
  computed: {},
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
      statusProd: false,
      customFrete: false,
      preco_frete: 0,
      prazo_envio: 0,
      urlDirBoleto: "",
      urlDirCartao: "",
      gerencia_estoque: [],
      dtOptions1: {
        data: this.produtosList,
        columns: [
          { title: "ID" },
          { title: "NOME" },
          { title: "VARIANTES" },
          { title: "ESTOQUE  " }
        ],
        paging: true, // Table pagination
        ordering: true, // Column ordering
        info: true, // Bottom left status text
        responsive: true,
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        oLanguage: {
          sSearch: '<em class="fa fa-search"></em>',
          sLengthMenu: "_MENU_ Registros Por Página",
          info: "Mostrando página _PAGE_ de _PAGES_",
          zeroRecords: "Nada encontrado, você ainda não tem produtos",
          infoEmpty: "Não há registros",
          infoFiltered: "(filtrado de _MAX_ total de registros)",
          oPaginate: {
            sNext: '<em class="fa fa-caret-right"></em>',
            sPrevious: '<em class="fa fa-caret-left"></em>'
          }
        }
      },
      produtoByID: {},
      produtoTable: {}
    };
  },
  watch: {
    value: function() {
      this.$emit("change", value);
    }
  },
  methods: {  
    
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          // simulate AJAX
          return;
        }
        console.log("Correct them errors!");
      });
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      var LID_PRODUTO = this.$route.params.id;
      API_LOGIN.VerificaToken()
        .then(res => {
          if (LID_PRODUTO !== undefined) {
            API_PRODUTOS.GetProdutoByID(LID_PRODUTO)
              .then(retProd => {
                //console.log("Ret Prod", retProd.data.length);
                if (retProd.data != undefined) {
                  //console.log("Ret Prod", retProd);
                  var LImages = retProd.data.json_dados_produto;
                  //console.log(JSON.parse(retProd.data.json_dados_produto));
                  this.produtoByID = retProd.data.json_dados_produto;
                  this.produtoTable = retProd.data;
                  this.statusProd = this.produtoTable.status;
                  this.customFrete = this.produtoTable.custom_frete;
                  this.preco_frete = this.produtoTable.preco_frete;
                  this.produtoByID.id_thuor = retProd.data.id_thuor;
                  this.produtoByID.variants.forEach((obj, i) => {
                    //console.log("obj", obj.id);
                    this.getDadosEstoqueByVariante(obj.id);
                  });

                  document.getElementById(
                    "preco_frete"
                  ).value = this.produtoTable.preco_frete;
                  //console.log("Dados Produto", this.preco_frete);
                  this.dtOptions1.data = this.produtosList;
                  API_NOTIFICATION.HideLoading();
                } else {
                  API_NOTIFICATION.showNotificationW(
                    "Oops!",
                    "Produto inexistente",
                    "error"
                  );
                  console.log("Erro");
                  setTimeout(() => {
                    this.$router.push("/todos");
                  }, 1500);
                }
              })
              .catch(error => {
                console.log("Erro ao pegar produtos", error);
              });
          } else {
            API_NOTIFICATION.Notifica("Oops!", "Parâmetro Inválido", "error");
            this.$router.push("/todos");
            ////this.$router.push('../../home');
          }
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.push("login");
          }
        });
    },
    selecionaProduto(tipo) {
      this.produtoTable.tipo_produto = tipo;

      API_PRODUTOS.UpdateTipoProduto(
        this.produtoTable.tipo_produto,
        this.produtoTable.id_produto_json
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "Tipo do Produto atualizado",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao Atualizar o Status do Produto", error);
          API_NOTIFICATION.showNotification(
            "Tipo do Produto NÃO atualizado",
            "error"
          );
        });
    },
    alteraStatusProduto() {
      this.produtoTable.status = this.statusProd;
      API_PRODUTOS.UpdateStatusProduto(
        this.produtoTable.status,
        this.produtoTable.id_produto_json
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "Status do Produto atualizado",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao Atualizar o Status do Produto", error);
          API_NOTIFICATION.showNotification(
            "Status do Produto NÃO atualizado",
            "error"
          );
        });
    },
    alteraCustomFrete() {
      this.produtoTable.custom_frete = this.customFrete;
      API_PRODUTOS.UpdateCustomFrete(
        this.customFrete,
        this.produtoTable.id_produto_json
      )
        .then(res => {
          var LSituacao = this.customFrete == 1 ? "Ativado" : "Desativado";
          API_NOTIFICATION.showNotification(
            "Frete Personalizado " + LSituacao,
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao Atualizar o Status do Produto", error);
          var LSitua = this.customFrete == 1 ? "ATIVAR" : "DESATIVAR";
          API_NOTIFICATION.showNotification(
            "NÃO foi possível " + LSitua + " o frete personalizado",
            "error"
          );
        });
    },
    selecionaTipoFrete(tipo) {
      this.produtoTable.tipo_frete = tipo;
      if (tipo === "GRATIS") {
        this.salvaTipoFrete();
      }
    },
    salvaTipoFrete() {
      var preco_frete = this.preco_frete;
      this.produtoTable.preco_frete = this.preco_frete;
      if (this.produtoTable.tipo_frete === "FIXO") {
      } else {
        preco_frete = "0,00";
      }
      API_PRODUTOS.UpdateTipoFrete(
        this.produtoTable.tipo_frete,
        this.preco_frete,
        this.produtoTable.id_produto_json
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "Tipo de Frete Atualizado",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao Atualizar o TIPO de FRETE", error);
          API_NOTIFICATION.showNotification(
            "NÃO foi possível atualizar o tipo de frete",
            "error"
          );
        });
    },
    salvarURLRedirecionamentos() {
      API_PRODUTOS.UpdateURLDirProduto(
        this.urlDirBoleto,
        this.urlDirCartao,
        this.produtoTable.id_produto_json
      )
        .then(res => {
          API_NOTIFICATION.showNotification(
            "URLs de Redirecionamentos Atualizadas",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao Atualizar as URLs de Redirecionamento", error);
          API_NOTIFICATION.showNotification(
            "NÃO foi possível atualizar as URLs de Redirecionamento",
            "error"
          );
        });
    },
    getImageVariantById(idImage) {
      var images = this.produtoByID.images;
      if (idImage == undefined) return images[0].src;
      return images.find(x => x.id === idImage).src || ``;
      // images.forEach((obj, i) => {

      // });
    },
    getVariantOptionByTitle(title) {
      var variantes = this.produtoByID.variants;
      return variantes.find(x => x.title === title) || ``;
    },
    copyToClip(comp) {
      document.getElementById("copyClipBoard").value = comp;
      let textToCopy = document.querySelector("#copyClipBoard");
      textToCopy.setAttribute("type", "text");
      textToCopy.select();

      var sucessoCopy = document.execCommand("copy");
      var msg = sucessoCopy ? "sucesso" : "erro";
      if (msg === "sucesso") {
        API_NOTIFICATION.showNotification("Copiado!", "success");
      } else {
        API_NOTIFICATION.showNotification(
          "Erro ao copiar. Tente novamente.",
          "error"
        );
      }
      textToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    getValuePrazoEnvioVariantByID(id, campo) {
      API_PRODUTOS.GetPrazoEnvioVarianteByID(id, campo)
        .then(res => {
          const LVariante = res.data.prazo_envio;

          document.getElementById(res.data.campo).value = LVariante || 0;
        })
        .catch(error => {
          console.log("Erro ao pegar variante por ID", error);
        });
    },
    salvarPrazoEnvio(id, campo) {
      API_NOTIFICATION.ShowLoading();
      var LValue = document.getElementById(campo).value;
      if (LValue !== undefined && LValue > -1) {
        API_PRODUTOS.SalvarPrazoEnvioByID(id, LValue)
          .then(res => {
            API_NOTIFICATION.showNotification(
              "Prazo de Envio Atualizado!",
              "success"
            );
          })
          .catch(error => {
            console.log("Erro ao salvar prazo de envio");
            API_NOTIFICATION.HideLoading();
          });
      }
    },
    AlteraGerenciarEstoque(id, id_variante) {
      //console.log(this.gerencia_estoque[id]);
      var LValue = this.gerencia_estoque[id];
      if (LValue == 0) {
        API_NOTIFICATION.ShowLoading();
        API_PRODUTOS.DesativaGerenciamentoPorVarianteID(id_variante)
          .then(retorno => {
            API_NOTIFICATION.showNotification(
              "Gerenciamento de Estoque Desativado!",
              "success"
            );
          })
          .catch(error => {
            console.log("Erro ao desativar gerenciamento de estoque", error);
            API_NOTIFICATION.HideLoading();
          });

        console.log("Desativa Gerenciamento de ESTOQUE");
      } else {
        console.log("Aguarda salvar gerenciamento de estoque", LValue);
        // console.log("Campo Gerencia Estoque", campoChecked.checked);
      }
    },
    getGerenciaEstoqueByVarianteID(id, campo) {
      return this.gerencia_estoque[id];
    },
    salvarEstoqueQuantidades(id, qtd, qtd_minima, id_model) {
      API_NOTIFICATION.ShowLoading();
      var LValue = this.gerencia_estoque[id_model];
      var LQtd = $("#" + qtd).val();
      var LQtdMinima = $("#" + qtd_minima).val();
      //console.log(id, LQtd, LQtdMinima, LValue);
      API_PRODUTOS.SalvarQuantidadeEstoqueGerenciamentoPorVarianteID(
        id,
        LQtd,
        LQtdMinima
      )
        .then(retorno => {
          API_NOTIFICATION.showNotification(
            "Gerenciamento de Estoque atualizado!",
            "success"
          );
        })
        .catch(error => {
          console.log("Erro ao atualizar o gerenciamento de estoque");
          API_NOTIFICATION.HideLoading();
        });
    },
    getDadosEstoqueByVariante(id) {
      API_PRODUTOS.GetDadosEstoquePorVarianteID(id)
        .then(res => {
          //console.log("Res", res);
          var LVariante = res.data[0];
          if (LVariante) {
            document.getElementById("qtd" + LVariante.id_variante).value =
              LVariante.quantidade || 0;
            document.getElementById(
              "qtd_minima" + LVariante.id_variante
            ).value = LVariante.quantidade || 0;
            document.getElementById("input_" + LVariante.id_variante).checked =
              LVariante.gerencia_estoque;
            this.gerencia_estoque["check" + id] = LVariante.gerencia_estoque;
            // console.log(
            //   "Gerencia Estoque",
            //   this.gerencia_estoque["check" + id]
            // );
          }
        })
        .catch(error => {
          console.log("Erro ao atualizar o gerenciamento de estoque");
          API_NOTIFICATION.HideLoading();
        });
    },
    getCheckedInputGerenciaEstoque(id) {
      setTimeout(() => {
        var LChecked = document.getElementById("input_" + id);
        // console.log("Checked", LChecked.checked);
        return LChecked.checked;
      }, 1000);
    },
    getClass(id) {
      setTimeout(() => {
        // console.log("Resultado:" + id, this.gerencia_estoque["check" + id]);
        if (this.gerencia_estoque["check" + id] !== undefined) {
          var LClass =
            this.gerencia_estoque["check" + id] == 1 ? "ativo" : "inativo";
          return LClass;
        } else {
          return "inativo";
        }
      }, 1000);
    },
    getSituacaoGerenciaEstoque(id) {
      setTimeout(() => {
        if (this.gerencia_estoque["check" + id] !== undefined) {
          return this.gerencia_estoque["check" + id] == 1;
        } else {
          return 0;
        }
      }, 1000);
    },
    getCripto(id_produto, id_variante) {
      // console.log(id_produto);
      const hashids = new Hashids("", 0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      const produtHashed = hashids.encode(
        id_produto.toString(),
        id_variante.toString()
      );
      // const numbers = hashids.decode(produtHashed);
      // console.log("ID Hashedid", produtHashed);
      // console.log("ID Deshashed", numbers);
      return produtHashed;
    },
    obterCheckout(id_produto){
      //https://thuor.com/templates/checkoutmp.js
      const code = '&lt;script src="https://app.thuor.com/templates/checkoutmp.js"&gt;&lt;/script&gt;<br>&lt;checkout-mp id_produto="'+id_produto+'"&gt;&lt;/checkout-mp&gt;';
      const title = "<strong>Atenção!</strong>";
      
      const html = "<div class='card card-default'><p>Copie o código a seguir e insira na sua página de vendas.</p><br/><br/> <small class='fontSizeSmall'>"+code+"</small> <br/><br/><strong>Se você não tem conhecimento, fale com alguém que tenha ou vá até a página de ajuda para saber como instalar.</strong> <br><small>Lembre-se: esse checkout está disponível, por enquanto, apenas para o MercadoPago. Então verifique se o seu checkout do MercadoPago está ativo para tal.</small></div>";
      API_NOTIFICATION.showDynamicHTML(title, '', html);
    },
    obterVariantes(id_produto){
      //https://thuor.com/templates/checkoutmp.js
      const code = '&lt;script src="https://app.thuor.com/templates/prods_opts.min.js"&gt;&lt;/script&gt;<br>&lt;thuor-opcoes id_produto="'+id_produto+'" direct_to_checkout="true"&gt;&lt;/thuor-opcoes&gt;';
      const title = "<strong>Atenção!</strong>";
      
      const html = "<div class='card card-default'><p>Copie o código a seguir e insira na sua página de vendas.</p><br/><br/> <small class='fontSizeSmall'>"+code+"</small> <br/><br/><strong>Se você não tem conhecimento, fale com alguém que tenha ou vá até a página de ajuda para saber como instalar.</strong> <br><small>Lembre-se: a tag direct_to_checkout deve ser 'true' ou 'false'. Qualquer outro valor será considerado como false e o seu cliente será enviado para a tela de carrinho.</small></div>";
      API_NOTIFICATION.showDynamicHTML(title, '', html);
    },
  }
};
</script>
