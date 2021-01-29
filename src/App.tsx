import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import {Dados} from './types/dados'

function App() {

  const [CEP, setCEP] = useState<String>("")

  const [dados, setDados] = useState<Dados>()

  const getDados = () => {
    axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
      .then(resposta => setDados(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCEP(event.target.value)}/>
      <button onClick={getDados}>Consultar CEP</button>

      {
        <>
          <h1>CEP: {dados?.cep}</h1>
          <p>Logradouro: {dados?.logradouro}</p>
          <p>Complemento: {dados?.complemento}</p>
          <p>Bairro: {dados?.bairro}</p>
          <p>Localidade: {dados?.localidade}</p>
          <p>UF: {dados?.uf}</p>
          <p>IBGE: {dados?.ibge}</p>
          <p>GIA: {dados?.gia}</p>
          <p>DDD: {dados?.ddd}</p>
          <p>SIAFI: {dados?.siafi}</p>
        </>
      }

    </div>
  );
}

export default App;
