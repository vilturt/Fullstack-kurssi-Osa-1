import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  //console.log(props)
    return (
        <h1>{props.course}</h1>
    )
  }

const Part = (props) => {
    return (
        <p>{props.partName} {props.exercises}</p> 
    )
}  

const Content = (props) => {
    return (
      <div>
          <Part partName = {props.courseName} exercises = {props.numOfExercices} />
      </div>
    )
  }

const Total = (props) => {
    return (
        <p>Number of exercises: {props.exerciseOne + props.exerciseTwo + props.exerciseThree}</p>
      )
  }

const App = () => {  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name}/>
      <Content courseName = {course.parts[0].name} numOfExercices = {course.parts[0].exercises}/>
      <Content courseName = {course.parts[1].name} numOfExercices = {course.parts[1].exercises}/>
      <Content courseName = {course.parts[2].name} numOfExercices = {course.parts[2].exercises}/>

      <Total exerciseOne = {course.parts[0].exercises} exerciseTwo = {course.parts[1].exercises} exerciseThree = {course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
