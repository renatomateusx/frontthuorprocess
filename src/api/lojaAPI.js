import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
import UTILIS_API from "../api/utilisAPI";
var API_LOJA = {
    GetDadosLojaS() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
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
            }

        });
    },
    GetDadosLoja(shop) {
        return new Promise(async (resolve, reject) => {
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
        return new Promise(async (resolve, reject) => {
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
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

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

    GetIntegracaoPlataforma() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                axios
                    .get(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_PLATAFORMA)
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
    GetIntegracaoPlataformaByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                let LBody = {
                    id_usuario: LDadosUser.user.id,
                    plataforma: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_PLATAFORMA_BY_ID, LBody)
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
    InsertPlataformShopify(plataforma) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INSERT_PLATAFORMA_SHOPIFY, plataforma)
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
    UpdateStatus(plataforma) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_PLATAFORMA, plataforma)
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
    AutoSinc(plataforma) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_AUTO_SINC_PLATAFORMA_SHOPIFY, plataforma)
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
    PulaCarrinho(plataforma) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_LIMPA_CARRINHO_PLATAFORMA_SHOPIFY, plataforma)
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
    LimpaCarrinho(plataforma) {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {

                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PULA_CARRINHO_PLATAFORMA_SHOPIFY, plataforma)
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
    InstalarReinstalarShopify() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                var LBody = {
                    id_usuario: LDadosUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INSTALAR_REINSTALAR_PLATAFORMA_SHOPIFY, LBody)
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
    InstalarReinstalarAppCheckoutShopify() {
        return new Promise(async (resolve, reject) => {
            const LDadosUser = await UTILIS_API.GetUserSession();
            if (LDadosUser != undefined) {
                var LBody = {
                    id_usuario: LDadosUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_INSTALAR_CHECKOUT_PLATAFORMA_SHOPIFY, LBody)
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
export default API_LOJA 