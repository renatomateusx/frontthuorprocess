import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var UTILIS_API = {
    VIA_CEP(cep) {
        return new Promise((resolve, reject) => {           
            var URL = constantes.PATH_VIACEP.replace("@", cep);
            axios
                .get(URL)
                .then((response) => {
                    //console.log("Response", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("Reject", error);
                    reject(error);
                });

        });
    }

};
export default UTILIS_API 