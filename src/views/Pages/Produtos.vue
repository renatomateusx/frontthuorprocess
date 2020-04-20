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
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        <span class="fa fa-tag"></span> Produtos
        <small>
          Todos os seus produtos estão aqui?
          <br />Pode demorar um tempo até que a sua loja nos envie. Caso queira forçar, clique no botão de importar abaixo.
        </small>
      </div>
    </div>
    <!-- START card-->
    <div class="card card-default">
      <div class="card-header">
        <button
          class="btn btn-secondary borderButton"
          type="button"
          v-on:click="importFromShopify()"
        >
          <img class="shopifysvg" src="../../../public/img/shopify.svg" /> Importar do Shopify
        </button>
      </div>
      <!-- START table-responsive-->
      <div class="table-responsive">
        <table class="table table-bordered table-hover" id="table-ext-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>VARIANTES</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="{id_produto_json, titulo_produto, json_dados_produto} in produtosList"
              :key="id_produto_json"
            >
              <td>
                <div class="checkbox c-checkbox">
                  <label>
                    <input type="checkbox" />
                    <span class="fa fa-check"></span>
                  </label>
                </div>
                <span class="id_produto">{{id_produto_json}}</span>
              </td>
              <td>
                <div class="media">
                  <img
                    class="img-fluid circle"
                    v-bind:src="JSON.parse(json_dados_produto).image.src"
                    alt="Image"
                  />
                  <span class="titulo_produto">
                    <router-link :to="{path: '/produto/detalhe/' + id_produto_json}">
                      <b>{{titulo_produto}}</b>
                    </router-link>
                  </span>
                </div>
              </td>
              <td>{{JSON.parse(json_dados_produto).variants.length}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END table-responsive-->
      <div class="card-footer">
        <div class="d-flex">
          <div>
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Filtro" />
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button">
                  <span class="fa fa-search"></span>
                </button>
              </div>
            </div>
          </div>
          <div class="ml-auto">
            <div class="input-group float-right">
              <select class="custom-select" id="inputGroupSelect01">
                <option value="0">Ações</option>
                <option value="1">Excluir</option>
                <option value="2">Duplicar</option>
                <option value="3">Desativar</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button">Aplicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- END row-->
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

Vue.use(Loading);

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  created() {
    this.checkIfLogged();
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
        rememberme: false
      },
      produtosList: {}
    };
  },
  methods: {
    showLoading() {
      Vue.prototype.$loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        fullPage: true,
        loader: "bars",
        color: "#007BFF",
        width: 80,
        height: 80
      });
    },
    hideLoading() {
      Vue.prototype.$loader.hide();
    },
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.showLoading();
          // simulate AJAX

          return;
        }
        console.log("Correct them errors!");
      });
    },
    checkIfLogged() {
      this.showLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_PRODUTOS.GetProdutos()
            .then(retProd => {
              var LImages = JSON.parse(retProd.data[0].json_dados_produto);
              console.log("Retorno Produtos", LImages.image.src);
              this.produtosList = retProd.data;
              this.hideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar produtos", error);
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.push("login");
          }
        });
    },
    importFromShopify() {
      this.showLoading();
      API_PRODUTOS.ImportFromShopify()
        .then(retorno => {
          this.hideLoading();
          API_PRODUTOS.GetProdutos()
            .then(retProd => {
              var LImages = JSON.parse(retProd.data[0].json_dados_produto);
              console.log("Retorno Produtos", LImages.image.src);
              this.produtosList = retProd.data;
              this.hideLoading();
              API_NOTIFICATION.Notifica(
                "Tudo Pronto",
                "Produtos Importados!",
                "success"
              );
            })
            .catch(error => {
              console.log("Erro ao pegar produtos", error);
            });
        })
        .catch(error => {
          this.hideLoading();
          API_NOTIFICATION.Notifica(
            "Oops!",
            "Ocorreu um problema ao tentar importar os produtos.",
            "error"
          );
          console.log("Erro ao importar produtos do shopify", error);
        });
    }
  }
};
</script>
