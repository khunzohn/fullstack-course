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
  const courses = [
    {
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
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      <h1>Webdevelopment curriculum</h1>
      {courses.map( course => <Course key={course.id} course={course} />)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)