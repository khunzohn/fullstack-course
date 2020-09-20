import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, updateVote] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  
  const vote = () => {
    const copy = [...points]
    copy[selected] +=1
    updateVote(copy)
  }

  const mostVotesIndex = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdot of the day</h1>
      <br/>
      {props.anecdotes[selected]}
      <br />
      <p>has {points[selected]} votes</p>
      <br />
      <button onClick={vote}>
        vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 5))}>
        next anecdote
      </button>
      <br/>
      <h1>Anecdot with most votes</h1>
      <br/>
      {props.anecdotes[mostVotesIndex]}
      <br />
      <p>has {points[mostVotesIndex]} votes</p>
      <br />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

