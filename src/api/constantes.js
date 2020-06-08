export default Object.freeze({
  SAND_BOX_MP_PUBLICK_KEY: 'TEST-5e8249a3-5691-4ae9-bf45-8705c09b5c0e',
  SAND_BOX_MP_ACCESS_TOKEN: 'TEST-4338451460338304-120717-21b6daffeb2a7bd8ba4a59afb113f0fe-128404654',
  PRODUCAO_BOX_MP_PUBLICK_KEY: 'APP_USR-c97da455-7446-4595-968b-75677fcc12d1',
  PRODUCAO_BOX_MP_ACCESS_TOKEN: 'APP_USR-4338451460338304-120717-64a42a12fe590e1715881018b78df091-128404654',

  WEBSITEAPI: 'http://localhost:3000/',
  //WEBSITEAPI: 'https://hmlapi.thuor.com/',
  //WEBSITEAPI: 'https://api.thuor.com/',
  URL_GET_IP: 'https://api.ipify.org?format=json',
  //API_PAG_SEGURO: 'https://sandbox.api.pagseguro.com/',
  API_PAG_SEGURO: 'https://ws.sandbox.pagseguro.uol.com.br/v2/',
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
  PATH_PAY_GET_PEDIDOS: 'transacoes/GetPedidos',
  PATH_PAY_GET_PEDIDOS_POR_ID: 'transacoes/GetPedidosByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_POR_ID: 'transacoes/ReembolsarPedidoByID',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_PS_POR_ID: 'transacoes/ReembolsarPedidoPSByID',
  PATH_SET_PAYMENT_COMISSION_DONE: 'transacoes/SetPaymentComissionDone',
  PATH_PAY_REEMDBOLSAR_PEDIDOS_PAYU_POR_ID: 'transacoes/ReembolsarPedidoPayUID',
  PATH_PAY_GET_TRANSACOES_INTERNAS: 'transacoes/GetTransacoesInternas',
  
  PATH_PAY_GET_PAGAMENTOS_EFETUADOS_POR_SELLER: 'transacoes/GetPagamentosEfetuadosPorSeller',  
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

  /* APPS */
  PATH_GET_APPS: 'apps/GetApps',
  PATH_GET_APPS_BY_ID: 'apps/GetAppByID',
  PATH_INTEGRACAO_APPS: 'apps/GetIntegracaoApps',
  PATH_SAVE_INTEGRACAO_APPS: 'apps/SaveApps',
  PATH_GET_STATUS_APP: 'apps/GetStatusApp',


  /* PLANOS */

  PATH_GET_PLANOS: 'planos/GetPlanos',
  PATH_GET_PLANOS_BY_ID: 'planos/GetPlanosByID',


  /* CONSTANTES SESSIONS */
  SESSION_DATA_CLIENTES: 'dc',
  SESSION_DATA_CRIPTO: 'cr',
  SESSION_FRETES: 'f',
  SESSION_CART: 'c',
  SESSION_USER: 'x',
  SESSION_PIXEL: 'p',
  SESSION_LOJA: 'l',
  SESSION_CHECKOUT: 'sc',
  SESSION_ATUAL_PAGE: 'atp',

  /* MENSALIDADES*/
  PATH_GET_MENSALIDADES_PAGAS: 'mensalidades/GetMensalidadesPagas',
  PATH_GET_MENSALIDADES_BY_ID: 'mensalidades/GetMensalidadesByID',
  PATH_PAY_INSERE_TRANSACOES_INTERNAS_MENSALIDADES: 'mensalidades/insereTransacaoInternaMensalidades',

  /* AJUDA */
  PATH_GET_AJUDA: 'ajuda/GetAjuda',
  PATH_GET_AJUDA_BY_ID: 'ajuda/GetAjudaByID',
  PATH_SAVE_AJUDA: 'ajuda/SaveAjuda',
  PATH_DELETE_AJUDA_BY_ID: 'ajuda/DeleteAjudaByID',


  CONSTANTE_THUOR: 'Thuor',
  CONSTANTE_THUOR_EMAIL: 'renatomateusx@gmail.com',
  
});
