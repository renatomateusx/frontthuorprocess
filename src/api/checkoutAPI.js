import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var API_CHECKOUT = {
    DoPayBackEnd(pay) {
        return new Promise((resolve, reject) => {
            let LBody = {
                pay: pay
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PAY_CHECKOUT, LBody)
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
export default API_CHECKOUT 