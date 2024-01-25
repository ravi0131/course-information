
const Part = (props) => {
    console.log('Hello from the Part Component')
    console.log(props)
    const {name, exercises} = props
    return (
        <p>{name} {exercises}</p>
    )
}

export default Part