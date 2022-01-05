import React from 'react'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'


const Transactions = (props) => {

  const handleDelete = (transaction) => {
    props.deleteTransaction(transaction.id, transaction.account_id)
  }

  return(

    <div>
      {props.transactions && props.transactions.map(transaction=>
        <li key={transaction.id}> {transaction.kind} - ${transaction.amount} <Button onClick={() => handleDelete(transaction)}>Delete</Button>
        </li>
      )}
    </div>
  )
}

export default connect(null, {deleteTransaction})(Transactions)
