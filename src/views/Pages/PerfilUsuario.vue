<style scoped>
html {
  scroll-behavior: smooth;
}
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
.bold-sd {
  font-family: Rubik, sans-serif;
  font-size: 20px !important;
  font-weight: 900;
  color: #23b7e5;
}
.cobradoPor {
  font-family: Rubik, sans-serif;
  font-size: 12px !important;
  font-weight: 900;
}
.gray {
  background-color: lightgrey;
}
.planoEscolhido {
  color: lightgray;
  font-size: 12px;
  font-weight: 700;
}
.fontBandeiraNome {
  font-size: 16px;
  font-weight: 700;
}
.fontExpira {
  font-size: 15px;
}
.hidden {
  display: none !important;
}
.visible {
  display: "" !important;
}
.link {
  cursor: pointer !important;
  color: #23b7e5 !important;
}
.statusInativo {
  border-radius: 5px !important;
  background-color: red;
  color: white;
  padding: 5px !important;
}
.statusAtivo {
  border-radius: 5px !important;
  background-color: green;
  color: white;
  padding: 5px !important;
}
.styleDivEmpty {
  height: 80% !important;
}
.hidden {
  display: none !important;
}
</style>
<template>
  <ContentWrapper v-if="canRender">
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
                            <strong class="bold-sd">Minha Assinatura</strong>
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
                        <div class="row col-md-6 ml-1">
                          <div class="col-md-12 row pull-right float-right text-right mb-3">
                            <a
                              @click="scrollMeTo('changePlan')"
                              class="col-md-12 ml-1 pl-0 mt-2 link pull-right float-right"
                            >
                              <span class="fa fa-edit"></span> Alterar Plano
                            </a>
                          </div>
                          <span class="col-md-12 planoEscolhido">PLANO ATUAL</span>
                          <span class="col-md-12 bold-md">{{getPlanoEscolhidoNome}}</span>
                          <div class="plan-price card-body">
                            <div class="text-lg">
                              <sup>
                                <small class="simbolPrice">R$</small>
                              </sup>
                              <strong>
                                <span class="priceFont">{{getPlanoEscolhidoPrice}}</span>
                                <span class="month">/mês</span>
                              </strong>
                              <!-- span.plan-period /mo-->
                            </div>
                            <div class="text-center my-1">
                              <div class="text-bold text-justify">
                                <strong class="priceFontAddOn">+{{getPlanoEscolhidoAddon}}</strong>
                                <span class="porpedido ml-1">por pedido pago</span>
                              </div>
                            </div>
                            <strong class="cobradoPor col-md-12">* Cobrado por semana *</strong>
                          </div>
                          <div class="col-md-12 row">
                            <strong
                              class="col-lg-12 ml-4"
                            >Próx. Pag.: {{getProximoPagamento(getDadosUsuario().proximo_pagamento)}}</strong>
                          </div>
                          <div class="col-md-12 row" v-if="metodoPag">
                            <img
                              :src="getBandeiraImage().image"
                              class="col-md-2 pr-0 pl-0 mr-0 ml-0"
                            />
                            <span
                              class="col-md-9 pr-0 pl-0 mr-0 ml-1 mt-2 fontBandeiraNome"
                            >{{getBandeiraImage().nome}}, final {{getFinalCard()}}</span>
                          </div>
                          <div class="col-md-12 row" v-if="metodoPag">
                            <span class="col-md-2"></span>
                            <span class="fontExpira col-md-9 ml-1 pl-0">Expira em {{getExpiracao()}}</span>
                          </div>
                          <div class="col-md-12 row">
                            <span class="col-md-2"></span>
                            <a
                              @click="scrollMeTo('changeCard')"
                              class="col-md-9 ml-1 pl-0 mt-2 link"
                              title="Clique para alterar"
                            >Alterar/Informar Dados do Cartão</a>
                          </div>
                        </div>
                        <div class="row col-md-6">
                          <span class="col-md-12 planoEscolhido">CLIENTE DESDE</span>
                          <span class="col-md-12 mt-1 mr-3 mb-3">{{getDataDesde()}}</span>
                          <span class="col-md-12 planoEscolhido">STATUS DA ASSINATURA</span>
                          <span
                            class="col-md-2 ml-3 mt-1 mr-3 mb-3"
                            :class="getStatusAssinatura().statusClass"
                          >{{getStatusAssinatura().status}}</span>

                          <div class="col-md-12 styleDivEmpty"></div>
                        </div>

                        <!-- <div class="float-right mt-2 col-md-1">
                          <span class="pull-right float-right"></span>
                        </div>-->
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
                            <strong class="bold-sd">Meus Pagamentos</strong>
                          </span>
                          <small
                            class="text-justify col-md-12"
                          >Veja todos os detalhes de seus pagamentos.</small>
                        </div>
                        <div class="float-left p-1 ml-1 mt-1 row" v-if="metodoPag">
                          <strong class="col-md-12">Dados de Faturamento:</strong>
                          <label class="col-md-12 ml-1">{{getDadosPagador().nome_completo}}</label>
                          <label class="col-md-12 ml-1">{{getDadosPagador().cpf_titular}}</label>
                          <label class="col-md-12 ml-1 mt-0 mb-0">
                            <b>{{getDadosPagador().endereco}}, {{getDadosPagador().numero_porta}}</b>
                          </label>
                          <label
                            class="col-md-12 ml-1 mt-0 mb-0"
                          >{{getDadosPagador().cidade}} / {{getDadosPagador().estado}}</label>
                          <label class="col-md-12 ml-1 mt-0 mb-0">{{getDadosPagador().complemento}}</label>
                          <label class="col-md-12 ml-1 mt-0 mb-0">CEP: {{getDadosPagador().cep}}</label>
                        </div>
                        <div class="float-left p-1 ml-1 mt-1 row">
                          <span class="col-md-2"></span>
                          <a
                            @click="scrollMeTo('changeCard')"
                            class="col-md-12 ml-3 pl-0 mt-2 link"
                            title="Clique para alterar"
                          >Alterar</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end Aside card-->
                </div>
                <div class="col-xl-8">
                  <!-- Main card-->
                  <div class="card b col-lg-12">
                    <div class="card-header">
                      <div class="my-2 row p-0">
                        <span class="col-md-12 mt-2 mb-2">
                          <strong>Pagamentos de Comissão Realizados</strong>
                        </span>
                        <div class="row col-lg-12 mt-2 text-center">
                          <span class="col-md-4">
                            <strong>Data</strong>
                          </span>
                          <span class="col-md-4">
                            <strong>Valor</strong>
                          </span>
                          <span class="col-md-4">
                            <strong>Status</strong>
                          </span>
                        </div>
                        <div
                          class="row col-lg-12 mt-2 text-center"
                          v-for="{id, data, valor_comissao, status } in pagamentosEfetuadosList"
                          :key="id"
                        >
                          <span class="col-md-4">{{data | formatDate}}</span>
                          <span class="col-md-4">R$ {{valor_comissao | formatPrice}}</span>
                          <span class="col-md-4">{{status | formatStatus}}</span>
                        </div>
                        <div class="float-right mt-2 col-md-12 mt-5 mr-5">
                          <span class="pull-right float-right">
                            <strong>Total Pago:</strong>
                            R$ {{totalPago | formatPrice}}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- End Main card-->
                  <div class="card b col-lg-12">
                    <div class="card-header">
                      <div class="my-2 row p-0">
                        <span class="col-md-12 mt-2 mb-2">
                          <strong>Pagamentos de Mensalidades Realizados</strong>
                        </span>
                        <div class="row col-lg-12 mt-2 text-center">
                          <span class="col-md-4">
                            <strong>Data</strong>
                          </span>
                          <span class="col-md-4">
                            <strong>Valor</strong>
                          </span>
                          <span class="col-md-4">
                            <strong>Status</strong>
                          </span>
                        </div>
                        <div
                          class="row col-lg-12 mt-2 text-center"
                          v-for="{id, data, json_pagamento, status } in mensalidadesPagasList"
                          :key="id"
                        >
                          <span class="col-md-4">{{data | formatDate}}</span>
                          <span
                            class="col-md-4"
                          >R$ {{json_pagamento.transaction_amount | formatPrice}}</span>
                          <span class="col-md-4">{{status | formatStatus}}</span>
                        </div>
                        <div class="float-right mt-2 col-md-12 mt-5 mr-5">
                          <span class="pull-right float-right">
                            <strong>Total Pago:</strong>
                            R$ {{totalPagoMensalidades | formatPrice}}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END HTML DE DADOS DE FATURAMENTO E PAGAMENTOS JÁ REALIZADOS -->

              <div class="container container-lg hidden" ref="changePlan" id="changePlan">
                <div class="container container-lg py-4">
                  <div class="text-center mb-0 pb-0">
                    <div class="h2 text-bold text-left">Assinatura</div>
                    <small
                      class="text-left pull-left float-left"
                    >Escolha sua assinatura e Altere Quando Quiser!</small>
                  </div>
                </div>
                <div class="row">
                  <!-- PLAN-->
                  <div
                    class="col-lg-4 mt-3 card card-default mr-0 selectedPlan"
                    :class="usuario.plano == id ? 'Selecionado' : 'DeSelecionado'"
                    :id="json.nome"
                    v-for="{id, json} in planArray"
                    :key="id"
                  >
                    <div class="plan">
                      <div
                        class="plan-header card-header"
                        :class="usuario.plano == id ? 'SelecionadoH' : 'DeSelecionadoH'"
                      >
                        <div class="card-title bold text-center">{{json.nome}}</div>
                      </div>
                      <div class="plan-price card-body">
                        <div class="text-lg">
                          <sup>
                            <small class="simbolPrice">R$</small>
                          </sup>
                          <strong>
                            <span class="priceFont">{{json.price}}</span>
                            <span class="month">/mês</span>
                          </strong>
                          <!-- span.plan-period /mo-->
                        </div>
                        <div class="text-center my-1">
                          <div class="text-bold text-justify">
                            <strong class="priceFontAddOn">+{{json.addon}}</strong>
                            <span class="porpedido ml-1">por pedido pago</span>
                          </div>
                        </div>
                        <strong class="cobradoPor">* Cobrado por semana *</strong>
                      </div>
                      <ul class="plan-features text-justify pl-0">
                        <li class="checkInformation" v-for="{title} in json.benefits" :key="title">
                          <em class="fa fa-check mr-2 checkColor"></em>
                          {{title}}
                        </li>
                      </ul>
                      <hr />
                      <div class="text-center mb-3">
                        <button
                          type="button"
                          class="btn btn-lg btn-info"
                          v-on:click="escolherPlano(json.id, json.nome)"
                        >Escolher {{json.nome}}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                <div class="clearfix hidden" ref="changeCard" id="changeCard">
                  <div class="row">
                    <div class="form-group col-lg-4">
                      <label class="col-form-label">Nº do Cartão *</label>
                      <input
                        @input="verificaDigitosCartao()"
                        class="col-lg-10 mt-1"
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
                  <div class="row">
                    <div class="form-group col-lg-7">
                      <label class="col-form-label">Nome (impresso no cartão) *</label>
                      <input
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.nome_completo')}"
                        v-model="dadosProcessamento.nome_completo"
                        class="col-md-12"
                        placeholder="Fulano F F Moura"
                        v-validate="'required'"
                        type="text"
                        name="nome_completo"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.nome_completo')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.nome_completo') }}</span>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">CPF do Titular *</label>
                      <input
                        @input="maskCPFTitular()"
                        :class="{'form-control':true, 'is-invalid': errors.has('dadosProcessamento.cpf_titular')}"
                        v-model="dadosProcessamento.cpf_titular"
                        class="col-md-9"
                        placeholder="028.964.656-98"
                        v-validate="'required'"
                        type="text"
                        name="cpf_titular"
                      />
                      <span
                        v-show="errors.has('dadosProcessamento.cpf_titular')"
                        class="invalid-feedback"
                      >{{ errors.first('dadosProcessamento.cpf_titular') }}</span>
                    </div>
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
import moment from "moment";
import API_PLANOS from "../../api/planosAPI";
import API_TRANSACOES from "../../api/transacoesAPI";
import API_MENSALIDADES from "../../api/mensalidadesAPI";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

