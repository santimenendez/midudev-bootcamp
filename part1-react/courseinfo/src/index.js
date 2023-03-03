import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const rootElement = document.getElementById("root")

const App = (props) => {
  const [contadorValue, contadorSuma]= useState(0);

  console.log('refresh')

  return (
    <div>
      <p>El contador es:</p>
      <h1>{contadorValue}</h1>
      <button onClick={() => {
        contadorSuma(contadorValue + 1)
      }}>
        Incrementar
      </button>
    </div>
  )
}
ReactDOM.render(
  <App/>,
  rootElement)
