import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'
import React, {useState, useEffect} from 'react';

function App() {

  const [userAccount, setUserAccount] = useState(null);

if (window.ethereum) {
  console.log(window.ethereum);
  window.web3 = new Web3(window.ethereum);
  console.log(window.web3.eth.getAccounts());

  window.ethereum.send('eth_requestAccounts')
  .then(function(result){
    console.log(result.result[0]);
    setUserAccount(result.result[0]);
  })

} else {
  alert("You must install MetaMask to interact with this site");
}

  return (
    <div>
    <p> account: {userAccount}</p>
    </div>
  );
}

export default App;
