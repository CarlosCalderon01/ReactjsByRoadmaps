import { useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/users"

export function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true) // true por defecto
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false)) // Dentro de la asyncronia
  }, []);

  return {data, loading}
}
