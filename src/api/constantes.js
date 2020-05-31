export default Object.freeze({
  WEBSITEAPI: 'http://localhost:3000/',
  URL_GET_IP: 'https://api.ipify.org?format=json',
  //API_PAG_SEGURO: 'https://sandbox.api.pagseguro.com/',
  API_PAG_SEGURO: 'https://ws.sandbox.pagseguro.uol.com.br/v2/',
  PATH_PS_SESSION: 'checkouts/SessionPagSeguro',
  PATH_PS_CHARGE: 'checkouts/DoPayPagSeguroCard',
  MSG_BOLETO_ENVIO: 'Aqui está o boleto do produto *PRODUTO_NAME*, no valor de R$ VALOR_VALOR Vencimento: *VENCIMENTO* Código de barras: *CODIGO_BARRAS* Link: LINK_LINK',
  PATH_GET: 'index',
  PATH_LOGIN: 'users/EfetuaLogin',
  PATH_VERIFICA_EMAIL_CADASTRADO: 'users/VerificaEmailCadastro',
  PATH_REDEFINE_SENHA: 'users/RedefinirSenha', 
  PATH_ALTERA_SENHA: 'users/AlterarSenha',  
  PATH_ADD_USER: 'users/AddUser',
  PATH_LOGIN_ATIVAR_EMAIL: 'users/AtivarEmail',
  PATH_TOKEN: 'users/VerificaToken',
  PATH_PRODUTOS: 'produtos/GetProdutos',
  PATH_PRODUTO_BY_ID: 'produtos/GetProdutoByID',
  PATH_PRODUTO_BY_ID_THUOR: 'produtos/GetProdutoByIDThuor',
  PATH_PRODUTO_ID_THUOR: 'produtos/GetProdutoIDThuor',
  PATH_PRODUTO_BY_ID_IMPORTED: 'produtos/GetProdutoByIDImported',
  PATH_UPDATE_STATUS_PRODUTO: 'produtos/UpdateStatusProduto',
  PATH_UPDATE_TIPO_PRODUTO: 'produtos/UpdateTipoProduto',
  PATH_PRODUTOS_IMPORT: 'integraFuncionalidadeShopify/ImportarProdutosShopify',
  PATH_INSTALTL_APP_REVIEW: 'integraFuncionalidadeShopify/InstalarAppReview',
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
  PATH_LOJA_BY_ID_USUARIO: 'integracaoShopify/GetDadosLojaByIDUsuario',
  PATH_VIACEP: 'https://viacep.com.br/ws/@/json/',
  PATH_VIACEP_SERVER: 'extras/ViaCEP',
  PATH_GET_FRETE: 'logisticas/GetFretes',
  PATH_GET_TRACKING_CODE: 'logisticas/TrackingCode',
  PATH_GET_CHECKOUTS: 'checkouts/GetCheckoutAtivo',
  PATH_GET_CHECKOUTS_BY_ID: 'checkouts/GetCheckoutByID',
  PATH_PAY_CHECKOUT: 'checkouts/DoPay',
  PATH_INTEGRACAO_CHECKOUT: 'checkouts/GetIntegracaoCheckout',
  PATH_INTEGRACAO_CHECKOUT_BY_ID: 'checkouts/GetIntegracaoCheckoutByID',
  PATH_INSERT_CHECKOUT_MP: 'checkouts/InsertCheckoutMP',
  PATH_UPDATE_STATUS_CHECKOUT_MP: 'checkouts/UpdateStatusMP',
  PATH_UPDATE_ATIVA_BOLETO_CHECKOUT_MP: 'checkouts/UpdateAtivaBoletoMP',
  PATH_UPDATE_ATIVA_AUTO_PROCESSAMENTO_CHECKOUT_MP: 'checkouts/UpdateAutoProcessamentoMP',
  PATH_PAY_CHECKOUT_TICKET: 'checkouts/DoPayTicket',
  PATH_PAY_GET_PEDIDOS: 'transacoes/GetPedidos',
  PATH_PAY_GET_PEDIDOS_POR_ID: 'transacoes/GetPedidosByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_POR_ID: 'transacoes/ReembolsarPedidoByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_PS_POR_ID: 'transacoes/ReembolsarPedidoPSByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_PAYU_POR_ID: 'transacoes/ReembolsarPedidoPayUID',
  CONSTANTE_VENCIMENTO_BOLETO: 3,
  CONSTANTE_EMAIL_PAG_SEGURO: 'renatomateusx@gmail.com',
  PATH_GET_UPSELL: 'upsells/GetUpSells',
  PATH_GET_UPSELL_BY_ID: 'upsells/GetUpSellsByID',
  PATH_SAVE_UPSELL: 'upsells/SaveUpSells',
  PATH_DELETE_UPSELL: 'upsells/DeleteUpSellByID',
  PATH_GET_UPSELL_BY_PRODUCT_ID: 'upsells/GetUpSellByProductID',
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
  
  PATH_LEAD_GET_DADOS_COMPRADOR: 'clientes/GetDadosCompradorLead',


  PATH_GET_APPS: 'apps/GetApps',
  PATH_INTEGRACAO_APPS: 'apps/GetIntegracaoApps',
  PATH_SAVE_INTEGRACAO_APPS: 'apps/SaveApps',
  PATH_GET_STATUS_APP: 'apps/GetStatusApp',
  PATH_GET_CAMPANHA_CARRINHO_ABANDONADO: 'apps/GetCampanhaCarrinhoAbandonado',
  

  /* CONSTANTES SESSIONS */
  SESSION_DATA_CLIENTES: 'dc',
  SESSION_FRETES : 'f',
  SESSION_CART: 'c',
  SESSION_USER: 'x',
  SESSION_PIXEL: 'p',
  SESSION_LOJA: 'l',
  SESSION_CHECKOUT: 'sc',
});
