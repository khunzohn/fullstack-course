import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, your are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const name = "Peter"
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Khun" age="19"/>
      <Hello name="zohgn" age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))