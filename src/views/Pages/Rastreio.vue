<style scoped>
* {
  outline: none;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
}
.search-box {
  padding: 10px;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 5px;
}
.timeline {
  position: relative;
  border-left: 1px solid #23b7e5;
}
.date {
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  left: 15px;
  margin: 15px 0;
}
&:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -16px;
  border: 1px solid black;
  width: 14px;
}
.article {
  position: relative;
  left: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
&:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
}
a {
  color: #23b7e5;
  text-decoration: none;
}
.article-date {
  font-weight: 300;
  font-size: 14px;
}
.dot {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #23b7e5;
  left: -25.5px;
  top: calc(50% - 5px);
}
.info-dellivered {
  color: white;
  background-color: rgb(128, 220, 143) !important;
  font-size: 18px;
}
.info-posted {
  color: white;
  background-color: #23b7e5 !important;
  font-size: 18px;
}
.info-dellivered-header {
  color: white !important;
  font-size: 18px;
}
.info-posted-header {
  color: white !important;
  font-size: 18px;
}
.color-icon {
  color: #23b7e5;
}
.fontSize {
  font-size: 18px;
}
.fontCarrier {
  font-size: 14px;
}
</style>
<template>
  <ContentWrapper>
    <div class="content-heading">
      <span class="fa fa-thumbtack">
        <span class="ml-2"></span>
      </span>Rastreio
      <div class="ml-auto">
        <div class="d-flex align-items-center">
          <small class="mr-2"></small>
          <label class="m-0">
            <input
              type="text"
              class="form-control"
              placeholder="Código de Rastreio"
              v-model="trackingCode"
            />
          </label>
          <button class="ml-2 btn btn-primary" v-on:click="initializeTrack()">
            <span class="fa fa-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
    <!-- START timeline-->
    <!-- ul.timeline-alt-->
    <div class="container">
      <input
        v-model="searchQuery"
        v-if="dataTracker.checkpoints && dataTracker.checkpoints.length > 0"
        class="search-box"
        placeholder="Filtre por aqui"
      />
      <div class="timeline" v-if="anyTrack()">
        <p v-if="dataTracker.checkpoints && dataTracker.checkpoints.length > 0" class="date">
          <span class="fa fa-thumbtack ml-2">
            <span class="ml-2"></span>
            {{ dataTracker.trackingCode }}
          </span>
        </p>
        <div v-for="track in searchedTrackers" class="article" :class="getClass(track.description)">
          <span class="dot"></span>
          <p class="article-date">{{ track.date | formatDate}}</p>
          <h3>
            <a class="ml-2 fontSize" href="/track" :class="getClassHeader(track.description)">
              <span :class="getClassIcon(track.status)">
                <span class="ml-2"></span>
              </span>
              {{ track.description }}
            </a>
          </h3>
          <p class="fontCarrier">{{ getCarrier(track.carrier, track.details) }}</p>
        </div>
      </div>
      <p v-else>Preencha o campo com o código para iniciar o Rastreio.</p>
    </div>
    <!-- END timeline-->
  </ContentWrapper>
