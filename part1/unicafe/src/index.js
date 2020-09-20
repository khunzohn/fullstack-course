import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ({text,handleClick}) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
)

const Statistic = ({text, count}) => <div><p>{text} {count}</p></div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const increaseGoodByOne = () => {
    setGood(good+1)
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral+1)
  }

  const increaseBadByOne = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Header title='give feedback' />

      <Button text='good' handleClick={increaseGoodByOne} />
      <Button text='neutral' handleClick={increaseNeutralByOne} />
      <Button text='bad' handleClick={increaseBadByOne} />

      <Header title='statistics' />

      <Statistic text='good' count={good} />
      <Statistic text='neutral' count={neutral} />
      <Statistic text='bad' count={bad} />
      <Statistic text='all' count={total} />
      <Statistic text='average' count={average} />
      <Statistic text='positive' count={(good/total)*100} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);