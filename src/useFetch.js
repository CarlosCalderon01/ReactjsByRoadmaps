import { useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/users"

export function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new abortController.signal()
    setLoading(true) // true por defecto
    fetch(url, {signal: abortController.signal})
    // fetch(url)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false)) // Dentro de la asyncronia
    return () => AbortController.abort()
  }, []);

  return {data, loading, error}
}
