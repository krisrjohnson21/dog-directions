import React, { useState } from "react"
import StepTile from "./StepTile"
import ItemTile from "./ItemTile"
import FetchButton from "./FetchButton"

const InstructionsContainer = props => {
  const [favoriteThings, setFavoriteThings] = useState(0)
  const [selectedId, setSelectedStep] = useState(null)

  const fetchData = () => {
    fetch("/api/v1/favorite_things.json")
    .then(response => response.json())
    .then(json => setFavoriteThings(json))
  }

  let headerText = ""
  let items = ""
  let steps = ""
  if (favoriteThings !== 0) {
    headerText = favoriteThings.activity
    items = favoriteThings.supplies.map((supply) => {
      return (
        <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
        />
      )
    })
    steps = favoriteThings.directions.map(direction => {
      let className;
      if (direction.id === selectedId) {
        className = "selected"
      }
      const setSelectedStepClosure = () => {
        event.preventDefault()
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
  }

  return (
    <div>
      <h1>How To {headerText}</h1>
      <h3>Supplies:</h3>
      <ul>{items}</ul>
      <h3>Instructions:</h3>
      <ol>{steps}</ol>
      <FetchButton fetchData={fetchData}/>
    </div>
  )
}

export default InstructionsContainer
