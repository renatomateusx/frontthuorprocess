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
    }

};
export default API_LOJA 