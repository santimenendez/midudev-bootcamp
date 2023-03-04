import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

const App = (props) => {

  const [contadorValue, contadorCalculo] = useState(0)

  //Funcion contador para button donde vaya incrementando
  const handleClick = () => {
    return contadorCalculo(contadorValue + 1)
}
  //Funcion para resetear el contador
  const handleClickReset = () => {
    return contadorCalculo(0)
  }

  const itsEven = contadorValue % 2 === 0

  return (
    <div>
      <p>El valor del contador es:</p>
      <h1>{contadorValue}</h1>
      <p>{itsEven ? 'Es par' : 'Es impar'}</p>
      <button onClick= {handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}
ReactDOM.render(
  <App/>,
  rootElement)
