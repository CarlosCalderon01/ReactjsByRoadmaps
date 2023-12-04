// Libreria
import React from 'react'
import ReactDOM from 'react-dom/client'
// Funcionalidad
import App from './App.jsx'
// Estilos
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
  Elemento DOM --> document.getElementById('root')
  tronco del arbol --> ReactDOM.createRoot
  Todo lo que este dentro de la App son los elementos

  en react no se puede renderizar html.
    primero debo crear el elemento luego renderizarlo

  Root --> en react se generan un arbol de elementos

    const appDomElement = document.getElementById('app)
    const root = ReactDOM.createRoot(appDomElement)

*/
