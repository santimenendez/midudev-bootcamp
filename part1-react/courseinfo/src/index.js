import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>Total = {props.parts.exercise}</p>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts.name}</p>
      <p>{props.parts.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
  <p>Total = {props.parts.exercise}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercise: 10
  },
  {
    name: 'Using props to pass data',
    exercise: 7
  },
  {
    name: 'State of a component',
    exercise: 14
  }
]

  return (
    <div>
      <Title course={course} />
      <Content parts={parts[0]} />
      <Content parts={parts[1]} />
      <Content parts={parts[2]} />
      <Total parts={parts[0]}/> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