Vue.filter("parseFloat", function(value) {
  if (value) {
    return Number.parseFloat(value).toPrecision(3);
  }
});

Vue.filter("formatStatus", function(value) {
  if (value) {
    if (value == "PAID") {
      return "PAGO";
    }
    if (value == "PENDING") {
      return "PENDENTE";
    }
  }
});
Vue.filter("formatPrice", function(value) {
  if (value) {
    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

// Tag inputs
Validator.localize({ pt: pt });
Vue.use(VeeValidate, {
  locale: "pt",
  fieldsBagName: "formFields" // fix issue with b-table
});

export default {
  async created() {
    const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
    if (LDadosLoja == null) {
      API_NOTIFICATION.showNotificationW(
        "Oops!",
        "Para acessar essa página você precisa ter sua loja integrada. <br> Vá até 'Configurações' > 'Integrações' e efetue a integração com sua loja.",
        "warning"
      );
      return;
    }
    this.planArray = await API_PLANOS.GetPlanos();
    this.canRender = true;
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
    plugin.onload = function() {};
    plugin.setAttribute(
      "src",
      "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },

  data() {
    return {
      canRender: false,
      selectedPlan: 0,
      planArray: [],
      mensagemID: 0,
      MensagemString: [],
      paymentData: "",
      pagamentosEfetuadosList: [],
      mensalidadesPagasList: [],
      totalPago: 0,
      totalPagoMensalidades: 0,
      getPlanoEscolhidoNome: "",
      getPlanoEscolhidoPrice: "",
      getPlanoEscolhidoAddon: "",
      metodoPag: "",
      dadosProcessamento: {
        cpf_titular: "",
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
        valor: "1.50",
        token: ""
      },
      usuario: {
        plano: 0,
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
            // console.log("Form Submitted!");
            API_NOTIFICATION.ShowLoading();
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
            .then(async resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              if (this.usuario.plano == 0 || this.usuario.plano == undefined) {
                this.escolherPlano(1, "Basic");
              } else {
                const LArrPlan = this.planArray;
                const lp = await API_PLANOS.GetPlanosByID(this.usuario.plano);
                if (lp.json) {
                  // console.log("Escolhido", lp.json);
                  this.escolherPlano(this.usuario.plano, lp.json.nome);
                  this.getPagamentosEfetuados();
                  this.getMensalidadesPagas();
                }
              }
              this.getPlanoEscolhido();
              this.getDadosPagamento();
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
    getPagamentosEfetuados() {
      API_TRANSACOES.GetPagamentosEfetuadosPorSeller()
        .then(resPagamentosEfetuados => {
          this.pagamentosEfetuadosList = resPagamentosEfetuados.data;
          this.pagamentosEfetuadosList.forEach((obj, i) => {
            const LValor = parseFloat(obj.valor_comissao);
            this.totalPago += LValor;
          });
        })
        .catch(error => {
          console.log(
            "Erro ao tentar resgatar os pagamentos efetuados pelo vendedor",
            error
          );
        });
    },
    getMensalidadesPagas() {
      API_MENSALIDADES.GetMensalidadesPagas().then(resMensalidades => {
        this.mensalidadesPagasList = resMensalidades.data;
        this.mensalidadesPagasList.forEach((obj, i) => {
          const LValor = parseFloat(obj.json_pagamento.transaction_amount);
          this.totalPagoMensalidades += LValor;
        });
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
    removeItem(id) {
      console.log("Removendo ID", id);
    },

    async escolherPlano(plano, nome) {
      this.selectedPlan = plano;
      const ArrayP = this.planArray;
      const obj = await API_PLANOS.GetPlanosByID(plano);
      const LDiv = document.getElementById(obj.json.nome);
      const LPreco = parseFloat(obj.json.price);
      // if (LDiv) {
      //   LDiv.classList.remove("Selecionado");
      //   LDiv.classList.add("DeSelecionado");
      // }
      // if (plano == obj.json.id) {
      //   const LNovoSelecionado = document.getElementById(nome);
      //   if (LNovoSelecionado) {
      //     LNovoSelecionado.classList.add("Selecionado");
      //   }
      // }
      // ArrayP.forEach((obj, i) => {
      //   console.log("asdf", obj.json);

      // });

      this.usuario.plano = plano;
      var LMensagem = "";
      var LProximoPagamentoMensal = moment().format();
      if (LPreco > 0) {
        LMensagem =
          "O Pagamento Mensal Se Dá de Forma Pré-Paga e Poderá ser cobrado até o final do dia. Deseja continuar?";
      } else {
        LMensagem = "Tem certeza de que deseja alterar seu plano? ";
        LProximoPagamentoMensal = null;
      }
      if (this.usuario.json_pagamento) {
        if (this.usuario.json_pagamento.plano != this.usuario.plano) {
          var self = this;
          API_NOTIFICATION.showConfirmDialog(
            "Ei!",
            LMensagem,
            "question",
            () => {
              this.usuario.json_pagamento.plano = self.usuario.plano;
              this.usuario.proximo_pagamento_mensalidade = LProximoPagamentoMensal;
              this.usuario.json_pagamento.plano_escolhido = self.usuario.plano;
              if (
                this.usuario.proximo_pagamento == null ||
                this.usuario.proximo_pagamento == undefined
              ) {
                var LData = moment()
                  .add({ days: 7 })
                  .format();
                this.usuario.proximo_pagamento = LData;
                // console.log(this.usuario.proximo_pagamento);
              }
              API_LOGIN.UpdateUser(
                this.usuario.id,
                this.usuario.plano,
                this.usuario.json_pagamento,
                this.usuario.proximo_pagamento,
                this.usuario.proximo_pagamento_mensalidade
              )
                .then(async resUpdated => {
                  API_NOTIFICATION.showNotificationW(
                    "Pronto!",
                    "Dados Atualizados Com Sucesso",
                    "success"
                  );
                })
                .catch(error => {
                  console.log(
                    "Erro ao tentar atualizar os dados do usuário. ",
                    error
                  );
                  API_NOTIFICATION.showNotificationW(
                    "Oops!",
                    "Ocorreu um Erro ao Tentar Atualizar os Dados do Usuário",
                    "error"
                  );
                });
            }
          );
        }
      }
    },
    getClass(id, nome) {
      //{'Selecionado': usuario.plano == id, 'DeSelecionado': usuario.plano != id}
    },
    verificaDigitosCartao() {
      const binCard = this.dadosProcessamento.numero_cartao.replace(/ /g, "");
      if (binCard.length >= 6) {
        let bin = binCard.substring(0, 6);
        if (window.Mercadopago) {
          window.Mercadopago.getPaymentMethod(
            {
              bin: bin
            },
            (status, response) => {
              if (status == 200) {
                this.dadosProcessamento.metodoPag = response[0].id;
              } else {
                API_NOTIFICATION.showNotificationW(
                  "Oops!",
                  "Cartão de Crédito Não Reconhecido. Verifique!",
                  "error"
                );
              }
            }
          );
        } else {
          console.log("error");
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
    maskCPFTitular() {
      this.dadosProcessamento.cpf_titular = this.dadosProcessamento.cpf_titular.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    },
    consultaCEP() {
      var self = this;
      this.dadosProcessamento.cep = this.dadosProcessamento.cep.replace(
        /[^\d]/g,
        ""
      );
      if (this.dadosProcessamento.cep.length >= 8) {
        this.dadosProcessamento.cep = this.dadosProcessamento.cep.replace(
          /(\d{5})(\d{3})/,
          "$1-$2"
        );
        API_NOTIFICATION.ShowLoading();
        UTILIS_API.VIA_CEP(this.dadosProcessamento.cep.replace(/[.-]/g, ""))
          .then(retornoCEP => {
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
      window.Mercadopago.setPublishableKey(constantes.SAND_BOX_MP_PUBLICK_KEY);
      var FormToken = await UTILIS_API.CREATE_FORM_MP(
        constantes.CONSTANTE_THUOR,
        parseFloat(this.dadosProcessamento.valor),
        this.dadosProcessamento.numero_cartao.trim().replace(/ /g, ""),
        this.dadosProcessamento.nome_completo,
        this.dadosProcessamento.mes_validade,
        this.dadosProcessamento.ano_validade,
        this.dadosProcessamento.codigo_seguranca,
        1,
        this.dadosProcessamento.cpf_titular.replace(/[.-]/g, ""),
        constantes.CONSTANTE_THUOR_EMAIL,
        this.dadosProcessamento.metodoPag
      );

      window.Mercadopago.createToken(FormToken, this.iniciaPagamentoBackEnd);
    },
    async getPlanoEscolhido() {
      const LPl = await API_PLANOS.GetPlanosByID(this.usuario.plano);
      if (LPl.json) {
        this.getPlanoEscolhidoNome = LPl.json.nome;
        this.getPlanoEscolhidoPrice = LPl.json.price;
        this.getPlanoEscolhidoAddon = LPl.json.addon;
      }
    },
    async getDadosPagamento() {
      if (this.usuario.json_pagamento) {
        this.metodoPag = this.usuario.json_pagamento.dadosProcessamento.metodoPag;
      }
    },
    getDadosPagador() {
      if (this.usuario.json_pagamento) {
        return this.usuario.json_pagamento.dadosProcessamento;
      }
      return "";
    },
    getDadosUsuario() {
      if (this.usuario.json_pagamento) {
        return this.usuario.json_pagamento;
      }
      return "";
    },
    iniciaPagamentoBackEnd(status, response) {
      if (status != 200 && status != 201) {
        //console.log("Não foi possível gerar o token", response.message);
        window.Mercadopago.clearSession();
        API_NOTIFICATION.showNotificationW(
          "Oops!",
          "Não foi possível completar a ação. Tente novamente!",
          "warning"
        );
      } else {
        this.dadosProcessamento.token = response.id;
        //while (this.try == false) {
        ///console.log(this.cardToken);
        var paymentData = {
          transaction_amount: parseFloat(this.dadosProcessamento.valor),
          token: this.dadosProcessamento.token,
          description: constantes.CONSTANTE_THUOR,
          installments: 1,
          payment_method_id: this.dadosProcessamento.metodoPag,
          payer: {
            email: constantes.CONSTANTE_THUOR_EMAIL
          }
        };
        this.usuario.dadosProcessamento = this.dadosProcessamento;
        API_NOTIFICATION.ShowLoading();
        API_CHECKOUT_THUOR_COMISSION.DoPayBackEnd(paymentData)
          .then(async retornoPay => {
            if (
              retornoPay.data.status != undefined &&
              (retornoPay.data.status.toUpperCase() == "REJECTED" ||
                retornoPay.data.status.toUpperCase() == "CANCELED" ||
                retornoPay.data.status.toUpperCase() == "VACATED")
            ) {
              const LMensagem = await UTILIS_API.getErrorMPDetail(
                retornoPay.data.status_detail
              );
              API_NOTIFICATION.showNotificationW(
                "Oops!",
                "Pagamento Rejeitado. " + LMensagem,
                "error"
              );
              return;
            }
            this.usuario.paymentDataGW = retornoPay.data;
            window.Mercadopago.clearSession();
            const LUser = await UTILIS_API.GetUserSession();
            if (LUser) {
              if (
                this.usuario.proximo_pagamento == null ||
                this.usuario.proximo_pagamento == undefined
              ) {
                var LData = moment()
                  .add({ days: 7 })
                  .format();
                this.usuario.proximo_pagamento = LData;
              }

              API_LOGIN.UpdateUser(
                LUser.user.id,
                this.usuario.plano,
                this.usuario,
                this.usuario.proximo_pagamento
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
    },
    getBandeiraImage() {
      if (this.usuario.json_pagamento) {
        var bandeira = this.usuario.json_pagamento.dadosProcessamento.metodoPag;
        if (bandeira == "master") {
          return {
            image: "https://github.bubbstore.com/svg/mastercard.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "visa") {
          return {
            image: "https://github.bubbstore.com/svg/visa.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "amex") {
          return {
            image: "https://github.bubbstore.com/svg/amex-american-express.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "diners") {
          return {
            image:
              "https://github.bubbstore.com/svg/diners-club-international.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "naranja") {
          return {
            image: "https://github.bubbstore.com/svg/visa.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "nativa") {
          return {
            image: "https://github.bubbstore.com/svg/visa.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "cencosud") {
          return {
            image: "https://github.bubbstore.com/svg/visa.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "maestro") {
          return {
            image: "https://github.bubbstore.com/svg/maestro.svg",
            nome: "MasterCard"
          };
        }
        if (bandeira == "rapipago") {
          return {
            image: "https://github.bubbstore.com/svg/visa.svg",
            nome: "MasterCard"
          };
        }
      }
      return "";
    },
    getFinalCard() {
      if (this.usuario.json_pagamento) {
        var card = this.usuario.json_pagamento.dadosProcessamento.numero_cartao.replace(
          / /g,
          ""
        );
        var length = card.length - 4;
        return card.substr(length, 4);
      }
      return "";
    },
    getExpiracao() {
      if (this.usuario.json_pagamento) {
        var validade =
          this.usuario.json_pagamento.dadosProcessamento.mes_validade +
          "/" +
          this.usuario.json_pagamento.dadosProcessamento.ano_validade;
        return validade;
      }
      return "";
    },
    scrollMeTo(refName) {
      API_NOTIFICATION.ShowLoading();
      const eleRef = document.getElementById(refName);
      if (eleRef) {
        eleRef.classList.remove("hidden");
        eleRef.classList.add("visible");
      }
      setTimeout(() => {
        var element = this.$refs[refName];
        element.scrollIntoView({ behavior: "smooth" });
        var top = element.offsetTop;
        window.scrollTo(0, top);
        API_NOTIFICATION.HideLoading();
      }, 500);

      // var element = this.$els[refName];
      // element.scrollIntoView();
    },
    getDataDesde() {
      if (this.usuario) {
        return moment(this.usuario.data).format("DD/MM/YYYY");
      }
      return "";
    },
    getStatusAssinatura() {
      if (this.usuario) {
        var classStat =
          this.usuario.status == 1 ? "statusAtivo" : "statusInativo";
        var status = this.usuario.status == 1 ? "Ativa" : "Inativa";
        return { statusClass: classStat, status: status };
      }
      return { statusClass: "", status: "" };
    },
    getProximoPagamento(proximoPagamento) {
      return moment(proximoPagamento).format("DD/MM/YYYY");
    }
  }
};
</script>
