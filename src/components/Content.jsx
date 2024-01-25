import Part from './Part'
import Total from './Total'

const Content = (props) => {
    console.log('Hello from the Content component')
    console.log(props)
    const {parts} = props
    return(
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
            <Total parts={parts}/>
        </div>
         
    )
}

export default Content