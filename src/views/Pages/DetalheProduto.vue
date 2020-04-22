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
.btnSalvar{
  color: white;
  font-weight: bold;
  font-size:18px
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">Produto: {{this.produtoByID.title}}</div>
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
                  <b-input-group  size="lg" prepend="R$">
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
          <b-tab title="SEO Metadata">
            <fieldset>
              <div class="form-group row">
                <label class="col-lg-2 col-form-label">Title</label>
                <div class="col-lg-10">
                  <input class="form-control" type="text" placeholder="Brief description.." />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div class="form-group row">
                <label class="col-lg-2 col-form-label">Description</label>
                <div class="col-lg-10">
                  <textarea class="form-control" rows="5" placeholder="Max 255 characters..."></textarea>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div class="form-group row">
                <label class="col-lg-2 col-form-label">Keywords</label>
                <div class="col-lg-10">
                  <textarea class="form-control" rows="5" placeholder="Max 1000 characters..."></textarea>
                </div>
              </div>
            </fieldset>
          </b-tab>
          <b-tab title="Pictures">
            <div class="row mb-3">
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
            </div>
          </b-tab>
        </b-tabs>
      </form>
      <form class="card card-default col-lg-3 right marginLeft">
        <div class="card">
          <div class="card-body mb-0">
            <div class="text-center">
              <h3 class="mt-0">RESUMO</h3>
            </div>
            <hr />
            <p><b>Criado em:</b> {{this.produtoByID.created_at | formatDate}}</p>
            <p><b>Modificado em:</b> {{this.produtoByID.updated_at | formatDate}}</p>
            <hr />
          </div>

          <div class="arrow"></div>
          <!-- AQUI COMEÇA O COMPONENTE DA VARIANTE, DOLADO DIREITO. TRANSFORME EM COMPONENTE DEPOIS -->
          <div class="card card-default" v-for="{id, compare_at_price, price } in this.produtoByID.variants" :key="id">
            <div class="popover-body">
              <div class="d-flex align-items-center mb-2">
                <img class="mr-3 rounded-circle thumb48" src="img/user/05.jpg" alt="Image" />
                <p class="m-0">
                  <span class="text-muted">
                    <strong>SKU:</strong>
                  </span>
                  <br />
                  <span class="text-muted">
                    <strike>Preço âncora:</strike>
                  </span>
                  <span class="text-muted">
                    <strong>Preço promo:</strong>
                  </span>
                  <br />
                  <a class="text-muted" href="#">
                    <span class="fa fa-link"></span>
                    <strong>Link de Compra</strong>
                    <!-- AO CLICAR, COPIAR PARA O CLIBPBOARD -->
                  </a>
                </p>
              </div>
            </div>
          </div>
          <!-- AQUI TERMINA O COMPONENTE DA VARIANTE, DOLADO DIREITO. TRANSFORME EM COMPONENTE DEPOIS -->
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
      urlDirBoleto: '',
      urlDirCartao: '',
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
      console.log("Query Page", this.$route.params.id);
      var LID_PRODUTO = this.$route.params.id;
      API_LOGIN.VerificaToken()
        .then(res => {
          if (LID_PRODUTO !== undefined) {
            API_PRODUTOS.GetProdutoByID(LID_PRODUTO)
              .then(retProd => {
                var LImages = JSON.parse(retProd.data.json_dados_produto);
                console.log(JSON.parse(retProd.data.json_dados_produto));
                this.produtoByID = JSON.parse(retProd.data.json_dados_produto);
                this.produtoTable = retProd.data;
                this.statusProd = this.produtoTable.status;
                this.customFrete = this.produtoTable.custom_frete;
                this.preco_frete = this.produtoTable.preco_frete.trim();
                document.getElementById(
                  "preco_frete"
                ).value = this.produtoTable.preco_frete;
                console.log("Dados Produto", this.preco_frete);
                this.dtOptions1.data = this.produtosList;
                API_NOTIFICATION.HideLoading();
              })
              .catch(error => {
                console.log("Erro ao pegar produtos", error);
              });
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
    }
  }
};
</script>
