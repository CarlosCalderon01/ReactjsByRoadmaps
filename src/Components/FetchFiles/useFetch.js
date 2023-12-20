import { useState, useEffect } from "react";

export function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);
    fetch(url, { signal: abortController.signal }) // rastreador a la petecion para poder controlarlo
      .then((Response) => Response.json()) // Recibe promesa => transforma en JSON
      .then((data) => setData(data)) // Recibe data => La setea y incluye en el estado.
      .catch((error) => {
        if(error.name === "AbortError"){
          console.log("Request Cancelled");
        } else {
          setError(error)
        }
      }  
    ) // Captura el error => La setea y incluye en el estado.
      .finally(() => setLoading(false)) // Cambia el estado de carga a falso, Con o Sin Exito

    return () => abortController.abort(); // Se ejecuta Auto Cuando componente sea desmontado
  }, [url]);
  // [] o [url]); Sin url Ejecuta 1 vez, Cuando se monte el componente. Con url Ejecuta cada vez que cambie url
  
  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("request Cancelled");
    }
  }

  // Retornar Los datos de los Hooks.
  return {data, loading, error, handleCancelRequest}
}

/*

Notes -->
  + Consumo TRADICIONAL de un fetch, existe una mejor manera que se llama "Render-as-you-Fetch"

Features -->
  + Renderizado con UseEffect y useState --> Renderiza multiples veces
  + maneja de errores
  + Puede abortar las promesas antes de recibirlas

Good Practice -->
  + "Render-as-you-Fetch" --> que se renderice Unicamente cuando se haga el Feching de datos.

Explained -->
  + creamos 4 hooks para los datos, errores, estado de carga, cancelar promesas

Bibliography -->
  + Cómo Consumir APIs en REACT como un PROFESIONAL By Carlos Azaustre
      https://youtu.be/6u1RHUoXIPI?si=BXX5XvhnzgmpLFwG
*/