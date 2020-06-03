<style scoped>
.icon {
  background: #ffffff
    url("http://icons.iconarchive.com/icons/gakuseisean/ivista-2/16/Start-Menu-Search-icon.png")
    no-repeat 4px 4px;
  padding: 4px 4px 4px 22px;
  height: 18px;
  content: "OpaOpa";
}
​ .cursorP {
  cursor: pointer !important;
}
.opcaoSelecionada {
  background-color: #23b7e5;
  color: white;
  font-weight: bold;
  height: 65px !important;
}
.opcaoDeselecionada {
  font-weight: bold;
  color: gray;
  height: 65px !important;
}
.avatar {
  vertical-align: middle !important;
  width: 80px !important;
  height: auto !important;
  border-radius: 50% !important;
  height: 55px !important;
}
.marginZeroAuto {
  margin: 0 auto !important;
}
.ql-container .ql-editor p {
  min-height: 200px !important;
  height: 200px !important;
}
.qlEditor p {
  min-height: 200px !important;
}
div > p {
  min-height: 200px !important;
  height: 200px !important;
}
.ql-editor {
  height: 200px !important;
}
.plan-features {
  text-decoration: none;
  list-style: none;
}
.priceFont {
  font-size: 50px;
  font-weight: 900;
  color: #23b7e5;
  font-family: Rubik, sans-serif;
}
.priceFontAddOn {
  font-size: 14px;
  font-weight: 900;
  color: #23b7e5;
  font-family: Rubik, sans-serif;
}
.month {
  font-family: Rubik, sans-serif;
  font-size: 22px;
  color: #23b7e5;
}
.simbolPrice {
  color: #23b7e5;
  font-family: Rubik, sans-serif;
  font-size: 22px;
}
.checkColor {
  color: #7ac129;
}
.checkInformation {
  font-size: 11px !important;
}

.Selecionado {
  border-color: #cfdbe2;
  background-color: #f4f6f8;
}
.DeSelecionado {
  border-color: #23b7e5;
}

