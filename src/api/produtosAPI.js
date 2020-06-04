import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
import UTILIS_API from "../api/utilisAPI";
var API_PRODUTOS = {
    GetProdutos() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTOS, LBody, LHeaders)
                    .then((response) => {
                        ////console.log("Response", response);
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
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_produto: id
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTO_BY_ID, LBody, LHeaders)
                    .then((response) => {
                        // console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    GetProdutoByIDThuor(id, quant, variant) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                id_produto: id,
                quantity: quant,
                variant: variant
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTO_BY_ID_THUOR, LBody)
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
    GetProdutoIDThuor(id) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                id_produto: id
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTO_ID_THUOR, LBody)
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
    GetProdutoByIDImported(id, quant, variant) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                id_produto: id,
                quantity: quant,
                variant: variant
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTO_BY_ID_IMPORTED, LBody)
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
    ImportFromShopify() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTOS_IMPORT, LBody, LHeaders)
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
    UpdateTipoProduto(tipo_produto, id_produto) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    tipo_produto: tipo_produto,
                    id_produto_json: id_produto
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_TIPO_PRODUTO, LBody, LHeaders)
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
    UpdateStatusProduto(status_produto, id_produto) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    status: status_produto,
                    id_produto_json: id_produto
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_PRODUTO, LBody, LHeaders)
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
    UpdateCustomFrete(custom_frete, id_produto) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    custom_frete: custom_frete,
                    id_produto_json: id_produto
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_CUSTOM_FRETE_PRODUTO, LBody, LHeaders)
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
    UpdateTipoFrete(tipo_frete, preco_frete, id_produto) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    tipo_frete: tipo_frete,
                    preco_frete: preco_frete,
                    id_produto_json: id_produto
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_TIPO_FRETE_PRODUTO, LBody, LHeaders)
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
    UpdateURLDirProduto(url_dir_cartao, url_dir_boleto, id_produto) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    url_dir_boleto: url_dir_boleto,
                    url_dir_cartao: url_dir_cartao,
                    id_produto_json: id_produto
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_URL_DIR_PRODUTO, LBody, LHeaders)
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
    GetPrazoEnvioVarianteByID(id_variante, campo) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id,
                    id_variante: id_variante,
                    campo: campo
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_PRAZO_ENVIO_VARIANTE_BY_ID, LBody, LHeaders)
                    .then((response) => {

                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    SalvarPrazoEnvioByID(id_variante, prazo_envio) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id,
                    id_variante: id_variante,
                    prazo_envio: prazo_envio
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SALVA_PRAZO_ENVIO_VARIANTE_BY_ID, LBody, LHeaders)
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
    SalvarQuantidadeEstoqueGerenciamentoPorVarianteID(id_variante, quantidade, quantidade_minima) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id,
                    id_variante: id_variante,
                    quantidade: quantidade,
                    quantidade_minima: quantidade_minima
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SALVA_GERENCIAMENTO_ESTOQUE_VARIANTE_BY_ID, LBody, LHeaders)
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
    DesativaGerenciamentoPorVarianteID(id_variante) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id,
                    id_variante: id_variante
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_DESATIVA_GERENCIAMENTO_ESTOQUE_VARIANTE_BY_ID, LBody, LHeaders)
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
    GetDadosEstoquePorVarianteID(id_variante) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id,
                    id_variante: id_variante
                }
                const LHeaders = await API_HEADERS.getHeader();
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_DADOS_ESTOQUE_VARIANTE_BY_ID, LBody, LHeaders)
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
export default API_PRODUTOS 