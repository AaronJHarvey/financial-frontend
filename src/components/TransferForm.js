import React from 'react'
import {connect} from 'react-redux'



class TransferForm extends React.Component{
  state = {
    tFrom:'',
    tTo:'',
    tAmount:''
  }


  render(){
    return(
      <div>
        <h2>Transfer</h2>
          <form>
            <label>Transfer To:</label>
            <select name='tTo' value={this.state.tTo} >
              {this.props.accounts.map(account =>
                <option key={account.id}>
                  {account.name}
                </option>)}
            </select>
            <br/>
            <label>Transfer From: </label>
            <select name='tFrom' value={this.state.tFrom}>
              {this.props.accounts.map(account =>
                <option key={account.id}>
                  {account.name}
                </option>)}
            </select>
            <br/>
            <label>Transfer Amount:</label>
            <input/>
            <br/>
            <br/>
            <button>Transfer</button>

          </form>

      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    accounts: state.accounts
  }
}


export default connect(mapStateToProps)(TransferForm)


// Submit:
/*grab the transfer amount
  in account that is being transferred
  import ADD_TRANSACTION
  format transferTo withdraw
  format transferFrom Deposit
  dispatch ADD_TRANSACTION(withdraw)
  dispatch ADD_TRANSACTION()


*/
