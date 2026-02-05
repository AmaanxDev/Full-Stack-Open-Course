import Part from './Part';
const Content = (props)=>{
    return(
        <div>
            <Part part = {props.content[0]} exercises={props.content[1]}/>
            <Part part = {props.content[2]} exercises={props.content[3]}/>
            <Part part = {props.content[4]} exercises={props.content[5]}/>
        </div>
    )
}

export default Content;