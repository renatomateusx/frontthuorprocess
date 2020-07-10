export default Object.freeze({
  SAND_BOX_MP_PUBLICK_KEY: 'TEST-855e506f-55a1-4372-8371-f9029f000dfe',
  SAND_BOX_MP_ACCESS_TOKEN: 'TEST-4338451460338304-062723-f2a8d25a06742e898d2b113a30045269-128404654',
  PRODUCAO_BOX_MP_PUBLICK_KEY: 'APP_USR-31d91702-7d63-4ea4-9cb9-bb571658239e',
  PRODUCAO_BOX_MP_ACCESS_TOKEN: 'APP_USR-4338451460338304-062723-6b49958aaa1cf3d4c37d8f0dd984c7f8-128404654',

  /* PLATAFORMAS */
  PLATAFORMA_SHOPIFY: 1,

  WEBSITE: 'https://app.thuor.com',
  WEBSITE_CART: 'https://app.thuor.com/cart/items?',

  /* PLATAFORMAS */
  //WEBSITEAPI: 'http://localhost:3000/',
  //WEBSITEAPI: 'https://hmlapi.thuor.com:9443/',
  WEBSITEAPI: 'https://api.thuor.com:7443/',
  URL_GET_IP: 'https://api.ipify.org?format=json',
  PATH_PS_SESSION: 'checkouts/SessionPagSeguro',
  PATH_PS_CHARGE: 'checkouts/DoPayPagSeguroCard',
  MSG_BOLETO_ENVIO: 'Aqui está o boleto do produto *PRODUTO_NAME*, no valor de R$ VALOR_VALOR Vencimento: *VENCIMENTO* Código de barras: *CODIGO_BARRAS* Link: LINK_LINK',
  PATH_GET: 'index',
  PATH_LOGIN: 'users/EfetuaLogin',
  PATH_GET_BY_ID: 'users/GetUserByIDExternal',
  PATH_VERIFICA_EMAIL_CADASTRADO: 'users/VerificaEmailCadastro',
  PATH_REDEFINE_SENHA: 'users/RedefinirSenha',
  PATH_ALTERA_SENHA: 'users/AlterarSenha',
  PATH_ADD_USER: 'users/AddUser',
  PATH_UPDATE_USER: 'users/UpdateUser',
  PATH_UPDATE_ULTIMO_PAGAMENTO_MENSALIDADE_USER: 'users/UpdateUltimoPagamentoUser',  
  PATH_USER_MENSALIDADE: 'users/GetUsersMensalidades',  
  PATH_LOGIN_ATIVAR_EMAIL: 'users/AtivarEmail',
  PATH_TOKEN: 'users/VerificaToken',
  PATH_PRODUTOS: 'produtos/GetProdutos',
  PATH_PRODUTO_BY_ID: 'produtos/GetProdutoByID',
  PATH_PRODUTO_BY_ID_THUOR_UNIQUE: 'produtos/GetProdutoByIDThuorUnique',
  PATH_PRODUTO_BY_ID_THUOR: 'produtos/GetProdutoByIDThuor',
  PATH_PRODUTO_ID_THUOR: 'produtos/GetProdutoIDThuor',
  PATH_PRODUTO_BY_ID_IMPORTED: 'produtos/GetProdutoByIDImported',
  PATH_UPDATE_STATUS_PRODUTO: 'produtos/UpdateStatusProduto',
  PATH_UPDATE_TIPO_PRODUTO: 'produtos/UpdateTipoProduto',
  PATH_PRODUTOS_IMPORT: 'integraFuncionalidadeShopify/ImportarProdutosShopify',
  
  PATH_UPDATE_CUSTOM_FRETE_PRODUTO: 'produtos/UpdateCustomFreteProduto',
  PATH_UPDATE_TIPO_FRETE_PRODUTO: 'produtos/UpdateTipoFreteProduto',
  PATH_UPDATE_URL_DIR_PRODUTO: 'produtos/UpdateURLDirProduto',
  PATH_GET_PRAZO_ENVIO_VARIANTE_BY_ID: 'produtos/GetPrazoEnvioVarianteByID',
  PATH_SALVA_PRAZO_ENVIO_VARIANTE_BY_ID: 'produtos/SalvaPrazoEnvioVarianteByID',
  PATH_SALVA_GERENCIAMENTO_ESTOQUE_VARIANTE_BY_ID: 'produtos/SalvaGerenciamentoEstoqueVarianteByID',
  PATH_DESATIVA_GERENCIAMENTO_ESTOQUE_VARIANTE_BY_ID: 'produtos/DesativaGerenciamentoEstoquePorVarianteID',
  PATH_GET_DADOS_ESTOQUE_VARIANTE_BY_ID: 'produtos/GetDadosEstoquePorVarianteID',
  PATH_LOJA: 'integracaoShopify/GetDadosLoja',
  PATH_INTEGRACAO_PLATAFORMA: 'integracaoShopify/GetIntegracaoPlataforma',
  PATH_INTEGRACAO_PLATAFORMA_BY_ID: 'integracaoShopify/GetIntegracaoPlataformaByID',
  PATH_INSERT_PLATAFORMA_SHOPIFY: 'integracaoShopify/InserePlataformaShopify',
  PATH_UPDATE_STATUS_PLATAFORMA: 'integracaoShopify/UpdateStatus',
  PATH_AUTO_SINC_PLATAFORMA_SHOPIFY: 'integracaoShopify/AutoSinc',
  PATH_LIMPA_CARRINHO_PLATAFORMA_SHOPIFY: 'integracaoShopify/PulaCarrinho',
  PATH_PULA_CARRINHO_PLATAFORMA_SHOPIFY: 'integracaoShopify/LimpaCarrinho',
  
  PATH_INSTALAR_REINSTALAR_PLATAFORMA_SHOPIFY: 'importarProdutosShopify/ReInstalarIntegracao',
  PATH_INSTALAR_CHECKOUT_PLATAFORMA_SHOPIFY: 'integraFuncionalidadeShopify/ReInstalarIntegracao',
  PATH_INSTALAR_POP_UP_PLATAFORMA_SHOPIFY: 'integraFuncionalidadeShopify/InstalarAppPopUp',
  
  PATH_LOJA_BY_ID_USUARIO: 'integracaoShopify/GetDadosLojaByIDUsuario',
  PATH_VIACEP: 'https://viacep.com.br/ws/@/json/',
  PATH_VIACEP_SERVER: 'extras/ViaCEP',
  PATH_SEND_EMAIL_BOLETO: 'utilisEmail/SendEmailBoleto',
  PATH_GET_FRETE: 'logisticas/GetFretes',
  PATH_GET_TRACKING_CODE: 'logisticas/TrackingCode',
  PATH_GET_CHECKOUTS: 'checkouts/GetCheckoutAtivo',
  PATH_GET_CHECKOUTS_BY_ID: 'checkouts/GetCheckoutByID',
  PATH_PAY_CHECKOUT: 'checkouts/DoPay',
  PATH_PAY_CHECKOUT_THUOR_COMISSION: 'checkoutThuorComission/DoPay',
  PATH_INTEGRACAO_CHECKOUT: 'checkouts/GetIntegracaoCheckout',
  PATH_INTEGRACAO_CHECKOUT_BY_ID: 'checkouts/GetIntegracaoCheckoutByID',
  PATH_INSERT_CHECKOUT_MP: 'checkouts/InsertCheckoutMP',
  PATH_UPDATE_STATUS_CHECKOUT_MP: 'checkouts/UpdateStatusMP',
  PATH_UPDATE_ATIVA_BOLETO_CHECKOUT_MP: 'checkouts/UpdateAtivaBoletoMP',
  PATH_UPDATE_ATIVA_AUTO_PROCESSAMENTO_CHECKOUT_MP: 'checkouts/UpdateAutoProcessamentoMP',
  PATH_PAY_CHECKOUT_TICKET: 'checkouts/DoPayTicket',

  /* TRANSAÇÕES */
  PATH_PAY_GET_PEDIDOS: 'transacoes/GetPedidos',
  PATH_PAY_GET_PEDIDOS_POR_ID: 'transacoes/GetPedidosByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_POR_ID: 'transacoes/ReembolsarPedidoByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_PS_POR_ID: 'transacoes/ReembolsarPedidoPSByID',
  PATH_SET_PAYMENT_COMISSION_DONE: 'transacoes/SetPaymentComissionDone',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_PAYU_POR_ID: 'transacoes/ReembolsarPedidoPayUID',
  PATH_PAY_GET_TRANSACOES_INTERNAS: 'transacoes/GetTransacoesInternas',
  PATH_GET_CHART_TRANSACOES_PER_DAY: 'transacoes/GetReportQtdPerDaySales',  
  PATH_GET_CHART_SALES_MONTH: 'transacoes/GetSalesMonth',  
  PATH_PAY_GET_PAGAMENTOS_EFETUADOS_POR_SELLER: 'transacoes/GetPagamentosEfetuadosPorSeller',  


  /* UP SELL */

  PATH_GET_UPSELL: 'upsells/GetUpSells',
  PATH_GET_UPSELL_BY_ID: 'upsells/GetUpSellsByID',
  PATH_SAVE_UPSELL: 'upsells/SaveUpSells',
  PATH_DELETE_UPSELL: 'upsells/DeleteUpSellByID',
  PATH_GET_UPSELL_BY_PRODUCT_ID: 'upsells/GetUpSellByProductID',

  /* CROSS SELL */
  PATH_GET_CROSSSELL: 'crosssells/GetCrossSells',
  PATH_GET_CROSSSELL_BY_ID: 'crosssells/GetCrossSellsByID',
  PATH_SAVE_CROSSSELL: 'crosssells/SaveCrossSells',
  PATH_DELETE_CROSSSELL: 'crosssells/DeleteCrossSellByID',
  PATH_GET_CROSSSELL_BY_PRODUCT_ID: 'crosssells/GetCrossSellByProductID',

  /* DOWN SELL */
  PATH_GET_DOWNSELL: 'downsells/GetDownsells',
  PATH_GET_DOWNSELL_BY_ID: 'downsells/GetDownsellsByID',
  PATH_SAVE_DOWNSELL: 'downsells/SaveDownsells',
  PATH_DELETE_DOWNSELL: 'downsells/DeleteDownSellByID',
  PATH_GET_DOWNSELL_BY_PRODUCT_ID: 'downsells/GetDownSellByProductID',

  /* CARRINHO ABANDONADO */
  PATH_GET_CARRINHO: 'carrinhoAbandonado/GetCarrinho',
  PATH_SAVE_CARRINHO: 'carrinhoAbandonado/SaveCarrinho',
  PATH_UPDATE_STATUS_CARRINHO: 'carrinhoAbandonado/UpdateStatusCarrinho',
  PATH_UPDATE_CADOS_CLIENTE_CARRINHO: 'carrinhoAbandonado/UpdateDadosClienteCarrinho',

  /* RECUPERA BOLETO */
  PATH_GET_BOLETOS: 'recupera_boleto/GetBoletos',
  PATH_SAVE_BOLETOS: 'recupera_boleto/SaveBoletos',
  PATH_UPDATE_STATUS_BOLETOS: 'recupera_boleto/UpdateStatusBoleto',


  CONSTANTE_VENCIMENTO_BOLETO: 3,
  CONSTANTE_EMAIL_PAG_SEGURO: 'renatomateusx@gmail.com',
  
  PATH_GET_MENSAGERIA: 'mensageria/GetMensagens',
  PATH_SAVE_MENSAGERIA: 'mensageria/SaveMensagem',
  PATH_DELETE_MENSAGERIA: 'mensageria/DeleteMensagensByID',
  PATH_GET_MENSAGERIA_BY_ID: 'mensageria/GetMensagemByID',
  PATH_GET_MENSAGERIA_WHATS_APP: 'mensageria/GetMensagensWhatsApp',
  PATH_GET_PIXEL: 'pixels/GetPixels',
  PATH_SAVE_PIXEL: 'pixels/SavePixels',
  PATH_DELETE_PIXEL: 'pixels/DeletePixelByID',
  PATH_GET_PIXEL_BY_ID: 'pixels/GetPixelByID',

  PATH_GET_CLIENTES: 'clientes/GetClientes',
  PATH_SAVE_CLIENTES: 'clientes/SaveClientes',
  PATH_DELETE_CLIENTES: 'clientes/DeleteClienteByID',
  PATH_GET_CLIENTE_BY_ID: 'clientes/GetClienteByID',
  PATH_SAVE_LEAD: 'clientes/SaveLead',

  PATH_PAY_CHECKOUT_PAY_U: 'checkouts/DoPayCardPayU',

  PATH_GET_CUPOM: 'cupons/GetCupons',
  PATH_GET_CUPOM_BY_ID: 'cupons/GetCupomByID',
  PATH_SAVE_CUPOM: 'cupons/SaveCupom',
  PATH_DELETE_CUPOM: 'cupons/DeleteCupomByID',
  PATH_GET_CUPOM_BY_PRODUCT_ID: 'cupons/GetCupomByProductID',
  PATH_GET_CUPOM_BY_CODE: 'cupons/GetCupomByCODE',
  PATH_UPDATE_NUMERO_UTILIZACAO_CUPOM: 'cupons/UpdateNumeroUtilizacao',

  PATH_GET_CAMPANHAS: 'campanhas/GetCampanhas',
  PATH_INTEGRACAO_CAMPANHA: 'campanhas/GetIntegracaoCampanha',
  PATH_SAVE_CAMPANHA_CARRINHO_ABANDONADO: 'campanhas/SaveCampanhaCartAbandon',
  PATH_GET_CAMPANHA_CARRINHO_ABANDONADO: 'campanhas/GetCampanhaCarrinhoAbandonado',
  PATH_INTEGRACAO_CAMPANHA_BY_ID: 'campanhas/GetIntegracaoCampanhaByID',
  PATH_INSERT_INTEGRACAO_CAMPANHA: 'campanhas/InsertIntegracaoCampanha',
  PATH_UPDATE_INTEGRACAO_CAMPANHA: 'campanhas/UpdateIntegracaoCampanha',

  /* CAMPANHA BOLETO */
  
  PATH_GET_CAMPANHAS_BOLETO: 'campanhas/GetCampanhasBoleto',
  PATH_INTEGRACAO_CAMPANHA_BOLETO: 'campanhas/GetIntegracaoCampanhaBoleto',
  PATH_SAVE_CAMPANHA_BOLETO: 'campanhas/SaveCampanhaBoleto',
  PATH_GET_CAMPANHA_BOLETO: 'campanhas/GetCampanhaBoleto',
  PATH_INTEGRACAO_CAMPANHA_BY_ID_BOLETO: 'campanhas/GetIntegracaoCampanhaByIDBoleto',

  /* LEAD */

  PATH_LEAD_GET_DADOS_COMPRADOR: 'clientes/GetDadosCompradorLead',

  /* APPS */
  PATH_GET_APPS: 'apps/GetApps',
  PATH_GET_APPS_BY_ID: 'apps/GetAppByID',
  PATH_INTEGRACAO_APPS: 'apps/GetIntegracaoApps',
  PATH_SAVE_INTEGRACAO_APPS: 'apps/SaveApps',
  PATH_GET_STATUS_APP: 'apps/GetStatusApp',


  /* PLANOS */

  PATH_GET_PLANOS: 'planos/GetPlanos',
  PATH_GET_PLANOS_BY_ID: 'planos/GetPlanosByID',

  /* RASTREIO */
  PAT_GET_FULFILLMENTS: 'fulfillments/GetFulFillment',
  PAT_INSERT_FULFILLMENTS: 'fulfillments/InsertFulFillment',
  PAT_UPDATE_STATUS_INTERNO_FULFILLMENTS: 'fulfillments/UpdateFulFillmentStatusInterno',




  /* CONSTANTES SESSIONS */
  SESSION_DATA_CLIENTES: 'dc',
  SESSION_DATA_CRIPTO: 'cr',
  SESSION_FRETES: 'f',
  SESSION_TTRACK: 'tt',
  SESSION_CART: 'c',
  SESSION_USER: 'x',
  SESSION_PIXEL: 'p',
  SESSION_LOJA: 'l',
  SESSION_LIMITE_BUY: 'lil',
  SESSION_CHECKOUT: 'sc',
  SESSION_ATUAL_PAGE: 'atp',
  SESSION_OPTION_CART_OPENED: 'opt',
  SESSION_ABANDONED_CART: 'ab',

  /* MENSALIDADES*/
  PATH_GET_MENSALIDADES_PAGAS: 'mensalidades/GetMensalidadesPagas',
  PATH_GET_MENSALIDADES_BY_ID: 'mensalidades/GetMensalidadesByID',
  PATH_PAY_INSERE_TRANSACOES_INTERNAS_MENSALIDADES: 'mensalidades/insereTransacaoInternaMensalidades',

  /* AJUDA */
  PATH_GET_AJUDA: 'ajuda/GetAjuda',
  PATH_GET_AJUDA_BY_ID: 'ajuda/GetAjudaByID',
  PATH_SAVE_AJUDA: 'ajuda/SaveAjuda',
  PATH_DELETE_AJUDA_BY_ID: 'ajuda/DeleteAjudaByID',


  /* REVIEWS */
  PATH_GET_REVIEWS: 'reviews/GetReviewByID',

  /* INSTALA APPS SHOPIFY */
  PATH_INSTALA_APP_THUOR_PARCEL_SHOPIFY: 'integraFuncionalidadeShopify/InstalarAppThuorParcel',
  PATH_INSTALTL_APP_REVIEW: 'integraFuncionalidadeShopify/InstalarAppReview',
  PATH_INSTALTL_APP_CROSS_SELL: 'integraFuncionalidadeShopify/InstalarAppThuorCrossSell',
  

  CONSTANTE_THUOR: 'Thuor',
  CONSTANTE_THUOR_EMAIL: 'renatomateusx@gmail.com',

 
  
});
