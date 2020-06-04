import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import UTILIS_API from "../api/utilisAPI";
var API_CHECKOUT = {
    GetPublicKey(type, token) {
        return new Promise(async (resolve, reject) => {

            let LBody = {
                "type": type,
                "token": token
            }

            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PS_SESSION, LBody)
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
    DoPayPagSeguro(pCrypto) {
        return new Promise(async (resolve, reject) => {
            var LBody = {
                LCrypto: pCrypto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PS_CHARGE, LBody, {
                    'Content-Type': 'application/json',
                })
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
    DoPayBackEnd(cripto) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                pay: cripto
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
    },
    DoPayBackEndTicket(cripto) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                pay: cripto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PAY_CHECKOUT_TICKET, LBody)
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
    GetCheckouts() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

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
    },
    GetCheckoutsByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    gateway: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CHECKOUTS_BY_ID, LBody)
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
    GetIntegracaoCheckout() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                axios
                    .get(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_CHECKOUT)
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
    GetIntegracaoCheckoutByID(id) {
        return new Promise(async (resolve, reject) => {
            const LUser = await UTILIS_API.GetUserSession();

            if (LUser !== null && LUser !== undefined) {

                let LBody = {
                    id_usuario: LUser.user.id,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_CHECKOUT_BY_ID, LBody)
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
    InsertCheckoutMP(checkout_form) {
        return new Promise(async (resolve, reject) => {

            const LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INSERT_CHECKOUT_MP, checkout_form)
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

    UpdateStatusMP(checkout_form) {
        return new Promise(async (resolve, reject) => {
            const LUser = await UTILIS_API.GetUserSession();

            if (LUser !== null && LUser !== undefined) {
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_CHECKOUT_MP, checkout_form)
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
    UpdateAtivaBoletoMP(checkout_form) {
        return new Promise(async (resolve, reject) => {

            const LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_ATIVA_BOLETO_CHECKOUT_MP, checkout_form)
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
    UpdateAutoProcessamentoMP(checkout_form) {
        return new Promise(async (resolve, reject) => {

            const LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_ATIVA_AUTO_PROCESSAMENTO_CHECKOUT_MP, checkout_form)
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


};
export default API_CHECKOUT 