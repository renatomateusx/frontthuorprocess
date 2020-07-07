const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_RASTREIO = {
    GetFulFillment() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PAT_GET_FULFILLMENTS, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    GetTrackCode(code) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                code: code
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_GET_TRACKING_CODE, LBody)
                .then((response) => {
                    //console.log("Response", response);
                    resolve(response);
                })
                .catch((error) => {
                    console.log("Reject", error);
                    reject(error);
                });
        });
    },
    SaveFulFillment(fulfillment) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                fulfillment.id_usuario = LDadosLoja.id_usuario                
                axios
                    .post(constantes.WEBSITEAPI + constantes.PAT_INSERT_FULFILLMENTS, fulfillment)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(1);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateStatusInterno(status){
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                status.id_usuario = LDadosLoja.id_usuario                
                axios
                    .post(constantes.WEBSITEAPI + constantes.PAT_UPDATE_STATUS_INTERNO_FULFILLMENTS, status)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(1);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    }
    
}
export default API_RASTREIO 
