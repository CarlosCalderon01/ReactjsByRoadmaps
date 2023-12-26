// dependency - third
import React from 'react'
import ReactDOM from 'react-dom/client'
// dependency - Local
import './index.css'
// import App from "./App.jsx";
// import App1 from "./App1.jsx";
// import App2 from "./App2.jsx";
// import App3 from "./App3.jsx"
import App4 from './App4.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>
)

/*

Apuntes -->
  + Root -> Es el tronco dela rbol que alberga todos los elementos. (ReactDOM.createRoot)
  + Componente -> Es una factoria de elementos.
  + Funcion -> Devuelve un elemento
  + Elemento -> Es lo que renderiza react
    - Todo lo que este dentro de la App, son los elementos.
    - en react no se puede renderizar html
    - primero debo crear el elemento luego renderizarlo

Example -->
  + const appDomElement = document.getElementById('app')
  + const root = ReactDOM.createRoot(appDomElement)

Good Practice -->
  - Nunca jamas modificar o mutar una prop

*/
