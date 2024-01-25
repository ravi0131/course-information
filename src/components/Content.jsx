import Part from './Part'
const Content = (props) => {
    console.log('Hello from the Content component')
    console.log(props)
    const {parts} = props
    return(
            parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
    )
}

export default Content