// dependency - third
import React from 'react'
// dependency - Local
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

const users = []

//
export function App() {
  return (
    // Extraccion de datos
    <section className="App">
      {
        // recorrer cada usuario users.map
        users.map(({ userName, name, isFollowing }) => (
          // Invocar componente <carta: parametros>
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
