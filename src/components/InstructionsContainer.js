import React, { useState } from "react"
import StepTile from "./StepTile"
import ItemTile from "./ItemTile"
import FetchButton from "./FetchButton"

const InstructionsContainer = props => {
  const supplies = props.data.supplies
  const directions = props.data.directions
  const [selectedId, setSelectedStep] = useState(null)

  const items = supplies.map(supply => {
    return (
      <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
      />
    )
  })


  const steps = directions.map(direction => {
    let className;

    if (direction.id === selectedId) {
      className = "selected"
    }

    const setSelectedStepClosure = () => {
      setSelectedStep(direction.id)
    }

    return (
      <StepTile
        step={direction.step}
        key={direction.id}
        id={direction.id}
        className={className}
        setSelectedStepClosure={setSelectedStepClosure}
      />
    )
  })

  return (
    <div>
      <h1>How To {props.data.activity}</h1>
      <h3>Supplies:</h3>
      <ul>{items}</ul>
      <h3>Instructions:</h3>
      <ol>{steps}</ol>
      <FetchButton />
    </div>
  )
}

export default InstructionsContainer
