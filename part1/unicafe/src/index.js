import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ({text,handleClick}) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
)

const Statistics =(props) => {
  const stats = props.statistics
  if(stats.total === 0) {
    return <div><p>No feedback given</p></div>
  } else {
    return (
      <div>
        <Statistic text='good' value={stats.good} />
        <Statistic text='neutral' value={stats.neutral} />
        <Statistic text='bad' value={stats.bad} />
        <Statistic text='all' value={stats.total} />
        <Statistic text='average' value={stats.average} />
        <Statistic text='positive' value={stats.positivePercentage} />
      </div>
    )
  }
}

const Statistic = ({text, value}) => <div><p>{text} {value}</p></div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positivePercentage = (good/total)*100

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: ((good * 1) + (neutral * 0) + (bad * -1)) / total,
    positivePercentage: (good/total)*100
  }

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
      <Statistics statistics={statistics} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);