import "./App.css";
import { useState } from "react";

// Contenido de las Paginas
const Home = () => <h1>Home Page!</h1>
const Notes = () => <h1>Notes Page!</h1>
const Users = () => <h1>Users Page!</h1>
// CSS rapido del contenido
const inlineStyle = {
    padding: 5
}
// Aplicacion principal
function App3() {
    // Lector actual usando useState
    const [page, setPage] = useState(() => { // 1. Leeme esto Y 
        const {pathname} = window.location
        const page = pathname.slice(1)
        return page
    })

    // Escuchar cuando cambia la ruta - a base de useState de react
    const getContent = () => {
        if (page === 'users') { // 2. Si la apgina esta
            return <Users /> // 3. rederizame Esto
        } else if (page === 'notes') {
            return <Notes />
        } else {
            return <Home />
        }
    }

    const toPage = page => event => {
        history.pushState(null, '', `/${page}`) // estado del histori no de react. (null, 'titulo', `/${direccion}`)
        event.prevenDeafault()
        setPage(page)
    }

  return (
    <div>
        <header>
            <a href="#" onClick={toPage('home')} style= {inlineStyle}>Home</a>
            <a href="#" onClick={toPage('notes')} style= {inlineStyle}>Notes</a>
            <a href="#" onClick={toPage('users')} style= {inlineStyle}>Users</a>
        </header>
        {getContent()}
    </div>
  )
}

export default App3;

/*
    Part: <a href="#" onClick={toPage('home')} style= {inlineStyle}>Home</a>
    Explicacion -->
    + onClick nesecita un callback para funcionar que es "toPage('home')"
        que es una func que se ejcuta al hacerce click
    
    Notes:
        + leemos el cambio de ruta con el useState de REACT lo que lo hace no declarativo

    Good Practice:
        + Se recomienda el uso de liberias para "Routers"
            Mas usado "React-Router-Dom"

    Bibliografia:
        + 🤯 CREA tu propio Router en React SIN dependencias - FullStack Bootcamp JavaScript
            https://youtu.be/lcZv_Bx4l9o?si=LQUAaK-mhTRkzl9C
    
*/