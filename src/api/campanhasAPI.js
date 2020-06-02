const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_CAMPANHA = {
    GetCampanhas() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                let LBody = {
                    id_usuario: LDadosUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CAMPANHAS, LBody)
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
    GetCampanhasCarrinhoAbandonado() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                let LBody = {
                    id_usuario: LDadosUser.user.id,
                    campanha: 1
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CAMPANHA_CARRINHO_ABANDONADO, LBody)
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
                    .post(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_CAMPANHA_BY_ID, LBody)
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
    SalvarCampanhaCarrinhoAbandonado(pCampanha) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                pCampanha.id_usuario = LDadosUser.user.id;
                pCampanha.campanha = 1;
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_CAMPANHA_CARRINHO_ABANDONADO, pCampanha)
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

    DeleteCampanhaByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                pNovoUpSell.id_usuario = LDadosUser.user.id;
                var LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_DELETE_CUPOM, LBody)
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
    GetCampanhaByProductID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                let LBody = {
                    id_usuario: LDadosUser.user.id,
                    id_produto: id,
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CUPOM_BY_PRODUCT_ID, LBody)
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
}
export default API_CAMPANHA 
