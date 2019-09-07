import React from 'react'
import { ApiProvider } from '../services/api';

import Home from '../components/Home/Home'

function App () {
  // Envolve toda a aplicação em um ApiProvider para que
  // os componentes possam acessar o contexto da API
  return <ApiProvider>{
    <Home />
  }</ApiProvider>
}

export default App
