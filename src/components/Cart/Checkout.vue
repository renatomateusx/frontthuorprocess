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
  top: 1px;
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
  font-size: 11px;
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
.paddingZero {
  padding: 0;
}
.localidade {
  top: 5px !important;
  font-size: 12px;
}
.dadosPessoaisNomeCompletoVModel {
  color: #4d4d4d !important;
  font-weight: 700 !important;
  font-size: 15px;
}
.paddingTopBottomZERO {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.enderecoEntregaHeader {
  font-size: 15px;
  font-weight: 700;
  color: grey;
}
.opcaoSelecionada {
  background-color: #dcdcdc;
  color: black;
  font-weight: bold;
  border-color: #dcdcdc;
  border: 2px solid #ccc;
}
.opcaoDeselecionada {
  font-weight: bold;
  color: gray;
  border-color: 2px solid #23b7e5;
}
.btnFrete {
  padding: 15px;
  margin: 10px;
  cursor: pointer !important;
  border-radius: 10px;
}
.btnFormaPagamentoSelecionada {
  padding: 5px;
  margin: 5px;
  cursor: pointer !important;
  border-radius: 10px;
}
.smallInforFormaPagamentoBoleto {
  padding: 5px;
  margin: 5px;
  cursor: pointer !important;
  border-radius: 10px;
  color: black;
  background-color: #dcdcdc;
  border: 2px solid #ccc;
}
.selecionadoInfo {
  margin-top: 10px;
  color: blueviolet;
  text-align: right !important;
  float: right !important;
}
.ValorTotalResumo {
  background-color: #f5f5f5;
  border-radius: 9px;
  height: 40px;
  color: white !important;
}
.textValorTotal {
  color: black;
  font-weight: 700;
  font-size: 1.2em;
  display: block;
  margin: 0 auto;
  text-align: center;
  top: 5px;
}
.imgVariant {
  width: 50px;
  height: 50px;
  top: 7px;
  position: relative;
}
.textInfoFrete {
  text-align: left;
  font-size: 11px;
  white-space: pre-wrap;
}
#dropParcelas{
  width: 100%!important;
  margin-left: 0!important;
  padding-left: 0!important;
}
#dropParcelas__BV_toggle_{
  width: 100%!important;
  text-align: left;
}
#dropParcelas__BV_toggle_::after{
  text-align: right;
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
      <div class="row col-xl-10" style=" margin: 0 auto;">
        <!-- START STEP 1-->
        <div class="col-md-4 mt-1 cardSide">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="badge badge-blue iconBadge">1</span>
              <span class="dadosPessoais">Dados Pessoais</span>
              <span
                class="fa fa-edit pull-right float-right cursorP"
                v-show="stepDadosPessoaisFinalizados == 1"
                v-on:click="editarDadosPessoais()"
              ></span>
              <p>
                <small
                  class="textInformation col-md-10"
                >Solicitamos somente as informações essenciais para você fazer sua compra.</small>
              </p>
            </div>
            <div class="card-body minusmargintop" v-show="stepDadosPessoaisFinalizados == 1">
              <form class="form-horizontal">
                <div class="form-group row formGroup">
                  <label
                    class="col-xl-12 col-form-label labelForm dadosPessoaisNomeCompletoVModel paddingTopBottomZERO"
                    v-show="nome_completo"
                  >{{nome_completo}}</label>
                  <label
                    class="col-xl-12 col-form-label labelForm paddingTopBottomZERO"
                    v-show="email"
                  >{{email}}</label>
                  <label
                    class="col-xl-12 col-form-label labelForm paddingTopBottomZERO"
                    v-show="cpf"
                  >CPF: {{cpf}}</label>
                </div>
              </form>
            </div>
            <div class="card-body minusmargintop" v-show="stepDadosPessoaisFinalizados == 0">
              <form class="form-horizontal">
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">Nome Completo</label>
                  <div class="col-xl-12">
                    <input
                      class="form-control required"
                      autocomplete="name"
                      type="text"
                      minlength="5"
                      v-model="nome_completo"
                      id="nome_completo"
                      placeholder="Digite seu nome aqui"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-md-10 col-form-label labelForm">E-mail</label>
                  <div class="col-xl-12">
                    <input
                      autocomplete="email"
                      class="form-control"
                      type="email"
                      v-model="email"
                      id="email"
                      placeholder="Digite seu E-mail"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">CPF</label>
                  <div class="col-md-7">
                    <input
                      @input="maskCPF()"
                      minlength="14"
                      maxlength="14"
                      class="form-control required"
                      autocomplete="cpf"
                      type="text"
                      v-model="cpf"
                      placeholder="Digite seu CPF"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row formGroup">
                  <label
                    class="col-xl-12 col-form-label labelForm"
                    for="inlineFormInputGroup"
                  >Celular / WhatsApp</label>
                  <div class="col-xl-7 col-md-9">
                    <div class="input-group mb-0">
                      <div class="input-group-prepend">
                        <div class="input-group-text">+55</div>
                      </div>
                      <input
                        class="form-control"
                        id="inlineFormInputGroup"
                        type="text"
                        minlength="15"
                        maxlength="15"
                        @input="maskTelefone()"
                        v-model="telefone"
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
                  <div class="col-xl-12">
                    <button
                      class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                      v-on:click="validarStep(currentStep)"
                      type="button"
                    >
                      Continuar
                      <span
                        class="fa fa-arrow-right ml-2"
                        style="position:relative; top:1px"
                      ></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 1-->
        <!-- START STEP 2-->
        <div
          class="col-md-4 mt-1 cardSide"
          v-bind:class="currentStep == 2 || stepDadosEnderecoFinalizados == 1 ? '': 'disabledBox'"
        >
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="badge badge-blue iconBadge">2</span>
              <span class="dadosPessoais">Endereço</span>
              <span
                class="fa fa-edit pull-right float-right cursorP"
                v-show="stepDadosEnderecoFinalizados == 1"
                v-on:click="editarEndereco()"
              ></span>
              <p>
                <small class="textInformation col-md-10">Cadastre ou selecione um endereço.</small>
              </p>
            </div>
            <div class="card-default minusmargintop" v-show="stepDadosEnderecoFinalizados == 1">
              <div class="card-body">
                <form class="form-horizontal">
                  <div class="form-group row formGroup">
                    <label
                      class="col-xl-12 col-form-label labelForm enderecoEntregaHeader paddingTopBottomZERO"
                      v-show="endereco"
                    >
                      <b>Endereço de Entrega:</b>
                    </label>
                    <label
                      class="col-xl-12 col-form-label labelForm paddingTopBottomZERO"
                      v-show="endereco"
                    >
                      <b>{{endereco}} - {{bairro}}</b>
                    </label>
                    <label
                      class="col-xl-12 col-form-label labelForm paddingTopBottomZERO"
                      v-show="cidade"
                    >{{cidade}}-{{estado}}</label>
                    <label
                      class="col-xl-12 col-form-label labelForm paddingTopBottomZERO"
                      v-show="CEP"
                    >CEP: {{CEP}}</label>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-body minusmargintop" v-show="stepDadosEnderecoFinalizados == 0">
              <form class="form-horizontal">
                <div class="form-group row formGroup">
                  <label class="col-xl-12 col-form-label labelForm">CEP</label>
                  <div class="col-md-6">
                    <input
                      @input="consultaCEP()"
                      class="form-control required"
                      autocomplete="zipcode"
                      type="text"
                      id="cep"
                      v-model="CEP"
                      placeholder="Digite seu CEP"
                    />
                  </div>
                  <span
                    class="localidade col-md-6 pull-left float-left text-left"
                    v-show="this.cidade"
                  >{{this.cidade}} - {{this.estado}}</span>
                </div>
                <div class="form-group row formGroup" v-show="endereco">
                  <label class="col-md-12 col-form-label labelForm">Endereço</label>
                  <div class="col-xl-12">
                    <input
                      autocomplete="address"
                      class="form-control"
                      type="address"
                      id="endereco"
                      v-model="endereco"
                      placeholder="Digite seu E-mail"
                    />
                  </div>
                </div>
                <div class="form-group row formGroup" v-show="endereco">
                  <div class="col-md-6 mt-1">
                    <label class="col-xl-12 col-form-label labelForm paddingZero mb-1">Número</label>
                    <input
                      class="form-control required"
                      autocomplete="number"
                      type="text"
                      v-model="numero_porta"
                    />
                  </div>

                  <div class="col-md-6 mt-1" v-show="bairro">
                    <label class="col-xl-6 col-form-label labelForm paddingZero mb-1">Bairro</label>
                    <input
                      class="form-control required"
                      autocomplete="neighborhood"
                      type="text"
                      v-model="bairro"
                    />
                  </div>
                </div>
                <div class="form-group row formGroup" v-show="endereco">
                  <label class="col-xl-12 col-form-label labelForm">Complemento</label>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      autocomplete="complement"
                      v-model="complemento"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row formGroup" v-show="endereco">
                  <label class="col-xl-12 col-form-label labelForm">Destinatário</label>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      autocomplete="receiver"
                      v-model="destinatario"
                      type="text"
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <div class="col-xl-12">
                    <button
                      class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                      v-on:click="validarStep(currentStep)"
                      type="button"
                    >
                      Continuar
                      <span
                        class="fa fa-arrow-right ml-2"
                        style="position:relative; top:1px"
                      ></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- stepDadosEnderecoFinalizados == 1 &&  -->
            <div
              class="card-default minusmargintop"
              v-show="stepDadosEnderecoFinalizados == 1 && fretes"
              v-for="{id, status, nome, prazo, preco } in fretes"
              :key="id"
            >
              <div class="card-body">
                <form class="form-horizontal">
                  <div class="form-group row formGroup">
                    <button
                      type="button"
                      v-on:click="freteSelected(id)"
                      class="btn btn-secondary col-md-11 pull-left float-left btnFrete"
                      :class="freteSelecionado == id ? 'opcaoSelecionada':'opcaoDeselecionada'"
                    >
                      <p>
                        <span
                          class="text-left pull-left float-left col-md-10 textInfoFrete"
                        >{{nome}}</span>
                      </p>
                      <p>
                        <span
                          class="text-left pull-left float-left ml-0 col-md-10 textInfoFrete"
                        >Preço: R$ {{preco}}</span>
                      </p>
                      <p>
                        <span class="text-left pull-left float-left ml-0 col-md-10">
                          <small>Entrega garantida</small>
                        </span>
                      </p>
                      <p v-if="freteSelecionado == id">
                        <span class="text-left pull-left float-left ml-0 col-md-10 selecionadoInfo">
                          <small>Selecionado</small>
                        </span>
                      </p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 2-->
        <!-- START STEP 3-->
        <div class="col-md-4 mt-1 cardSide" v-bind:class="currentStep == 3 ? '': 'disabledBoxX'">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="badge badge-blue iconBadge">3</span>
              <span class="dadosPessoais">Pagamento</span>
              <p>
                <small class="textInformation col-md-10">Escolha abaixo uma forma de pagamento.</small>
              </p>
              <p>
                <small class="">
                  Processado por:
                  <img
                    v-bind:src="getImageProcessor()"
                    height="20px"
                    class="imageCompanyProcessor"
                  />
                </small>
              </p>

              <!-- MOSTRA AS OPÇÕES DE PAGAMENTO -->
              <div class="form-group row formGroup">
                <button
                  type="button"
                  v-on:click="formaPagamentoSelecionada('creditCard')"
                  class="btn btn-secondary col-md-11 pull-left float-left btnFormaPagamentoSelecionada"
                  :class="getClassSelected('creditCard')"
                >
                  <p>
                    <span class="text-left pull-left float-left col-md-10">Cartão de Crédito</span>
                  </p>
                  <p>
                    <span class="text-left pull-left float-left ml-0 col-md-10">
                      <small>Pagamento 100% seguro</small>
                    </span>
                  </p>
                  <p v-if="formaPagamento == 'creditCard'">
                    <span class="text-left pull-left float-left ml-0 col-md-10 selecionadoInfo">
                      <small>Selecionado</small>
                    </span>
                  </p>
                </button>
                <div class="card-body minusmargintop" v-show="formaPagamento =='creditCard'">
                  <form class="form-horizontal">
                    <div class="form-group row formGroup mt-3">
                      <label class="col-xl-12 col-form-label labelForm">Número do Cartão</label>
                      <div class="col-md-7">
                        <input
                          class="form-control required"
                          autocomplete="cc-number"
                          type="text"
                          id="card_number"
                        />
                      </div>
                    </div>
                    <div class="form-group row formGroup">
                      <label class="col-xl-12 col-form-label labelForm">Validade</label>
                      <div class="col-md-5">
                        <input
                          autocomplete="cc-exp"
                          class="form-control"
                          type="text"
                          id="validade"
                          placeholder="MM/AA"
                        />
                      </div>
                    </div>
                    <div class="form-group row formGroup">
                      <label class="col-xl-12 col-form-label labelForm">Nome do Titular do Cartão</label>
                      <div class="col-md-7">
                        <input class="form-control required" autocomplete="name" type="text" />
                      </div>
                    </div>
                    <div class="form-group row formGroup">
                      <label class="col-xl-12 col-form-label labelForm">Cód. de Segurança</label>
                      <div class="col-md-5">
                        <input class="form-control required" autocomplete="security" type="text" />
                      </div>
                    </div>
                    <div class="form-group row formGroup">
                      <label class="col-xl-12 col-form-label labelForm">CPF do Titular</label>
                      <div class="col-md-7">
                        <input
                          @input="maskCPF()"
                          minlength="14"
                          maxlength="14"
                          class="form-control required"
                          autocomplete="cpf_titular"
                          type="text"
                          v-model="cpf"
                          placeholder="Digite seu CPF"
                        />
                      </div>
                    </div>
                    <div class="form-group row formGroup">
                      <label
                        class="col-xl-2 col-form-label labelForm"
                        for="inlineFormInputGroup"
                      >Parcelas</label>
                      <div class="col-lg-12">
                        <small>Digite o cartão para selecionar as parcelas</small>
                                                 
                          <b-dropdown id="dropParcelas" text="Parcelas" class="m-md-2 pull-left float-left col-md-12" style="width:100%!important;">
                            <b-dropdown-item>First Action</b-dropdown-item>                                                        
                          </b-dropdown>
                        
                      </div>
                    </div>

                    <div class="form-group row mt-3">
                      <div class="col-xl-12">
                        <button
                          class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                          v-on:click="validarStep(currentStep)"
                          type="button"
                        >
                          <span class="fa fa-lock mr-2" style="position:relative; top:1px"></span>Comprar Agora
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  type="button"
                  v-on:click="formaPagamentoSelecionada('boleto')"
                  class="btn btn-secondary col-md-11 pull-left float-left btnFormaPagamentoSelecionada"
                  :class="getClassSelected('boleto')"
                >
                  <p>
                    <span class="text-left pull-left float-left col-md-10">Boleto</span>
                  </p>
                  <p>
                    <span class="text-left pull-left float-left ml-0 col-md-10">
                      <small>Processamento em 3 dias.</small>
                    </span>
                  </p>
                  <p v-if="formaPagamento == 'boleto'">
                    <span class="text-left pull-left float-left ml-0 col-md-10 selecionadoInfo">
                      <small>Selecionado</small>
                    </span>
                  </p>
                </button>
                <div class="card-body minusmargintop" v-show="formaPagamento =='boleto'">
                  <form class="form-horizontal">
                    <div class="form-group row mt-2">
                      <small
                        class="text-justify col-md-12 smallInforFormaPagamentoBoleto"
                      >Somente quando recebermos a confirmação, em até 72h após o pagamento, seguiremos com o envio das suas compras. O prazo de entrega passa a ser contado somente após a confirmação do pagamento.</small>
                    </div>
                    <div class="form-group row mt-2">
                      <span class="valorNoBoleto col-md-12 ml-1">
                        Valor no Boleto
                        <strong>R$ {{formatPrice(getTotal().total)}}</strong>
                      </span>
                    </div>
                    <div class="form-group row mt-3">
                      <div class="col-xl-12">
                        <button
                          class="btn btn-sm btn-primary btn-lg btn-block float-right mb-0 btnContinue"
                          v-on:click="validarStep(currentStep)"
                          type="button"
                        >
                          <span class="fa fa-lock mr-2" style="position:relative; top:1px"></span>Comprar Agora
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 3-->

        <!-- START STEP 4-->
        <div class="col-md-4 mt-1 cardSide">
          <!-- START card-->
          <div class="card card-default">
            <div class="card-header rounded">
              <span class="dadosPessoais">Resumo da Compra</span>
              <div class="col-md-12 ValorTotalResumo mt-3">
                <span class="textValorTotal col-md-12">Valor: R$ {{formatPrice(getTotal().total)}}</span>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="items">
                    <div
                      class="product"
                      v-for="{title, variant_id, variant_title, quantity, variant_price_ancora, variant_price, variant_img, id_thuor} in produtosCart"
                      :key="id_thuor"
                    >
                      <div class="row col-md-12">
                        <div class="mt-3 w-100">
                          <img class="rounded img-fluid float-left imgVariant" :src="variant_img" />
                          <div class="product-name">
                            <div class="product-name">
                              <a class="ml-2 w-100" href="#">{{title}}</a>
                              <div class="product-info">
                                <div>
                                  <span class="value ml-2">{{variant_title}}</span>
                                </div>
                              </div>
                              <div class="product-info">
                                <div>
                                  <span class="value ml-2">
                                    <small>
                                      {{quantity}} Unidade(s) -
                                      <b>R$ {{formatPrice(variant_price)}}</b>
                                    </small>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body minusmargintop"></div>
          </div>
          <!-- END card-->
        </div>
        <!-- END STEP 4-->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import Multiselect from "vue-multiselect";
