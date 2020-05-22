const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
var API_CUPOM = {
    GetCupons() {
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));

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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));

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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));
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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));
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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));
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
}
export default API_CUPOM 
