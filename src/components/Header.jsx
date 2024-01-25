const Header = (props) =>{
    console.log('Hello from the Header component')
    console.log(props)
    return(
        <h1>{props.name}</h1>
    )
}

export default Header