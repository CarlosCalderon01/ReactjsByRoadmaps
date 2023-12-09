import { useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/users"

export function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setData(data));
  }, []);

  return {data}
}
