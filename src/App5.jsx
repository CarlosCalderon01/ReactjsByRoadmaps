// dependency - third
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom' // Cual es el path en elq ue tiene que renderizar cierto elemento
// dependency - Local
import './App.css'
import { Homes } from './page/Homes'
import { Notes } from './page/Notes'
import { Users } from './page/Users'
import { About } from './page/About'

function App5() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>menu</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Homes</Link>
              </li>
              <li>
                <Link to="/notes">Notes</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
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

export default App5
