<style scoped>
.sparkline canvas {
  width: 100%;
}
.labelReport {
  font-size: 20px !important;
}
.dataReport {
  font-size: 25px !important;
  font-weight: 700;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        Dashboard
        <small>{{welcome}}</small>
      </div>
      <!-- START Language list-->
      <div class="ml-auto" style="display:none">
        <b-dropdown id="ddown1" :text="selectedLanguage()" no-caret right>
          <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
          <b-dropdown-item @click="changeLanguage('es')">Spanish</b-dropdown-item>
        </b-dropdown>
      </div>
      <!-- END Language list-->
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="text-thin "><span class="fa fa-crop mr-2"></span>Minhas Vendas</h2>
        <p>Se quiser melhorar o seu Dash, mande-nos um e-mail solicitando a inclusão de algum gráfico ou dado que deseja: {meajuda@thuor.com}</p>
      </div>
    </div>
    <div class="row ">
      <div class="list-group-item col-md-6">
        <div class="d-flex align-items-center py-3">
          <div class="w-50 px-3">
            <p class="m-0 lead dataReport">
              <strong>{{totalVendasFacebook}}</strong>
            </p>
            <p class="m-0 text-sm labelReport">Vendas no Facebook!</p>
          </div>
          <div class="w-50 px-3 text-center" v-if="renderComponent">
            <Sparkline
              id="totalVendasPerDa"
              :options="{
                          type: 'line',
                          height:'60',
                          width:'80%',
                          lineWidth:'2',
                          lineColor:'#7266ba',
                          chartRangeMin:'0',
                          spotColor:'#888',
                          minSpotColor:'#7266ba',
                          maxSpotColor:'#7266ba',
                          fillColor:'',
                          highlightLineColor:'#fff',
                          spotRadius:'5',
                          resize:true
                      }"
              v-bind:values="totalVendasFacebookArray"
            />
          </div>
        </div>
      </div>
      <div class="list-group-item col-md-6">
        <div class="d-flex align-items-center py-3">
          <div class="w-50 px-3">
            <p class="m-0 lead dataReport">
              <strong>{{totalVendasGoogle}}</strong>
            </p>
            <p class="m-0 text-sm labelReport">Vendas no Google!</p>
          </div>
          <div class="w-50 px-3 text-center" v-if="renderComponent">
            <Sparkline
              id="totalVendasPerDa"
              :options="{
                          type: 'line',
                          height:'60',
                          width:'80%',
                          lineWidth:'2',
                          lineColor:'#7266ba',
                          chartRangeMin:'0',
                          spotColor:'#888',
                          minSpotColor:'#7266ba',
                          maxSpotColor:'#7266ba',
                          fillColor:'',
                          highlightLineColor:'#fff',
                          spotRadius:'5',
                          resize:true
                      }"
              v-bind:values="totalVendasGoogleArray"
            />
          </div>
        </div>
      </div>
      <div class="list-group-item col-md-6">
        <div class="d-flex align-items-center py-3">
          <div class="w-50 px-3">
            <p class="m-0 lead dataReport">
              <strong>{{totalVendas}}</strong>
            </p>
            <p class="m-0 text-sm labelReport">Vendas até Hoje!</p>
          </div>
          <div class="w-50 px-3 text-center" v-if="renderComponent">
            <Sparkline
              id="totalVendasPerDa"
              :options="{
                          type: 'line',
                          height:'60',
                          width:'80%',
                          lineWidth:'2',
                          lineColor:'#7266ba',
                          chartRangeMin:'0',
                          spotColor:'#888',
                          minSpotColor:'#7266ba',
                          maxSpotColor:'#7266ba',
                          fillColor:'',
                          highlightLineColor:'#fff',
                          spotRadius:'5',
                          resize:true
                      }"
              v-bind:values="totalVendasPerDay"
            />
          </div>
        </div>
      </div>
    
      <div class="list-group-item col-md-6">
        <div class="d-flex align-items-center py-3">
          <div class="w-50 px-3">
            <p class="m-0 lead dataReport">
              <strong>R$ {{totalQtdVendasMes | formatPrice}}</strong>
            </p>
            <p class="m-0 text-sm labelReport">Em Vendas neste Mês</p>
            <span class="mt-2 mb-2">{{pedidosRealizados}} <b>pedido(s) realizado(s)</b></span>
          </div>
          <div class="w-50 px-3 text-center" v-if="renderComponent">
            <Sparkline
              :options="{
                          type: 'line',
                          height:'60',
                          width:'80%',
                          lineWidth:'2',
                          lineColor:'#7266ba',
                          chartRangeMin:'0',
                          spotColor:'#888',
                          minSpotColor:'#7266ba',
                          maxSpotColor:'#7266ba',
                          fillColor:'',
                          highlightLineColor:'#fff',
                          spotRadius:'5',
                          resize:true
                      }"
              v-bind:values="totalVendasMes"
            />
          </div>
        </div>
      </div>
    
      <div class="list-group-item col-md-6">
        <div class="d-flex align-items-center py-3">
          <div class="w-50 px-3">
            <p class="m-0 lead dataReport">
              <strong>R$ {{totalReceitas | formatPrice}}</strong>
            </p>
            <p class="m-0 text-sm labelReport">Receita / Mês</p>
            <span class="mt-2 mb-2">{{pedidosPagos}} <b>pedido(s) pago(s)</b></span>
          </div>
          <div class="w-50 px-3 text-center" v-if="renderComponent">
            <Sparkline
              :options="{
                          type: 'line',
                          height:'60',
                          width:'80%',
                          lineWidth:'2',
                          lineColor:'#7266ba',
                          chartRangeMin:'0',
                          spotColor:'#888',
                          minSpotColor:'#7266ba',
                          maxSpotColor:'#7266ba',
                          fillColor:'',
                          highlightLineColor:'#fff',
                          spotRadius:'5',
                          resize:true
                      }"
              v-bind:values="totalReceitasArray"
            />
          </div>
        </div>
      </div>
    
      <div class="list-group-item col-md-6">
        <div class="d-flex align-items-center py-3">
          <div class="w-50 px-3">
            <p class="m-0 lead dataReport">
              <strong>R$ {{totalPedidosBoletos | formatPrice}}</strong>
            </p>
            <p class="m-0 text-sm labelReport">Pedidos / Mês</p>
            <span class="mt-2 mb-2">{{pedidosBoletos}} <b>pedido(s) com boleto(s)</b></span>
          </div>
          <div class="w-50 px-3 text-center" v-if="renderComponent">
            <Sparkline
              :options="{
                          type: 'line',
                          height:'60',
                          width:'80%',
                          lineWidth:'2',
                          lineColor:'#7266ba',
                          chartRangeMin:'0',
                          spotColor:'#888',
                          minSpotColor:'#7266ba',
                          maxSpotColor:'#7266ba',
                          fillColor:'',
                          highlightLineColor:'#fff',
                          spotRadius:'5',
                          resize:true
                      }"
              v-bind:values="totalPedidosBoletosArray"
            />
          </div>
        </div>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import Vue from "vue";
