// dependency - third
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
// dependency - Local
import { Homes } from './page/Homes'
import { Notes } from './page/Notes'
import { Users } from './page/Users'
import { About } from './page/About'
import './App.css'

const inlineStyle = {
  padding: 5,
}

function App4() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/" style={inlineStyle}>
            Homes
          </Link>
          <Link to="/notes" style={inlineStyle}>
            Notes
          </Link>
          <Link to="/users" style={inlineStyle}>
            Users
          </Link>
          <Link to="/about" style={inlineStyle}>
            About
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App4

/*

    Notes:
        + Aprendiendo react router con libreria
        + Se implementa SPA (Singel Page Aplicattion)
        + No se usa el componente Switch de la libreria React-Router
            Por que se quito en su version actual
                Se reemplaza por "Routes"

    Bibliografia:
        + React Router DOM - Añade rutas a tu aplicación de React y crea una SPA
            https://youtu.be/xE7TBCR6cj0?si=5rywKk2dRZQ-F-Mp

*/
