const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_CAMPANHA_BOLETO = {
    GetCampanhas() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                let LBody = {
                    id_usuario: LDadosUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CAMPANHAS_BOLETO, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    GetCampanhasBoletoRecover() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                let LBody = {
                    id_usuario: LDadosUser.user.id,
                    campanha: 2
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CAMPANHA_BOLETO, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    GetCampanhaByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                let LBody = {
                    id_usuario: LDadosUser.user.id,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_CAMPANHA_BY_ID_BOLETO, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    SalvarCampanhaBoletoRecover(pCampanha) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                pCampanha.id_usuario = LDadosUser.user.id;
                pCampanha.campanha = 2;
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_CAMPANHA_BOLETO, pCampanha)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    }
}
export default API_CAMPANHA_BOLETO 
