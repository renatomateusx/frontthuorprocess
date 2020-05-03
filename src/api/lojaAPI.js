import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var API_LOJA = {
    GetDadosLoja(shop) {
        return new Promise((resolve, reject) => {
            let LBody = {
                shop: shop
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_LOJA, LBody)
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
    GetDadosLojaByIdUsuario(id_usuario) {
        return new Promise((resolve, reject) => {
            let LBody = {
                id_usuario: id_usuario
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_LOJA_BY_ID_USUARIO, LBody)
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
    GetFretes() {
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));

                let LBody = {
                    shop: LDadosLoja.url_loja
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_FRETE, LBody)
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
    GetCheckouts() {
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CHECKOUTS, LBody)
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

};
export default API_LOJA 