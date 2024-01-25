import Header from './Header'
import Content from './Content'

const Course = (props) => {
    console.log("Hello from Course component")
    console.log(props)
    const {course} = props
    return(
        <div>
            <Header title = {course.name}/>
            <Content parts = {course.parts}/>
        </div>
    )
}

export default Course