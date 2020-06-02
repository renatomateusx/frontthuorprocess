const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_MKT = {
    GetUpSells() {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_UPSELL, LBody)
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
    GetUpSellsByID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_UPSELL_BY_ID, LBody)
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
    SalvarUpSell(pNovoUpSell) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                pNovoUpSell.id_usuario = LDadosLoja.id_usuario;
                
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_UPSELL, pNovoUpSell)
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

    DeleteUpSellByID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                pNovoUpSell.id_usuario = LDadosLoja.id_usuario;
                var LBody = {
                    id_usuario : LDadosLoja.id_usuario,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_DELETE_UPSELL, LBody)
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
    GetUpSellsByProductID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id_produto: id,
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_UPSELL_BY_PRODUCT_ID, LBody)
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
export default API_MKT 
