import React, { useState } from 'react' 
import ReactDOM from 'react-dom'

const Button = ({ text, methodToRun}) => {

  return (
    <button onClick={methodToRun}>
      {text}      
    </button>
)
}

const Statistic = ({ text, value }) => {

  return (

    <p>
      {text}: {value}
    </p>
)
}

const Statistics = ({ good, neutral, bad, usedArray }) => {

//variables for calculating average  
let totalSum = 0
let averageOfElements = 0.0
//let usedArray = []

//variable for calculating percentage of positives
let percentageOfPositives = 0.0

// method for average

const average = function(usedArray) {

  for(let i in usedArray) {
    totalSum += usedArray[i]
}
let numberOfElements = usedArray.length

averageOfElements = totalSum/numberOfElements 

  return averageOfElements    
}

// method for percentage of positives

const positivesPercentage = function(positives, all) {

  percentageOfPositives = (positives/all)*100

  return percentageOfPositives    
}
  return (
    <div>
      <h1>
        Statistics
      </h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={usedArray.length} />
        <Statistic text="average" value={average(usedArray)} />
        <Statistic text="positive" value={positivesPercentage(good, usedArray.length) + ' %'}/> 
    </div>
  )

}

const App = (props) => {

  //const revAvg = 0
  
  /*
  let totalSum = 0
  let averageOfElements = 0.0
  let usedArray = []

  let percentageOfPositives = 0.0
*/
  //const revAvg = average(2, 5)

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  
  const [ registeredClicks, setAll ] = useState([])

  

  const handleGoodClick = () => {
          console.log('clicked good')
          setGood(good + 1) 
          setAll(registeredClicks.concat(1))
          //average(sum = registeredClicks.reduce((previous, current) => current += previous),
          //average()
        }
  const handleNeutralClick = () => {
          console.log('clicked neutral')
          setNeutral(neutral + 1)
          setAll(registeredClicks.concat(0))
          //average()  
          }
  const handleBadClick = () => {
          console.log('clicked bad')
          setBad(bad + 1) 
          setAll(registeredClicks.concat(-1))
          //average() 
          }
        
if (registeredClicks.length === 0) {

  return (
    <div>
        <table cellPadding="3" cellSpacing="5" bgcolor="#e0e1e1" border="3" width="30%">
        <thead>
        <tr>
        <th colSpan={3}>
        <h1>
            Give feedback
        </h1>
        </th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td align="center">
        <Button text="Good" methodToRun={handleGoodClick} />
        </td>
        <td align="center">
        <Button text="Neutral" methodToRun={handleNeutralClick} />
        </td>
        <td align="center">
        <Button text="Bad" methodToRun={handleBadClick} />
        </td>
        </tr>
        <tr>
        <th colSpan={3}>  
          <h1>
            Statistics
          </h1>
        </th>
        </tr>
        <tr>
        <td colSpan={3}>  
              <p>
                No feedback given
              </p>
        </td>
        </tr>
        </tbody>    
    </table>
    </div>
  )

}

else {
  return (
    <div>
        <table cellPadding="3" cellSpacing="5" bgcolor="#e0e1e1" border="3" width="30%">
        <thead>
        <tr>
        <th colSpan={3}>
          <h1>
            Give feedback
          </h1>
        </th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td align="center">
        <Button text="Good" methodToRun={handleGoodClick} />
        </td>
        <td align="center">
        <Button text="Neutral" methodToRun={handleNeutralClick} />
        </td>
        <td align="center">
        <Button text="Bad" methodToRun={handleBadClick} />
        </td>  
        </tr>
        <tr>
        <td colSpan={3}>
          <Statistics good={good} neutral={neutral} bad={bad} usedArray={registeredClicks} />    
        </td>    
        </tr>
        </tbody>
      </table>
      </div>

  )

}
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));