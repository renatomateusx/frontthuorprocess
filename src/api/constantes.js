export default Object.freeze({
  WEBSITEAPI: 'http://localhost:3000/',
  //API_PAG_SEGURO: 'https://sandbox.api.pagseguro.com/',
  API_PAG_SEGURO: 'https://ws.sandbox.pagseguro.uol.com.br/v2/',
  PATH_PS_SESSION: 'checkouts/SessionPagSeguro',
  PATH_PS_CHARGE: 'checkouts/DoPayPagSeguroCard',
  MSG_BOLETO_ENVIO: 'Aqui está o boleto do produto *PRODUTO_NAME*, no valor de R$ VALOR_VALOR Vencimento: *VENCIMENTO* Código de barras: *CODIGO_BARRAS* Link: LINK_LINK',
  PATH_GET: 'index',
  PATH_LOGIN: 'users/EfetuaLogin',
  PATH_TOKEN: 'users/VerificaToken',
  PATH_PRODUTOS: 'produtos/GetProdutos',
  PATH_PRODUTO_BY_ID: 'produtos/GetProdutoByID',
  PATH_PRODUTO_BY_ID_THUOR: 'produtos/GetProdutoByIDThuor',
  PATH_PRODUTO_BY_ID_IMPORTED: 'produtos/GetProdutoByIDImported',
  PATH_UPDATE_STATUS_PRODUTO: 'produtos/UpdateStatusProduto',
  PATH_UPDATE_TIPO_PRODUTO: 'produtos/UpdateTipoProduto',
  PATH_PRODUTOS_IMPORT: 'importarProdutosShopify/ImportarProdutosShopify',
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
  PATH_GET_FRETE: 'logisticas/GetFretes',
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
  CONSTANTE_VENCIMENTO_BOLETO: 3,
  CONSTANTE_EMAIL_PAG_SEGURO: 'renatomateusx@gmail.com',


});
