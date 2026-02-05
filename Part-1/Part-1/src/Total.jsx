
const Total = (props) => {
    const sum = props.exercise[0] + props.exercise[1] + props.exercise[2]
  return (
    <div>
       <p>Number of exercises {sum}</p>
    </div>
  )
}

export default Total
