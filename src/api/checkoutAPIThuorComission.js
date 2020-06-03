import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import UTILIS_API from './utilisAPI';
var API_CHECKOUT_THUOR_COMISSION = {
    DoPayBackEnd(cripto) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                pay: cripto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PAY_CHECKOUT_THUOR_COMISSION, LBody)
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


};
export default API_CHECKOUT_THUOR_COMISSION