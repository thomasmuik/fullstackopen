const Header = (props) => {
  return (
    <div>
      <h1>{props.object.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.p} {props.e}
      </p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part p = {props.object.parts[0].name} e = {props.object.parts[0].exercises} />
      <Part p = {props.object.parts[1].name} e = {props.object.parts[1].exercises} />
      <Part p = {props.object.parts[2].name} e = {props.object.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.object.parts[0].exercises + props.object.parts[1].exercises + props.object.parts[2].exercises}</p>
    </div>
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
      <Header object = {course} />
      <Content object = {course} />
      <Total object = {course} />
    </div>
  )
}

export default App
