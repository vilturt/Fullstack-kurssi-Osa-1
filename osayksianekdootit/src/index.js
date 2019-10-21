import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let parameterArray = []
let highestValue = 0
let sorted = []
let reversed = []
let arrayOfAnectodes = []
let numOfVotes = 0
let i = 0

class AnectodeObj {
  constructor(anectodeAsText, numOfVotes) {
    this.anectodeAsText = anectodeAsText
    this.numOfVotes = numOfVotes
  }

  addVote() {
    this.numOfVotes += 1
    return this.numOfVotes
  } 
}




const App = (props) => {
  const [selected, setSelected] = useState(0)

 // const [oneVote, addOne] = useState(0)

  const [highestVote, ] = useState(0)

  for (i = 0; i < (anecdotes.length - 1); i++){
  arrayOfAnectodes[i] = new AnectodeObj( anecdotes[i], 0);
  }

 // const votes = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

 const [vote, addOne] = useState(0)

const displayPeakValue = function(parameterArray) {

//parameterArray.sort().reverse()

parameterArray.join()
parameterArray.sort()
parameterArray.reverse()

highestValue = parameterArray[0]

return highestValue

}

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>
      {props.anecdotes[selected]}
      </p>
      <div>
      <button onClick={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))}>
        Next anecdote
      </button>
      <button onClick={() => addOne(props.votes[selected] += 1)}>
        Vote
      </button>
      </div>  
      
      <p>
        Votes: {props.votes[selected]}
      </p>
      <h1>Anectode with most votes</h1>
      <p>
      {arrayOfAnectodes[0].anectodeAsText} has {arrayOfAnectodes[0].numOfVotes} votes
      </p>
      <p>
        {props.arrayOfAnectodes[0].addVote()}
      </p>


    </div>

  )
}

const votes = [0,0,0,0,0,0]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} arrayOfAnectodes={arrayOfAnectodes}/>,
  document.getElementById('root')
)