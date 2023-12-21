function getSuspender(promise) {
    let status = "pending";
    let response; // resp del resultado final

    // Resolviendo promesa -->
    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "Error";
            response = err;
        }
    );

    // funcion para leer el estado
    const read = ()=>{
        switch(status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    }
    return {read} // Devuelva la func read
}

export function fetchData(url) {
    const promise = fetch(url) // en un obj promise se guarda la resp del fetch
      .then((Response) => Response.json()) // Recibe resp(Promise) => transforma en JSON
      .then((data) => data)
    
    return getSuspender(promise) // get Resp and send Promise to function
} 

/*

Notes -->
    + the promise can return (Resp and error)
        - "Render-as-you-Fetch" --> hasta que no tengamos los datos no se va a renderizar
        - Se renderiza Unicamente cuando se haga el Feching a los datos.
        - SVR de next y danQuery llamada antes reactquery ya utilizan este modo. "Render-as-you-Fetch"

Features -->
    + Use suspense para mejor uso del loading
    + Sin interferir en los renderizados de la pagina
    + Peticion a la api fuera del componente y fuera del hook o useEffect

Good Practice -->

Explained -->
    + function getSuspender(promise) --> se encarga de ejecutar la asyncronia
    + import { Suspense } from "react"; --> sirve para tener varios hijos dentro de el.
        Se puede englobar varios componentes que queremos que funcionen de esta manera.

Bibliography -->
  + Cómo Consumir APIs en REACT como un PROFESIONAL By Carlos Azaustre
        https://youtu.be/6u1RHUoXIPI?si=BXX5XvhnzgmpLFwG

*/
