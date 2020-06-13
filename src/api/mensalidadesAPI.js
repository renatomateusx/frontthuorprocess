const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_MENSALIDADES = {
    GetMensalidadesPagas() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_MENSALIDADES_PAGAS, LBody)
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
    InsereTransacoesInternasMensalidades(id_usuario, data, json_pagamento, json_pagamento_back_end, status) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    var LBody = {
                        id_usuario: id_usuario,
                        data: data,
                        json_pagamento: json_pagamento,
                        json_pagamento_back_end: json_pagamento_back_end,
                        status: status
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_INSERE_TRANSACOES_INTERNAS_MENSALIDADES, LBody)
                        .then((response) => {
                            //console.log("Response", response);
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log("Reject", error);
                            reject(error);
                        });
                }
            }
        });
    },
    
}
export default API_MENSALIDADES 
