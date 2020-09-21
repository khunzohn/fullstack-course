import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ parts}) => {
  const partElements = parts.map(value => <Part key={value.id} part={value} /> )
  return (
    <div>
      {partElements}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <h4>Total of {props.parts.map(value => value.exercises).reduce((a,b) => a + b)} exercises</h4>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  }
  
  return <Course course={course} />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)