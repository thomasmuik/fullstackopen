import { useState } from 'react'

const Header = ({headerText}) => <h1>{headerText}</h1>

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
    </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text} {value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  const average = (((good * 1) + (neutral * 0) + (bad * -1)) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1)
  if (total > 0) {
  return(
    <table>
      <StatisticLine text = {"good"} value = {good} />
      <StatisticLine text = {"neutral"} value = {neutral} />
      <StatisticLine text = {"bad"} value = {bad} />
      <StatisticLine text = {"all"} value =  {total} />
      <StatisticLine text = {"average"} value = {average} />
      <StatisticLine text = {"positive"} value = {positive + "%"} />
    </table>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>{"No feedback given"}</td>
        </tr>
      </tbody>
    </table>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + neutral + bad

  return (
    <div>
      <Header headerText = {"give feedback"} />
      <Button handleClick = {() => setGood(good + 1)} text = "good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text = "bad" />
      <Header headerText = {"statistics"} />
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total}/>
    </div>
  )
}

export default App
