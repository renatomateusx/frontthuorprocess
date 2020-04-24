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
      <span class="fa fa-tag"></span>Produtos
    </div>
    <small>
      Todos os seus produtos estão aqui?
      <br />Pode demorar um tempo até que a sua loja nos envie. Caso queira forçar a importação, clique no botão de importar abaixo.
    </small>
    <p></p>
    <button type="button" v-on:click="importFromShopify()" class="btn btn-secondary btn-lg"><span class=""><img src="../../../public/img/shopify.svg" width="25" height="25px"></span> Importar do Shopify</button>
    <p></p>
    <Datatable :options="dtOptions1" class="table table-striped table-hover w-100"  id="tabela">
      <thead>
        <tr>
          <th style="width:120px">
            <strong>ID</strong>
          </th>
          <th style="width:500px">
            <strong>NOME</strong>
          </th>
          <th>
            <strong>VARIANTES</strong>
          </th>
          <th>
            <strong>ESTOQUE</strong>
          </th>          
          <th class="text-center">
            <strong>MOD. EM</strong>
          </th>
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
                <router-link :to="{path: '/produtos/detalhe/' + id_produto_json}">
                  <b>{{titulo_produto}}</b>
                </router-link>
              </span>
            </div>
          </td>
          <td>{{JSON.parse(json_dados_produto).variants.length}}</td>
          <td class="text-center">
            <span class="badge badge-success">Ativo</span>
          </td>
          
          <td>{{JSON.parse(json_dados_produto).updated_at | formatDate}}</td>
        </tr>
      </tbody>
    </Datatable>
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
import moment from 'moment'
Vue.use(Loading);

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
});

export default {
  components: {
    Datatable
  },
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
      dtOptions1: {
        data: this.produtosList,
        columns:[
          {title: 'ID'},
          {title: 'NOME'},
          {title: 'VARIANTES'},
          {title: 'ESTOQUE  '}

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
      produtosList: {}
    };
  },
  methods: {   
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
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(res => {
          API_PRODUTOS.GetProdutos()
            .then(retProd => {
              var LImages = JSON.parse(retProd.data[0].json_dados_produto);              
              this.produtosList = retProd.data;
              this.dtOptions1.data = this.produtosList;
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar produtos", error);
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    importFromShopify() {
      API_NOTIFICATION.ShowLoading();
      API_PRODUTOS.ImportFromShopify()
        .then(retorno => {
          
          API_PRODUTOS.GetProdutos()
            .then(retProd => {
              var LImages = JSON.parse(retProd.data[0].json_dados_produto);
              console.log("Retorno Produtos", LImages.image.src);
              this.produtosList = retProd.data;
              
              
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
          API_NOTIFICATION.HideLoading();
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
