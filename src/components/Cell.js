import React from 'react'

const Cell = ({ cellValue, cellId, currentPlayer, submitAnswer }) => {

  const submitLetter = () => {
    if (!cellValue) {
      if (currentPlayer === 'X') {
        submitAnswer(currentPlayer, cellId)
      }
      if (currentPlayer === 'O') {
        submitAnswer(currentPlayer, cellId)
      }
    } 
  }

  return (
    <div className="cell" onClick={submitLetter}>
      {cellValue}
    </div>
  )
}

export default Cell
