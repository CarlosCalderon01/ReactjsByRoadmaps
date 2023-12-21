import { Suspense } from "react";
import { fetchData } from "./Components/FetchFiles/fetchData";
import "./App.css";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users")

function App1() {
  const data = apiData.read();

  return (
    <div className="App">
      <div className="title">
        <h1>Getch like a PRO With Render-as-you-Fetch - Suspense</h1>
        <Suspense fallback={<div>Loading...</div>}> 
          <ul className="card">
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </Suspense>
      </div>
    </div>
  );
}

export default App1;
