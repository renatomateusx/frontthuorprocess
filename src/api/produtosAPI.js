import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var API_PRODUTOS = {
    GetProdutos() {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTOS, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    GetProdutoByID(id) {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_produto: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTO_BY_ID, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    ImportFromShopify() {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTOS_IMPORT, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateTipoProduto(tipo_produto, id_produto) {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    tipo_produto: tipo_produto,
                    id_produto_json: id_produto
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_TIPO_PRODUTO, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateStatusProduto(status_produto, id_produto) {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    status: status_produto,
                    id_produto_json: id_produto
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_PRODUTO, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateCustomFrete(custom_frete, id_produto){
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    custom_frete: custom_frete,
                    id_produto_json: id_produto
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_CUSTOM_FRETE_PRODUTO, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateTipoFrete(tipo_frete, preco_frete, id_produto){
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    tipo_frete: tipo_frete,
                    preco_frete: preco_frete,
                    id_produto_json: id_produto
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_TIPO_FRETE_PRODUTO, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateURLDirProduto(url_dir_cartao, url_dir_boleto, id_produto){
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    url_dir_boleto: url_dir_boleto,
                    url_dir_cartao: url_dir_cartao,
                    id_produto_json: id_produto
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_URL_DIR_PRODUTO, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
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
export default API_PRODUTOS 