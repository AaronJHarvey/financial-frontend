export function fetchAccounts(){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(response => {
      return response.json()
    })
    .then(accounts => dispatch({
      type: 'FETCH_ACCOUNTS',
      payload: accounts
    }))
  }
}



// AKA action creator
