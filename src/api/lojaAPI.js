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
    }

};
export default API_LOJA 