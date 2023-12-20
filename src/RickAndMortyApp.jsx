import './App.css' // Importar Estilos
import { TwitterFollowCard } from './TwitterFollowCard.jsx' // Importar Componente

// Arreglo de usuarios compuesto por objetos
const users = [

]

// 
export function App () {
  return (
    // Extraccion de datos
    <section className='App'>
      { // recorrer cada usuario users.map
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
