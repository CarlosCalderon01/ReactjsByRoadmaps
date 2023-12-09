import { useFetch } from "./useFetch";
import "./App.css";

function App() {
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div className="App">
      <div className="title">
        <h1>Getch like a pro</h1>
      </div>
      <div className="card">
        <ul>
          {error && <li>error: {error}</li> }
          {loading && <li>Loading...  </li> }
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

/*

  Un componente es  una factoria de elementos
  una funcion que al ejecutar te devuelve un elemento

  El elemento es lo que renderiza react

  Nunca jamas modificar o mutar una prop

  // Agregar [] al final hace que se ejecute una uncia vez
    // aplicando el metodo (IIFE - Expresión de Función Invocada Inmediatamente)

*/
