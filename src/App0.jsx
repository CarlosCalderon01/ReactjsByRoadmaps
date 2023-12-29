// dependency - third
import React from 'react'
// dependency - Local
import { useFetch } from './Components/FetchFiles/useFetch'
import './App.css'

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  )

  return (
    <div className="App">
      <div className="title">
        <h1>Getch like a pro</h1>
      </div>
      <div>
        <button onClick={handleCancelRequest}>Cancel Request!</button>
      </div>
      <div className="card">
        <ul>
          {error && <li>error: {error}</li>}
          {loading && <li>Loading... </li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