import money from "v-money";
import API_NOTIFICATION from "../../api/notification";
import API_PRODUTOS from "../../api/produtosAPI";
import API_LOJA from "../../api/lojaAPI";
import UTILIS_API from "../../api/utilisAPI";
// Import stylesheet

import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import UTILIS from "../../utilis/utilis.js";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields" // fix issue with b-table
});
Vue.component("multiselect", Multiselect);
Vue.use(money, { precision: 2 });
export default {
  created() {
    if (sessionStorage.getItem("fretes") != null) {
      this.fretes = JSON.parse(sessionStorage.getItem("fretes"));
      console.log(this.fretes);
    }
    API_NOTIFICATION.ShowLoading();
    this.checkURL();
  },
  computed:{
    
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
      fretes: [],
      freteSelecionado: -1,
      dadosLoja: null,
      nomeLoja: "",
      currentStep: 1,
      nome_completo: "",
      telefone: "",
      cpf: "",
      email: "",
      CEP: "",
      endereco: "",
      numero_porta: "",
      bairro: "",
      complemento: "",
      destinatario: "",
      cidade: "",
      estado: "",
      stepDadosPessoaisFinalizados: 0,
      stepDadosEnderecoFinalizados: 0,
      valorTotalCompra: 0,
      valorFrete: 0,
      formaPagamento: "any",
      vueSelectValue: "",
      vueSelectOptions: [
        "Vue.js",
        "Adonis",
        "Rails",
        "Sinatra",
        "Laravel",
        "Phoenix"
      ]
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
        this.getTotal();
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
      if (sessionStorage.getItem("cart") != null) {
        this.produtosCart = JSON.parse(sessionStorage.getItem("cart"));
      }
      if (this.produtosCart != null) {
        this.produtosCart.forEach((item, i) => {
          subTotal = subTotal + item.variant_price_ancora * item.quantity;
          total = total + item.variant_price * item.quantity;
          discount = subTotal - total;
        });
        total = total + this.valorFrete;
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
    consultaCEP() {
      if (this.CEP.length >= 8) {
        this.CEP = this.CEP.replace(/(\d{5})(\d{3})/, "$1-$2");
        UTILIS_API.VIA_CEP(this.CEP)
          .then(retornoCEP => {
            this.endereco = retornoCEP.logradouro;
            this.bairro = retornoCEP.bairro;
            this.cidade = retornoCEP.localidade;
            this.estado = retornoCEP.uf;
            this.complemento = retornoCEP.complemento;
            this.destinatario = this.nome_completo;
          })
          .catch(error => {
            console.log(
              "Erro ao tentar pegar dados do endereço do usuário",
              error
            );
          });
      } else {
        this.endereco = "";
        this.bairro = "";
        this.cidade = "";
        this.estado = "";
        this.complemento = "";
        this.destinatario = "";
      }
    },
    validarStep(step) {
      API_NOTIFICATION.ShowLoading();
      if (this.currentStep == 1) {
        if (
          UTILIS.isValidCPF(this.cpf) &&
          UTILIS.isValidTelefone(this.telefone) &&
          UTILIS.isValidEmail(this.email) &&
          UTILIS.isValidName(this.nome_completo)
        ) {
          this.nome_completo = this.nome_completo.toUpperCase();
          this.stepDadosPessoaisFinalizados = 1;
          this.currentStep = 2;
          API_NOTIFICATION.HideLoading();
        } else {
          API_NOTIFICATION.showNotification(
            "Todos os campos são obrigatórios!",
            "error"
          );
        }
      } else if (this.currentStep == 2) {
        if (
          UTILIS.isValidString(this.cpf, 9) &&
          UTILIS.isValidString(this.endereco, 5) &&
          UTILIS.isValidString(this.numero_porta, 1) &&
          UTILIS.isValidString(this.bairro, 2) &&
          UTILIS.isValidName(this.destinatario)
        ) {
          API_LOJA.GetFretes()
            .then(retornoFretes => {
              console.log("Retorno Frtes", retornoFretes);
              sessionStorage.setItem(
                "fretes",
                JSON.stringify(retornoFretes.data)
              );
              retornoFretes.data.forEach((obj, i) => {
                this.selecionaPadrao(obj.id, obj.preco, obj.nome);
              });
              this.stepDadosEnderecoFinalizados = 1;
              this.currentStep = 3;
              API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
              console.log(
                "Não foi possível obter os dados do Frete para esta loja",
                error
              );
            });
        } else {
          API_NOTIFICATION.showNotification(
            "Campos de Endereço são obrigatórios!",
            "error"
          );
        }
      }
    },
    editarDadosPessoais() {
      this.stepDadosPessoaisFinalizados = 0;
      document.getElementById("nome_completo").focus();
      this.currentStep = 1;
    },
    editarEndereco() {
      this.stepDadosEnderecoFinalizados = 0;
      document.getElementById("cep").focus();
      this.currentStep = 2;
    },
    maskCPF() {
      this.cpf = this.cpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    },
    maskTelefone() {
      this.telefone = this.telefone.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
      );
    },
    freteSelected(id) {
      this.freteSelecionado = id;
      var lnome = this.fretes.find(x => x.id == this.freteSelecionado).nome;
      this.valorFrete = parseFloat(
        this.fretes.find(x => x.id == this.freteSelecionado).preco
      );
      //console.log("Novo Frte Selecionado", lnome);
    },
    selecionaPadrao(id, preco, nome) {
      if (
        preco == "0,00" ||
        nome
          .toUpperCase()
          .includes("GRÁTIS" || nome.toUpperCase().includes("GRATIS"))
      ) {
        this.freteSelected(id);
      }
      return true;
    },
    getFreteSelecionadoNome() {
      var lnome = this.fretes.find(x => x.id == this.freteSelecionado).nome;
      //console.log("Nome Selecionado", lnome);
      return lnome;
    },
    getImageProcessor() {
      return "http://github.bubbstore.com/gateways-e-adquirentes/mercado-pago-icon.svg";
    },
    formaPagamentoSelecionada(fmp) {
      this.formaPagamento = fmp;
    },
    getClassSelected(opcao){
      return this.formaPagamento == opcao ? 'opcaoSelecionada':'opcaoDeselecionada';
    }
  }
};
</script>
