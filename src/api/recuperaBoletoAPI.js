const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_RECUPERA_BOLETO = {
    GetBoletos() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_BOLETOS, LBody)
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
    SaveBoletos(boleto) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                boleto.id_usuario = LDadosLoja.id_usuario;
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_BOLETOS, boleto)
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
    UpdateStatusBoletosRecovery(status, ids){
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                var LBody = {
                    status:status,
                    id_cart: ids
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_BOLETOS, LBody)
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
    }    
    
}
export default API_RECUPERA_BOLETO 
