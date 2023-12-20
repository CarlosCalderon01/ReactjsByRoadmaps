import { useState, useEffect } from "react";

export function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((Response) => Response.json()) // Recibe promesa => transforma en JSON
      .then((data) => setData(data)) // Recibe data => La setea y incluye en el estado.
      .catch((error) => setError(error)) // Captura el error => La setea y incluye en el estado.
      .finally(() => setLoading(false)) // Cambia el estado de carga a falso, Con o Sin Exito
  }, [url]);
  // [] || [url]); Sin url Ejecuta 1 vez Cuando se monte el componente, Con url Ejecuta cada vez que cambie url
  
  // Retornar Los datos de los Hooks.
  return {data, loading, error}
}

/*
  Explicacion:
    1- function useFetch que recibe una url como parametro o dependencia.
    2- Creamos 3 hooks para los datos, el estado de carga, los errores.
  Bibliografia -->
    Cómo Consumir APIs en REACT como un PROFESIONAL By Carlos Azaustre
    https://youtu.be/6u1RHUoXIPI?si=BXX5XvhnzgmpLFwG
*/