import Loading from "vue-loading-overlay";
import API_NOTIFICATION from "../../api/notification";
import API_LOGIN from "../../api/loginAPI";
import API_HEADERS from "../../api/configAxios";
import API_LOJA from "../../api/lojaAPI";
import UTILIS_API from "../../api/utilisAPI";
import API_TRANSACOES from "../../api/transacoesAPI";

import EasyPieChart from "easy-pie-chart";
import Sparkline from "@/components/Common/Sparklines";
import FlotChart from "@/components/Charts/Flot";
import UTILIS from "../../utilis/utilis";

Vue.filter("formatPrice", function(value) {
  if (value) {
    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
});

export default {
  created() {
    this.checkIfLogged();
  },
  components: {
    Sparkline,
    FlotChart
  },
  data() {
    return {
      welcome: "",
      selectedLanguage() {
        switch (this.$i18n.i18next.language) {
          // case "es":
          //   return "Spanish";
          //   break;
          // case "en":
          //   return "English";
          //   break;
          case "ptBR":
          default:
            return "Português";
        }
      },
      async selectUserName() {
        var LUser = await UTILIS_API.GetUserSession();
        if (LUser !== undefined && LUser !== null) {
          this.welcome = `Bem vindo ao Thuor, ${LUser.user.nome}!`;
        } else {
          this.welcome = "Bem vindo ao Thuor!";
        }
      },
      renderComponent: false,
      totalVendasPerDay: [],
      totalVendasValor: 0.0,
      totalVendas: 0,
      totalVendasMes: [],
      totalQtdVendasMes: 0,
      totalReceitas: 0,
      totalReceitasArray: [],
      pedidosPagos: 0,
      pedidosRealizados: 0,
      pedidosBoletos: 0,
      totalPedidosBoletos:0,
      totalPedidosBoletosArray: [],
      totalVendasFacebookArray:[],
      totalVendasFacebook:0,
      totalVendasGoogleArray:[],
      totalVendasGoogle:0,
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
    checkIfLogged() {
      API_NOTIFICATION.ShowLoading();
      API_LOGIN.VerificaToken()
        .then(async res => {
          var LUser = await UTILIS_API.GetUserSession();
          if (LUser !== undefined && LUser !== null) {
            API_LOJA.GetDadosLojaByIdUsuario(LUser.user.id).then(resLoja => {
              UTILIS_API.SetDadosLojaSession(resLoja.data);
              this.selectUserName();
            });
            const LVendasMes = await API_TRANSACOES.GetChartTransacoesPerDay()
              .then(resPerDayChart => {
                this.totalVendasPerDay = [];
                resPerDayChart.data.forEach(async (obj, i) => {
                  this.totalVendasPerDay.push(parseInt(obj.qtd));
                  this.totalVendas += parseInt(obj.qtd);
                  this.forceRerender();
                });
              })
              .catch(error => {
                console.log("Erro ao recuperar chat per day", error);
              });

            const LVendas = await API_TRANSACOES.GetVendasMes()
              .then(resPerDayChart => {
                resPerDayChart.data.forEach(async (obj, i) => {
                  if(obj.json_front_end_user_data.dadosComprador.valor){
                    this.totalVendasMes.push(
                      parseInt(obj.json_front_end_user_data.dadosComprador.valor)
                    );
                    const LValue = obj.json_front_end_user_data.dadosComprador.valor.toLocaleString("pt-BR")
                    this.totalQtdVendasMes += parseFloat(LValue.replace(",","."));
                    this.pedidosRealizados += 1;
                    if (obj.json_front_end_user_data.dadosComprador.forma == "creditCard") {
                      this.totalReceitasArray.push(parseInt( obj.json_front_end_user_data.dadosComprador.valor));
                      this.totalReceitas += parseFloat(LValue.replace(",","."));
                      this.pedidosPagos += 1;
                    }
                    if(obj.json_front_end_user_data.dadosComprador.forma == "bolbradesco"){
                      this.pedidosBoletos += 1;
                      this.totalPedidosBoletos += parseFloat(LValue.replace(",","."))
                      this.totalPedidosBoletosArray.push( obj.json_front_end_user_data.dadosComprador.valor);
                    }
                    if(obj.ttrack && obj.ttrack == 1){
                      this.totalVendasFacebook += LValue.replace(",",".");
                      this.totalVendasFacebookArray.push(obj.json_front_end_user_data.dadosComprador.valor);
                    }
                    if(obj.ttrack && obj.ttrack == 2){
                      this.totalVendasGoogle += LValue.replace(",",".");
                      this.totalVendasGoogle.push( obj.json_front_end_user_data.dadosComprador.valor);
                    }
                    this.forceRerender();
                  }
                });
              })
              .catch(error => {
                console.log("Erro ao recuperar chat per day", error);
              });
          }
          API_NOTIFICATION.HideLoading();
        })
        .catch(error => {
          console.log("Erro ao verificar token", error);
        });
    },
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    }
  }
};
</script>