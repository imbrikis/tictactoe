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

  const cellPlayerClass = !cellValue && currentPlayer === 'X' ? 'hover-x' : !cellValue && currentPlayer === 'O' ? 'hover-o' : ''

  return (
    <div className="cell" onClick={submitLetter}>
      <div className={!cellValue ? cellPlayerClass : 'disabled'}>
        {currentPlayer}
      </div>
      {cellValue}
    </div>
  )
}

export default Cell
