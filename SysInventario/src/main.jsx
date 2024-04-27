import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from '../App.jsx'  (CONVERTIDO EN COMENTARIO PARA PROBAR EL HOMEPAGE)
import HomePage from './pages/HomePage.jsx'
//import './styles/index.css' (ESTILOS MAIN DE LA PAGINA)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>,
)
