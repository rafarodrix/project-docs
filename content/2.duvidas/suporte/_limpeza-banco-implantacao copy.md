---
title: Manual de Limpeza do Banco de Dados
description: Portal Sitef
---

Este manual descreve o processo de limpeza do banco de dados, preservando os dados essenciais dos cadastros de **Participantes** e **Produtos**. O script executa a remoção de dados desnecessários, com o objetivo de otimizar o desempenho e manter o banco de dados limpo e eficiente.

## Objetivo

O script realiza as seguintes operações:

- **Deleção**: Remove dados operacionais de diversas tabelas, como transações, inventários e registros de movimentação.
- **Atualização**: Reseta os dados relacionados à quantidade de produtos e reinicializa os parâmetros da NF-e.

## Estrutura do Script

O script utiliza blocos de transação para garantir que as operações sejam executadas em uma única execução, evitando inconsistências caso ocorra algum erro durante o processo.

## Instruções

> **Nota**: Antes de executar este script, certifique-se de que o banco de dados esteja devidamente **backupado**, pois os dados removidos não poderão ser recuperados sem um backup prévio.

<alert variant="warning">
    **Atenção!** Esta operação é destrutiva e removerá dados de várias tabelas importantes. Execute somente após realizar um backup completo.
</alert>

### Script de Limpeza

``` [script Executive]
SET TERM ^ ;

EXECUTE BLOCK AS
BEGIN
    -- Deleções
    DELETE FROM kardex;
    DELETE FROM conferencia;
    DELETE FROM lancamento_transporte;
    DELETE FROM lancamento_cupom_prod;
    DELETE FROM participante_haver;
    DELETE FROM entrega;
    DELETE FROM lancamento_prod;
    DELETE FROM lancamento;
    DELETE FROM cupom;
    DELETE FROM dfe;
    DELETE FROM dfe_res_evento;
    DELETE FROM dfe_res_nfe;
    DELETE FROM pedido;
    DELETE FROM titulo_baixado;
    DELETE FROM titulo;
    DELETE FROM inventario_tp_prod;
    DELETE FROM inventario;
    DELETE FROM conta_arq_conciliacao;
    DELETE FROM requisicao;
    DELETE FROM dashboard;
    DELETE FROM caixa_cego_det;
    DELETE FROM caixa_cego;
    DELETE FROM reducaoz;
    DELETE FROM promocao;
    DELETE FROM movimento_func;
    DELETE FROM usuario_empresa;
    DELETE FROM usuario_conta;
    DELETE FROM usuario where ativo = '0';
    DELETE FROM participante WHERE id_situacao = '{95D69DDA-5839-49DD-8775-39E2EFFD93C3}';
    DELETE FROM logdiu;

    -- Atualizações
    UPDATE produto_qtde SET qtde = 0;
    UPDATE produto_qtde SET id_usuario = NULL;
    UPDATE empresa_nfe SET dfe_ultnsu = 0, dfe_maxnsu = 0;
END^

SET TERM ; ^

```

``` [Executar Manualmente por tabela]
DELETE FROM kardex;
DELETE FROM conferencia;
DELETE FROM lancamento_transporte;
DELETE FROM lancamento_cupom_prod;
DELETE FROM participante_haver;
DELETE FROM entrega;
DELETE FROM lancamento_prod;
DELETE FROM lancamento;
DELETE FROM cupom;
DELETE FROM dfe;
DELETE FROM dfe_res_evento;
DELETE FROM dfe_res_nfe;
DELETE FROM pedido;
DELETE FROM titulo_baixado;
DELETE FROM titulo;
DELETE FROM inventario_tp_prod;
DELETE FROM inventario;
DELETE FROM conta_arq_conciliacao;
DELETE FROM requisicao;
DELETE FROM dashboard;
DELETE FROM caixa_cego_det;
DELETE FROM caixa_cego;
DELETE FROM usuario_empresa;
DELETE FROM usuario_conta;
DELETE FROM usuario WHERE ativo = '0';
DELETE FROM participante WHERE id_situacao = '{95D69DDA-5839-49DD-8775-39E2EFFD93C3}';
DELETE FROM logdiu;

UPDATE produto_qtde SET qtde = 0;
UPDATE produto_qtde SET id_usuario = NULL;
UPDATE empresa_nfe SET dfe_ultnsu = 0, dfe_maxnsu = 0;

```

::card

#title
:icon{name="fluent:person-support-24-filled"} Precisa de ajuda e não encontrou aqui?
#description
Entre em contato, estamos disponíveis para ajudar você com qualquer dúvida ou problema que possa ter.

---

- :icon{name="akar-icons-whatsapp-fill"} **WhatsApp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

::
