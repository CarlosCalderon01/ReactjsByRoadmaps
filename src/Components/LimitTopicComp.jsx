// dependency - third
import React from 'react'
import PropTypes from 'prop-types' // Lib. para validar.
// dependency - Local

export function LimitTopicComp({ mensaje }) {
  /*  // Vanilla para validar --> (NO RECOMMEND!).
    if (typeof mensaje !== 'string') {
      console.error("Warning: 'mensaje' prop should be a string");
    }
  */
  return (
    <div>
      <h1> {`// ----- // ----- // ${mensaje} // ----- // ----- //`} </h1>
    </div>
  )
}

LimitTopicComp.propTypes = {
  mensaje: PropTypes.string.isRequired, // Lib. PropTypes --> (RECOMMEND!).
}

export default LimitTopicComp

/*
  Apuntes -->
    + PropTypes --> libreria que sirve para Validar tipos de datos.
    + Diseñe en validador vanilla sin uso de librerias,
        pero el ESLINT no me lo acepta.
    + Se ENFATIZA y recomienda el uso de la libreria por tener mas,
        funcionalidades y verificar los tipos de manera más exhaustiva.

  Good Practice -->
    + All components are Mayus (Recommend: PascalCase).
*/
