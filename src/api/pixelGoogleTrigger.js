import UTILIS_API from "./utilisAPI";

var API_GOOGLE_PIXEL = {
    InsertScript() {
        return new Promise(async (resolve, reject) => {
            const dadosPixel = await UTILIS_API.GetPixelSession();
            dadosPixel.forEach(async (obj, i) => {
                if (obj.tipo == 2) {
                    //console.log("Tipo 2");
                    var LInsertScript = await this.InsertScriptById(obj.google_analytics_id);
                    var LInsertTagScript = await this.InsertTagScript(obj.google_analytics_id, obj.google_analytics_id);
                }
            });

            resolve(1);
        });
    },
    async TriggerGoogleEvent(event, boleto) {
        var LTagEvent = "AW-{ID}/{ROTULO}";
        const dadosPixel = await UTILIS_API.GetPixelSession();
        dadosPixel.forEach((obj, i) => {
            if (obj.tipo == 2) {
                var LProdutos = [];
                if (obj.google_id_conversao != undefined && obj.google_id_conversao.length > 0) {
                    if (obj.array_produtos_id != null && obj.array_produtos_id.length > 3) {
                        LProdutos = JSON.parse(obj.array_produtos_id);
                        if (LProdutos.length > 0) {
                            const LProdutosCart = JSON.parse(sessionStorage.getItem("cart"));
                            LProdutos.forEach((obj, i) => {
                                const LProdutoFinded = LProdutosCart.find(x => x.id_thuor == obj.id_thuor);
                                if (LProdutoFinded != undefined) {
                                    if (obj.marca_boleto && boleto != undefined) {
                                        gtag('event', event);
                                        gtag('event', event, {
                                            'send_to': LTagEvent.replace('{ID}', obj.google_id_conversao).replace('{ROTULO}', obj.google_rotulo_conversao)
                                        });
                                        //console.log("Event 1");
                                    }
                                    else if (boleto == undefined) {
                                        gtag('event', event);
                                        gtag('event', event, {
                                            'send': LTagEvent.replace('{ID}', obj.google_id_conversao).replace('{ROTULO}', obj.google_rotulo_conversao)
                                        });
                                        //console.log("Event 2");
                                    }
                                }
                            })
                        }
                    }
                    else if (boleto !== undefined && obj.marca_boleto == 1) {
                        gtag('event', event);
                        gtag('event', event, {
                            'send_to': LTagEvent.replace('{ID}', obj.google_id_conversao).replace('{ROTULO}', obj.google_rotulo_conversao)
                        });
                        //console.log("Event 3", event);
                    }
                    else if (boleto == undefined) {
                        gtag('event', event);
                        gtag('event', event, {
                            'send_to': LTagEvent.replace('{ID}', obj.google_id_conversao).replace('{ROTULO}', obj.google_rotulo_conversao)
                        });
                        //console.log("Event 4", event);
                    }
                }
            }
        })


    },
    InsertScriptById(id) {
        return new Promise(async (resolve, reject) => {
            const pluginGG = document.createElement("script");
            pluginGG.onload = function () {
                resolve(true);
            };
            pluginGG.setAttribute(
                "src",
                "https://www.googletagmanager.com/gtag/js?id=UA-" + id
            );
            pluginGG.async = true;
            document.head.appendChild(pluginGG);
        });
    },
    InsertTagScript(id, id_aly) {
        return new Promise(async (resolve, reject) => {
            const pluginGG2 = document.createElement("script");
            var inlineScript = document.createTextNode("window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-" + id + "', {'send_page_view': false}); gtag('config', 'AW-" + id_aly + "');");
            pluginGG2.appendChild(inlineScript);
            document.head.appendChild(pluginGG2);
            resolve(1);
        });
    },

    /*
    EVENTOS
    gtag('event', 'add_payment_info', {
        'send_to': LTagEvent.replace('{ID}', obj.google_id_conversao).replace('{ROTULO}', obj.googe_rotulo_conversao)
    });
                            
    
    begin_checkout
    add_payment_info
    purchase
    page_view
    
    Para mais, acesse: https://support.google.com/analytics/answer/6317499s
    
    */



}
export default API_GOOGLE_PIXEL 