</template>
<script>
import Vue from "vue";
import moment from "moment";
import dateFormat from "dateformat";
import API_NOTIFICATION from "../../api/notification";
import UTILIS_API from "../../api/utilisAPI";
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY hh:mm");
  }
});
export default {
  data() {
    return {
      searchQuery: "",
      trackingCode: "",
      timelineAlt: false,
      dataTracker: {},
      dataTrackerAux: {
        trackingCode: "LO715865356CN",
        carrier: "brazil-correios",
        lastUpdateTime: "2020-02-27T15:33:00.000Z",
        status: "DELIVERED",
        deliveryProgress: "100",
        subStatus: "DELIVERED001",
        origin: "Brazil",
        destination: "Brazil",
        daysInTransit: 38,
        checkpoints: [
          {
            carrier: "brazil-correios",
            date: "2020-01-19T20:46:00.000Z",
            description: "Objeto postado",
            details: "",
            status: "TRANSIT",
            originalDescription: "Objeto postado",
            originalDetails: ""
          },
          {
            carrier: "brazil-correios",
            date: "2020-01-20T14:29:00.000Z",
            description:
              "Objeto recebido na unidade de exportação no país de origem",
            details: "",
            status: "TRANSIT",
            originalDescription:
              "Objeto recebido na unidade de exportação no país de origem",
            originalDetails: ""
          },
          {
            carrier: "brazil-correios",
            date: "2020-01-20T15:37:00.000Z",
            description: "Objeto encaminhado",
            details: "",
            status: "TRANSIT",
            originalDescription: "Objeto encaminhado ",
            originalDetails: ""
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-11T09:22:00.000Z",
            description: "Objeto recebido pelos Correios do Brasil",
            details: "CURITIBA, PR",
            status: "ARRIVED-DESTINATION",
            originalDescription: "Objeto recebido pelos Correios do Brasil",
            originalDetails: "CURITIBA,PR"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-20T11:00:00.000Z",
            description: "Fiscalização aduaneira finalizada",
            details: "CURITIBA, PR",
            status: "TRANSIT",
            originalDescription: "Fiscalização aduaneira finalizada",
            originalDetails: "CURITIBA,PR"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-20T11:02:00.000Z",
            description: "Objeto encaminhado",
            details: "CURITIBA, PR",
            status: "TRANSIT",
            originalDescription: "Objeto encaminhado ",
            originalDetails: "CURITIBA,PR"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-21T10:02:00.000Z",
            description: "Objeto encaminhado",
            details: "CAJAMAR, SP",
            status: "TRANSIT",
            originalDescription: "Objeto encaminhado ",
            originalDetails: "CAJAMAR,SP"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-24T21:15:00.000Z",
            description: "Objeto encaminhado",
            details: "BELO HORIZONTE, MG",
            status: "TRANSIT",
            originalDescription: "Objeto encaminhado ",
            originalDetails: "BELO HORIZONTE,MG"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-26T12:53:00.000Z",
            description: "Objeto saiu para entrega ao destinatário",
            details: "CONTAGEM, MG",
            status: "PICKUP",
            originalDescription: "Objeto saiu para entrega ao destinatário",
            originalDetails: "CONTAGEM,MG"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-26T15:49:00.000Z",
            description: "Carteiro não atendido - Entrega não realizada",
            details: "CONTAGEM, MG",
            status: "TRANSIT",
            originalDescription:
              "Carteiro não atendido - Entrega não realizada",
            originalDetails: "CONTAGEM,MG"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-27T12:14:00.000Z",
            description: "Objeto saiu para entrega ao destinatário",
            details: "CONTAGEM, MG",
            status: "PICKUP",
            originalDescription: "Objeto saiu para entrega ao destinatário",
            originalDetails: "CONTAGEM,MG"
          },
          {
            carrier: "brazil-correios",
            date: "2020-02-27T15:33:00.000Z",
            description: "Sua encomenda foi entregue. 🙌",
            details: "CONTAGEM, MG",
            status: "DELIVERED",
            originalDescription: "Objeto entregue ao destinatário",
            originalDetails: "CONTAGEM,MG"
          }
        ],
        createdAt: "2020-05-20T14:52:37.000Z",
        updatedAt: null
      }
    };
  },
  computed: {
    searchedTrackers() {
      var searchRegex = new RegExp(this.searchQuery, "i");
      var searchedObj = {};

      if (this.searchQuery == "" && this.dataTracker.checkpoints) {
        return this.dataTracker.checkpoints.reverse();
      }
      if (this.dataTracker.checkpoints) {
        searchedObj = this.dataTracker.checkpoints.filter(x => {
          return (
            searchRegex.test(x.description) ||
            searchRegex.test(x.status) ||
            searchRegex.test(x.originalDescription) ||
            searchRegex.test(x.originalDetails) ||
            searchRegex.test(x.date)
          );
        });
        return searchedObj.reverse();
      } else {
        return null;
      }
    }
  },

  methods: {
    anyTrack() {
      return this.countAllTracks() ? true : false;
    },
    countAllTracks() {
      var count = 0;
      for (var track in this.searchedTrackers) {
        count = count + track;
      }
      return count;
    },
    getCarrier(carrier, detail) {
      var lcarrier = "";
      if (carrier == "brazil-correios") lcarrier = "Correios do Brasil";
      if (detail != undefined && detail.length > 1) {
        lcarrier = lcarrier + " | " + detail;
      }
      return lcarrier;
    },
    getClass(description) {
      if (description.indexOf("postado") > -1) return "info-posted";
      if (description.indexOf("entregue") > -1) return "info-dellivered";
      return "";
    },
    getClassHeader(description) {
      if (description.indexOf("postado") > -1) return "info-posted-header";
      if (description.indexOf("entregue") > -1) return "info-dellivered-header";
      return "";
    },
    initializeTrack() {
      API_NOTIFICATION.ShowLoading();
      if (this.trackingCode.length > 1) {
        UTILIS_API.GetTrackCode(this.trackingCode)
          .then(resTrackingCode => {
            if (resTrackingCode.data.length > 0) {
              this.dataTracker = resTrackingCode.data[0];
              API_NOTIFICATION.HideLoading();
            }
            else{
              API_NOTIFICATION.showNotificationW('Oops!', 'Não encontramos esse código de rastreio. Verifique se você digitou corretamente', 'error');
            }
            
          })
          .catch(error => {
            console.log("Erro ao rastrear o código de rastreio", error);
            API_NOTIFICATION.showNotification(
              "Ocorreu um erro ao tentar rastrear o seu código, tente novamente.",
              "error"
            );
          });
      } else {
        API_NOTIFICATION.showNotification(
          "Preencha o campo com o código de rastreio",
          "error"
        );
      }
    },
    getClassIcon(status) {
      if (status == "TRANSIT") return "fas fa-box-open";
      if (status == "DELIVERED") return "fas fa-people-carry";
      if (status == "PICKUP") return "fas fa-truck-moving";
    }
  }
};
</script>