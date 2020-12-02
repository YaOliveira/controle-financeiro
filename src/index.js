import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

const menu = <strong>Controle Financeiro</strong>
const transaction_type = <div>Tipo de Transação</div>
const commodity_name = <div>Nome da mercadoria</div>
const commodity_value = <div>Valor</div>
const btn_add_transaction = <button>Adicionar transação</button>
const transaction_statement = <div><strong>Extrato de Transações</strong></div>
const commodity = <div><strong>Mercadoria</strong></div>
const value = <strong>Value</strong>
ReactDom.render(
    <div>
        {menu}
        {transaction_type}
        {commodity_name}
        {commodity_value}
        {btn_add_transaction}
        {transaction_statement}
        {commodity}
        {value}
    </div>,
    document.getElementById('root'))