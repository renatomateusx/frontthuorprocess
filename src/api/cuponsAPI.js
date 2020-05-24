const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_CUPOM = {
    GetCupons() {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CUPOM, LBody)
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
    GetCupomByID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CUPOM_BY_ID, LBody)
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
    SalvarCupom(pNovoCupom) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                pNovoCupom.id_usuario = LDadosLoja.id_usuario;
                
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_CUPOM, pNovoCupom)
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

    DeleteCupomByID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                pNovoUpSell.id_usuario = LDadosLoja.id_usuario;
                var LBody = {
                    id_usuario : LDadosLoja.id_usuario,
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
    GetCupomByProductID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
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
    GetCupomByCODE(code) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    code: code.codigo_cupom,
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CUPOM_BY_CODE, LBody)
                    .then((response) => {
                        console.log("ResponseC", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateNumeroUtilizacao(id, numero_utilizacao) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id: id,
                    numero_utilizacao: numero_utilizacao
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_NUMERO_UTILIZACAO_CUPOM, LBody)
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
export default API_CUPOM 
