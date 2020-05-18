var API_FACEBOOK_PIXEL = {
    InsertScript() {
        return new Promise((resolve, reject) => {
            const pluginFB = document.createElement("script");
            var inlineScript = document.createTextNode("!function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')");
            pluginFB.appendChild(inlineScript);
            document.head.appendChild(pluginFB);
            if (sessionStorage.getItem("pixels") != null) {
                const dadosPixel = JSON.parse(sessionStorage.getItem("pixels"));
                dadosPixel.forEach((obj, i) => {
                    if (obj.tipo == 1) {
                        fbq('init', obj.facebook_id_pixel);
                    }
                });
            }
            resolve(1);
        });
    },
    TriggerFacebookEvent(event, boleto) {
        if (sessionStorage.getItem("pixels") != null) {
            const dadosPixel = JSON.parse(sessionStorage.getItem("pixels"));
            dadosPixel.forEach((obj, i) => {
                if (obj.tipo == 1) {
                    var LProdutos = [];
                    if (obj.facebook_id_pixel != undefined && obj.facebook_id_pixel.length > 0) {
                        if (obj.array_produtos_id != null & obj.array_produtos_id.length > 0) {
                            LProdutos = JSON.parse(obj.array_produtos_id);
                            if (LProdutos.length > 0) {
                                const LProdutosCart = JSON.parse(sessionStorage.getItem("cart"));
                                LProdutos.forEach((obj, i) => {
                                    const LProdutoFinded = LProdutosCart.find(x => x.id_thuor == obj.id_thuor);
                                    if (LProdutoFinded != undefined) {
                                        if (obj.marca_boleto && boleto != undefined) {
                                            fbq('track', event);
                                        }
                                        else if (boleto == undefined) {
                                            fbq('track', event);
                                        }
                                    }
                                })
                            }
                        }
                        else if (boleto !== undefined && obj.marca_boleto == 1) {
                            fbq('track', event);
                        }
                        else if (boleto == undefined) {
                            fbq('track', event);
                        }
                    }
                }
            })
        }

    }

    /*
    EVENTOS
    
    fbq('track', 'AddPaymentInfo');
    fbq('track', 'AddToCart');
    fbq('track', 'AddToWishlist');
    fbq('track', 'CompleteRegistration');
    fbq('track', 'Contact');
    fbq('track', 'InitiateCheckout');
    fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});
    
    Para mais, acesse: https://www.facebook.com/business/help/402791146561655?id=1205376682832142
    
    */



}
export default API_FACEBOOK_PIXEL 