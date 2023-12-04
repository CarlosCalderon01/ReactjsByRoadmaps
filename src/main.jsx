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
  // ----- // ----- // ----- // METHOD1 // ----- // ----- // ----- //
  
  Explicacion -->

    Elemento DOM --> document.getElementById('root')
    tronco del arbol --> ReactDOM.createRoot
    Root --> en react se generan un arbol de elementos
    Todo lo que este dentro de la App son los elementos
      Como Especificar atributos:
      ejemplo --> <button data-id= '123'

    REACT --> no se puede renderizar html.
      primero debo crear el elemento luego renderizarlo

    Que es JSX --> una extencion de ESCRIPT basada en XML declarativa.
      (lenguaje de javascript para crear elementos en html)
        recuerda no es HTML es JSX que es javascript convertido a html

  // ----- // ----- // ----- // METHOD1 // ----- // ----- // ----- //

  Vocabulary -->

    Expreciones -->
      es poner argum, var entre corchetes {}

    Componente -->
      - Es una funcion que devuelve un elemento.
      - Los componentes tienen que ser PascalCase.

*/

/*

  // ----- // ----- // ----- // METHOD1 // ----- // ----- // ----- //

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  )

  // ----- // ----- // ----- // METHOD2 // ----- // ----- // ----- //

  const appgetElementById = document.getElementById('root')
  const root = ReactDOM.createRoot(appgetElementById)
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  )

  // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

*/