.SelecionadoH {
  border-color: #cfdbe2;
  background-color: #f4f6f8;
}
.DeSelecionadoH {
  border-color: #23b7e5;
}
.bold {
  font-family: Rubik, sans-serif;
  font-size: 35px !important;
  font-weight: 900;
  color: #23b7e5;
}
.bold-md {
  font-family: Rubik, sans-serif;
  font-size: 25px !important;
  font-weight: 900;
  color: #23b7e5;
}
.cobradoPor {
  font-family: Rubik, sans-serif;
  font-size: 12px !important;
  font-weight: 900;
}
</style>
<template>
  <ContentWrapper>
    <!-- <div class="content-heading" v-show="usuario.nome">
      <span class="fa fa-user">
        <span class="ml-2"></span>
      </span>Perfil do Vendedor
    </div>-->
    <div class="content-heading" v-show="usuario.nome">
      <span class="fa fa-user">
        <span class="ml-2"></span>
      </span>
      Perfil do Vendedor: {{usuario.nome}}
    </div>
    <!-- START row-->
    <div class="row">
      <div class="col-xl-12">
        <form
          @submit.prevent="validateBeforeSubmit('dadosProcessamento')"
          data-vv-scope="dadosProcessamento"
        >
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header">
              <div class="card-title">Informações</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="col-form-label">Nome do Responsável *</label>
                <input
                  :class="{'form-control':true, 'is-invalid': errors.has('usuario.nome')}"
                  v-model="usuario.nome"
                  readonly
                  placeholder
                  v-validate="'required'"
                  type="text"
                  name="nome"
                />
                <span
                  v-show="errors.has('usuario.nome')"
                  class="invalid-feedback"
                >{{ errors.first('usuario.nome') }}</span>
              </div>
              <!-- HTML DE ASSINATURA  -->
              <div class="row mt-3">
                <div class="col-xl-4">
                  <!-- Aside card-->
                  <div class="card b">
                    <div class="card-body bb">
                      <div class="clearfix">
                        <div class="float-left p-1 row">
                          <span class="spanNome col-md-12">
                            <strong class="bold">Assinatura</strong>
                          </span>
                          <small
                            class="text-justify col-md-12"
                          >Acompanhe o status da sua assinatura, gerencie seu plano e informações de pagamento.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end Aside card-->
                </div>
                <div class="col-xl-8">
                  <!-- Main card-->
                  <div class="card b">
                    <div class="card-header">
                      <div class="my-2 row p-0">
                        <span class="col-md-5 mt-2">Dados da assinatura aqui</span>

                        <div class="float-right mt-2 col-md-1">
                          <span class="pull-right float-right"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Main card-->
                </div>
              </div>
              <!-- END HTML DE ASSINATURA -->
              <!-- HTML DE DADOS DE FATURAMENTO E PAGAMENTOS JÁ REALIZADOS -->
              <div class="row mt-3">
                <div class="col-xl-4">
                  <!-- Aside card-->
                  <div class="card b">
                    <div class="card-body bb">
                      <div class="clearfix">
                        <div class="float-left p-1 row">
                          <span class="spanNome col-md-12">
                            <strong class="bold-md">Meus Pagamentos</strong>
                          </span>
                          <small
                            class="text-justify col-md-12"
                          >Veja todos os detalhes de seus pagamentos.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end Aside card-->
                </div>
                <div class="col-xl-8">
                  <!-- Main card-->
                  <div class="card b">
                    <div class="card-header">
                      <div class="my-2 row p-0">
                        <span class="col-md-5 mt-2">Grid de Pagamentos Realizados</span>

                        <div class="float-right mt-2 col-md-1">
                          <span class="pull-right float-right"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Main card-->
                </div>
              </div>
              <!-- END HTML DE DADOS DE FATURAMENTO E PAGAMENTOS JÁ REALIZADOS -->
              <div class="container container-lg py-4">
                <div class="text-center mb-0 pb-0">
                  <div class="h2 text-bold text-left">Assinatura</div>
                  <small
                    class="text-left pull-left float-left"
                  >Escolha sua assinatura e Altere Quando Quiser!</small>
                </div>
              </div>
              <div class="container container-lg">
                <div class="row">
                  <!-- PLAN-->
                  <div
                    class="col-lg-4 mt-3 card card-default mr-0 selectedPlan"
                    :id="nome"
                    v-for="{id, nome, price, addon, benefits} in planArray"
                    :key="id"
                  >
                    <div class="plan">
                      <div
                        class="plan-header card-header"
                        :class="usuario.plano_escolhido == 1 ? 'SelecionadoH' : 'DeSelecionadoH'"
                      >
                        <div class="card-title bold text-center">{{nome}}</div>
                      </div>
                      <div class="plan-price card-body">
                        <div class="text-lg">
                          <sup>
                            <small class="simbolPrice">R$</small>
                          </sup>
                          <strong>
                            <span class="priceFont">{{price}}</span>
                            <span class="month">/mês</span>
                          </strong>
                          <!-- span.plan-period /mo-->
                        </div>
                        <div class="text-center my-1">
                          <div class="text-bold text-justify">
                            <strong class="priceFontAddOn">+{{addon}}</strong>
                            <span class="porpedido ml-1">por pedido pago</span>
                          </div>
                        </div>
                        <strong class="cobradoPor">* Cobrado por semana *</strong>
                      </div>
                      <ul class="plan-features text-justify pl-0">
                        <li class="checkInformation" v-for="{title} in benefits" :key="title">
                          <em class="fa fa-check mr-2 checkColor"></em>
                          {{title}}
                        </li>
                      </ul>
                      <hr />
                      <div class="text-center mb-3">
                        <button
                          type="button"
                          class="btn btn-lg btn-info"
                          v-on:click="escolherPlano(id, nome)"
                        >Escolher {{nome}}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                <div class="clearfix">
                  <div class="row">
                    <div class="form-group col-lg-4">
                      <label class="col-form-label">Nº do Cartão *</label>
                      <input
                        @input="verificaDigitosCartao()"
                        class="col-lg-9 mt-1"
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.numero_cartao')}"
                        v-model="dadosProcessamento.numero_cartao"
                        placeholder="4111 1111 1111 1111"
                        v-validate="'required'"
                        type="text"
                        name="numero_cartao"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.numero_cartao')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.numero_cartao') }}</span>
                    </div>
                    <div class="form-group col-lg-4">
                      <label class="col-form-label">Validade *</label>
                      <div class="row">
                        <input
                          class="col-lg-3 ml-3 mt-1"
                          :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.mes_validade')}"
                          v-model="dadosProcessamento.mes_validade"
                          placeholder="06"
                          maxlength="2"
                          v-validate="'required'"
                          type="text"
                          name="mes_validade"
                        />
                        <input
                          class="col-lg-4 ml-3 mt-1"
                          :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.ano_validade')}"
                          v-model="dadosProcessamento.ano_validade"
                          placeholder="2025"
                          maxlength="4"
                          v-validate="'required'"
                          type="text"
                          name="ano_validade"
                        />
                      </div>
                      <span
                        v-show="errors.has('dadosProcessamento.ano_validade')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.ano_validade') }}</span>
                      <span
                        v-show="errors.has('dadosProcessamento.ano_validade')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.ano_validade') }}</span>
                    </div>
                    <div class="form-group col-lg-4">
                      <label class="col-form-label">Cod. de Seg. *</label>
                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.codigo_seguranca')}"
                        v-model="dadosProcessamento.codigo_seguranca"
                        class="col-md-4 mt-1"
                        placeholder="123"
                        v-validate="'required'"
                        type="text"
                        name="codigo_seguranca"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.codigo_seguranca')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.codigo_seguranca') }}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Nome (impresso no cartão) *</label>
                    <input
                      :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.nome_completo')}"
                      v-model="dadosProcessamento.nome_completo"
                      placeholder
                      v-validate="'required'"
                      type="text"
                      name="nome_completo"
                    />
                    <span
                      v-show="errors.has('dadosProcessamento.nome_completo')"
                      class="invalid-feedback"
                    >{{ errors.first('dadosProcessamento.nome_completo') }}</span>
                  </div>
                  <div class="row col-lg-12">
                    <strong>Endereço de Faturamento (o mesmo da fatura do seu cartão)</strong>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-3">
                      <label class="col-form-label">CEP *</label>

                      <input
                        @input="consultaCEP()"
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.cep')}"
                        autocomplete="zipcode"
                        class="col-lg-8"
                        v-validate="'required'"
                        type="text"
                        name="cep"
                        v-model="dadosProcessamento.cep"
                        placeholder="Seu CEP"
                      />

                      <span
                        v-show="errors.has('dadosProcessamento.nome_completo')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.nome_completo') }}</span>
                    </div>
                    <div class="form-group col-lg-3">
                      <label class="col-form-label">Estado *</label>

                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.estado')}"
                        autocomplete="estado"
                        class="col-lg-6"
                        v-validate="'required'"
                        type="text"
                        name="estado"
                        v-model="dadosProcessamento.estado"
                      />

                      <span
                        v-show="errors.has('dadosProcessamento.estado')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.estado') }}</span>
                    </div>
                    <div class="form-group col-lg-6">
                      <label class="col-form-label">Cidade *</label>

                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.cidade')}"
                        autocomplete="cidade"
                        class="col-lg-12"
                        v-validate="'required'"
                        type="text"
                        name="cidade"
                        v-model="dadosProcessamento.cidade"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.cidade')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.cidade') }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-lg-8">
                      <label class="col-form-label">Endereço *</label>

                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.endereco')}"
                        autocomplete="address"
                        class="col-lg-12"
                        v-validate="'required'"
                        type="text"
                        name="endereco"
                        v-model="dadosProcessamento.endereco"
                      />

                      <span
                        v-show="errors.has('dadosProcessamento.nome_completo')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.nome_completo') }}</span>
                    </div>
                    <div class="form-group col-lg-4">
                      <label class="col-form-label">Bairro *</label>

                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.bairro')}"
                        autocomplete="bairro"
                        class="col-lg-12"
                        v-validate="'required'"
                        type="text"
                        name="bairro"
                        v-model="dadosProcessamento.bairro"
                      />

                      <span
                        v-show="errors.has('dadosProcessamento.bairro')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.bairro') }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-2">
                      <label class="col-form-label">Numero *</label>

                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.numero_porta')}"
                        autocomplete="numero_porta"
                        class="col-lg-8"
                        v-validate="'required'"
                        type="text"
                        name="numero_porta"
                        v-model="dadosProcessamento.numero_porta"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.numero_porta')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.numero_porta') }}</span>
                    </div>

                    <div class="form-group col-lg-10">
                      <label class="col-form-label">Complemento *</label>

                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.complemento')}"
                        autocomplete="complemento"
                        class="col-lg-12"
                        v-validate="'required'"
                        type="text"
                        name="complemento"
                        v-model="dadosProcessamento.complemento"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.complemento')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.complemento') }}</span>
                    </div>
                  </div>
                  <div class="row col-md-12">
                    <small
                      class="text-justify"
                    >A atualização do cartão de crédito não faz upgrade de assinatura. O Thuor emitirá uma autorização temporária de R$ 1,50 no seu cartão apenas para confirmar a existência do mesmo. Trata-se apenas de uma autorização, e NÃO uma cobrança. Ao cadastrar um cartão, você autoriza o Thuor salvar suas informações para realizar os seus pagamentos.</small>
                  </div>
                  <div class="row col-md-12 mt-2">
                    <strong>
                      <span class="fa fa-lock mr-1"></span>Ambiente 100% Seguro
                    </strong>
                  </div>
                  <div class="float-right">
                    <button class="btn btn-lg btn-primary" type="submit">
                      <span class="fa fa-save"></span> Salvar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->
        </form>
      </div>
    </div>
    <!-- END row-->
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { min, max, numeric } from "vee-validate/dist/rules.esm";
import { Validator } from "vee-validate";
import pt from "vee-validate/dist/locale/pt_BR";
import API_PRODUTOS from "../../api/produtosAPI";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import API_LOJA from "../../api/lojaAPI";
import Hashids from "hashids";
import UTILIS_API from "../../api/utilisAPI";
import constantes from "../../api/constantes";
import API_CHECKOUT_THUOR_COMISSION from "../../api/checkoutAPIThuorComission";
// Tag inputs
Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    this.planArray = constantes.CONSTANTES_PLA;
    this.checkIfLogged();
  },
  mounted() {
    this.$validator.localize("pt", {
      messages: {
        required: field => "* Este campo é obrigatório."
      },
      attributes: {}
    });
    const plugin = document.createElement("script");
    plugin.onload = function() {
      console.log("Carregado Script MP");
    };
    plugin.setAttribute(
      "src",
      "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },

  data() {
    return {
      selectedPlan: 0,
      planArray: [],
      mensagemID: 0,
      MensagemString: [],
      paymentData: "",
      dadosProcessamento: {
        metodoPag: "",
        numero_cartao: "",
        nome_completo: "",
        mes_validade: "",
        ano_validade: "",
        cep: "",
        bairro: "",
        cidade: "",
        estado: "",
        pais: "",
        endereco: "",
        numero_porta: "",
        complemento: "",
        valor: "1.50"
      },
      usuario: {
        plano_escolhido: 0,
        data: "",
        nome: "",
        status: 1,
        id_usuario: 0
      },
      buttonPressed: 0,
      buttonPressedDois: 0,
      vueSelectMultipleValue: ""
    };
  },
  methods: {
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
    },
    validateBeforeSubmit(scope) {
      var self = this;

      this.$validator
        .validateAll(scope)
        .then(result => {
          if (result) {
            console.log("Form Submitted!");
            this.usuario.data = new Date();
            this.ProcessaAutorizacao();
            return;
          }
          console.log("Correct them errors!", result);
        })
        .catch(erros => {
          console.log("Errros", erros);
        });
    },
    salvarMensagem() {
      API_NOTIFICATION.ShowLoading();
      API_usuario.SaveMensagem(this.usuario)
        .then(res => {
          API_NOTIFICATION.showNotificationW(
            "Pronto!",
            "Mensagem Salva com sucesso!",
            "success"
          );
          var self = this;
          setTimeout(() => {
            self.$router.push("/marketing/usuario");
          }, 1500);
        })
        .catch(error => {
          console.log("Erro ao salvar a mensagem", error);
        });
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(async res => {
          this.usuario = await API_LOGIN.GetUserByID(res.data.id);
          this.usuario = this.usuario.data;
          console.log(this.usuario);
          API_LOJA.GetDadosLojaByIdUsuario(res.data.id)
            .then(resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              if (
                this.usuario.plano_escolhido == 0 ||
                this.usuario.plano_escolhido == undefined
              ) {
                this.escolherPlano(1, "Basic");
              }
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log("Erro ao pegar dados da loja", error);
            });
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
          if (error.response.status === 401) {
            this.$router.go("login");
          }
        });
    },
    collapse(id, idComando, btn) {
      const element = document.querySelector(id);
      const elementComando = document.querySelector(idComando);
      const btnbtn = document.querySelector(btn);
      if (element.classList.contains("show")) {
        this.buttonPressed = 0;
        element.classList.remove("show");
      } else {
        this.buttonPressed = 1;
        element.classList.add("show");
      }
    },
    SelectedValueProdutoUm(id, titulo, image) {
      var LDiv =
        '<div class="data padding1010 cursorP"><img style="border-radius:50%!important; padding-top: 0px!important;    height: 47px!important;    padding: 0px!important;    width: 50px!important;    margin-left: 12px;" class="col-md-2 mb-0 avatar float-left pull-left text-left mt-2" src="' +
        image +
        '" />  <p class="col-md-8 mb-0 dataPedido mt-2 pull-left float-left" style="top: 15px!important; text-align:left!important">' +
        titulo +
        "</p></div>";
      this.novoupsell.id_produto_selecionado_um = id;
      const el = document.getElementById("buttonProdutoUm");
      el.innerHTML = LDiv;
      this.collapse("#collapseExample", "#collapseExample", "#buttonProdutoUm");
    },
    SelectedValueProdutoDois(id, titulo, image) {
      var LDiv =
        '<div class="data padding1010 cursorP"><img style="border-radius:50%!important; padding-top: 0px!important;    height: 47px!important;    padding: 0px!important;    width: 50px!important;    margin-left: 12px;" class="col-md-2 mb-0 avatar float-left pull-left text-left mt-2" src="' +
        image +
        '" />  <p class="col-md-8 mb-0 dataPedido mt-2 pull-left float-left" style="top: 15px!important; text-align:left!important">' +
        titulo +
        "</p></div>";
      this.novoupsell.id_produto_selecionado_dois = id;
      const el = document.getElementById("buttonProdutoDois");
      el.innerHTML = LDiv;
      this.collapse(
        "#collapseExampleDois",
        "#collapseExampleDois",
        "#buttonProdutoDois"
      );
    },
    removeItem(id) {
      console.log("Removendo ID", id);
    },

    escolherPlano(plano, nome) {
      this.selectedPlan = plano;
      const ArrayP = constantes.CONSTANTES_PLA;
      ArrayP.forEach((obj, i) => {
        const LDiv = document.getElementById(obj.nome);
        if (LDiv) {
          LDiv.classList.remove("Selecionado");
          LDiv.classList.add("DeSelecionado");
        }
        if (plano == obj.id) {
          const LNovoSelecionado = document.getElementById(nome);
          LNovoSelecionado.classList.add("Selecionado");
        }
      });

      this.usuario.plano_escolhido = plano;
    },
    getClass(id, nome) {
      //{'Selecionado': usuario.plano_escolhido == id, 'DeSelecionado': usuario.plano_escolhido != id}
    },
    verificaDigitosCartao() {
      if (this.DadosCheckout.gateway == 1) {
        const binCard = this.usuario.numero_cartao.replace(/ /g, "");
        if (binCard.length >= 6) {
          let bin = binCard.substring(0, 6);
          window.Mercadopago.getPaymentMethod(
            {
              bin: bin
            },
            (status, response) => {
              if (status == 200) {
                this.dadosProcessamento.metodoPag = response[0].id;
              } else {
                alert(`payment method info error: ${response}`);
              }
            }
          );
        }
      }
      this.maskCardNumber();
    },
    maskCardNumber() {
      if (this.payment_id == "amex") {
        this.dadosProcessamento.numero_cartao = this.dadosProcessamento.numero_cartao.replace(
          /(\d{4})(\d{4})(\d{4})(\d{3})/,
          "$1 $2 $3 $4"
        );
      } else {
        this.dadosProcessamento.numero_cartao = this.dadosProcessamento.numero_cartao.replace(
          /(\d{4})(\d{4})(\d{4})(\d{4})/,
          "$1 $2 $3 $4"
        );
      }
    },
    consultaCEP() {
      var self = this;
      if (this.dadosProcessamento.cep.length >= 8) {
        this.dadosProcessamento.cep = this.dadosProcessamento.cep.replace(
          /(\d{5})(\d{3})/,
          "$1-$2"
        );
        API_NOTIFICATION.ShowLoading();
        UTILIS_API.VIA_CEP(this.dadosProcessamento.cep.replace(/[.-]/g, ""))
          .then(retornoCEP => {
            console.log(retornoCEP);
            self.dadosProcessamento.endereco = retornoCEP.logradouro;
            self.dadosProcessamento.bairro = retornoCEP.bairro;
            self.dadosProcessamento.cidade = retornoCEP.localidade;
            self.dadosProcessamento.estado = retornoCEP.uf;
            self.dadosProcessamento.complemento = retornoCEP.complemento;
            API_NOTIFICATION.HideLoading();
          })
          .catch(error => {
            self.dadosProcessamento.endereco = "";
            self.dadosProcessamento.bairro = "";
            self.dadosProcessamento.cidade = "";
            self.dadosProcessamento.estado = "";
            self.dadosProcessamento.complemento = "";
            console.log(
              "Erro ao tentar pegar dados do endereço do usuário",
              error
            );
          });
      } else {
        self.dadosProcessamento.endereco = "";
        self.dadosProcessamento.bairro = "";
        self.dadosProcessamento.cidade = "";
        self.dadosProcessamento.estado = "";
        self.dadosProcessamento.complemento = "";
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async ProcessaAutorizacao() {
      var FormToken = await UTILIS_API.CREATE_FORM_MP(
        constantes.CONSTANTE_THUOR,
        this.formatPrice(this.dadosProcessamento.valor),
        this.dadosProcessamento.numero_cartao.trim().replace(/ /g, ""),
        this.dadosProcessamento.nome_titular,
        this.dadosProcessamento.validade.split("/")[0],
        "20" + this.dadosProcessamento.validade.split("/")[1],
        this.dadosProcessamento.codigo_seguranca,
        1,
        this.dadosProcessamento.cpf_titular.replace(/[.-]/g, ""),
        constantes.CONSTANTE_THUOR_EMAIL,
        this.dadosProcessamento.metodoPag
      );
      window.Mercadopago.createToken(FormToken, this.iniciaPagamentoBackEnd);
    },
    async iniciaPagamentoBackEnd(status, response) {
      var LRouter = router;
      if (status != 200 && status != 201) {
        //console.log("Não foi possível gerar o token", response.message);
        window.Mercadopago.clearSession();
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "Não foi possível completar a ação. Tente novamente!",
          "warning"
        );
      } else {
        this.cardToken = response.id;
        //while (this.try == false) {
        ///console.log(this.cardToken);
        var paymentData = {
          transaction_amount: this.formatPrice(this.dadosProcessamento.valor),
          token: this.dadosProcessamento.token,
          description: constantes.CONSTANTE_THUOR,
          installments: 1,
          payment_method_id: this.dadosProcessamento.metodoPag,
          payer: {
            email: constantes.CONSTANTE_THUOR_EMAIL
          }
        };
        this.usuario.dadosProcessamento = this.dadosProcessamento;
        this.usuario.paymentData = paymentData;
        API_NOTIFICATION.ShowLoading();
        API_CHECKOUT_THUOR_COMISSION.DoPayBackEnd(paymentData)
          .then(async retornoPay => {
            if (
              retornoPay.data.status != undefined &&
              (retornoPay.data.status.toUpperCase() == "REJECTED" ||
                retornoPay.data.status.toUpperCase() == "CANCELED" ||
                retornoPay.data.status.toUpperCase() == "VACATED")
            ) {
              API_NOTIFICATION.showNotificationW(
                "Oops!",
                "Pagamento Rejeitado. Por favor, tente novamente.",
                "error"
              );
              return;
            }
            window.Mercadopago.clearSession();
            const LUser = await UTILIS_API.GetUserSession();
            if (LUser) {
              API_LOGIN.UpdateUser(
                LUser.user.id,
                this.usuario.plano_escolhido,
                this.usuario
              )
                .then(resUpdate => {
                  API_NOTIFICATION.showNotificationW(
                    "Pronto!",
                    "Plano Registrado Com Sucesso. Esperamos que você venda muito! Conte conosco sempre!",
                    "success"
                  );
                })
                .catch(error => {
                  console.log("Erro ao tentar atualizar o usuário", error);
                  API_NOTIFICATION.HideLoading();
                });
            }
          })
          .catch(error => {
            console.log("Erro ao tentar efetuar o pagamento", error);
            API_NOTIFICATION.showNotificationW(
              "Pagamento Rejeitado",
              "Por favor, tente novamente ",
              "error"
            );
          });

        //break;
      }
    }
  }
};
</script>
