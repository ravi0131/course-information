const Total = (props) => {
    console.log('Hello from the Total component')
    console.log(props)
    const {parts} = props
    return(
        <p>
            A total of {parts.reduce( (sum, part) => {return sum += part.exercises},0)} exercises
        </p>
    )

}

export default Total