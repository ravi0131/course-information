const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  /*
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
  */
 return (
  <div>
    <Header course = {course} />
    <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
    <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
  </div>
 )
}

const Header = (props) => {
  console.log("Hello from header comnponent")
  console.log(props)
  return (
    <h1>props.course</h1>
  )
}

const Content = (props) => {
  console.log("Hello from Content component")
  console.log(props)
  return (
    <>
      <Exercise part = {props.part1} exercise = {props.exercise1}/>
      <Exercise part = {props.part2} exercise = {props.exercise2}/>
      <Exercise part = {props.part3} exercise = {props.exercise3}/>
    </>
  )
}

const Exercise = (props) =>{
  console.log("Hello from the Exercise component")
  console.log(props)
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) =>{
  console.log("Hello from the Total component")
  console.log(props)
  return (
    <p>
      Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
    </p>
  )
}

export default App