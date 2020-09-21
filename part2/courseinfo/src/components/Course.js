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

export default Course