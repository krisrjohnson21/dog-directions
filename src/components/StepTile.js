import React from "react"

const StepTile = props => {
  return (
    <li onClick={props.setSelectedStepClosure} className={props.className}>{props.step}</li>
  )
}

export default StepTile
