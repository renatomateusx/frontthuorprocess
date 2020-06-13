const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_REVIEWS = {
    GetReviews(id_produto, url_loja) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                var LBody = {
					id_produto: id_produto,
					url_loja: url_loja
				}
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_REVIEWS, LBody)
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
    
}
export default API_REVIEWS 
