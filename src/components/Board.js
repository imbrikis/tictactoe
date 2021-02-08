import React, { useState } from 'react'
import Cell from './Cell'

const Board = ({ switchPlayer, currentPlayer }) => {

  const [gameData, setGameData] = useState([0,0,0,0,0,0,0,0,0])

  const declareWinner = winner => {
    console.log(`${winner} wins`)
  }

  const submitAnswer = (letter, cell) => {
    if (
      (gameData[0] === 'X') && (gameData[3] === 'X') && (gameData[6] === 'X') ||
      (gameData[1] === 'X') && (gameData[4] === 'X') && (gameData[7] === 'X') ||
      (gameData[2] === 'X') && (gameData[5] === 'X') && (gameData[8] === 'X') ||
      (gameData[0] === 'X') && (gameData[1] === 'X') && (gameData[2] === 'X') ||
      (gameData[3] === 'X') && (gameData[4] === 'X') && (gameData[5] === 'X') ||
      (gameData[6] === 'X') && (gameData[7] === 'X') && (gameData[8] === 'X') ||
      (gameData[0] === 'X') && (gameData[4] === 'X') && (gameData[8] === 'X') ||
      (gameData[2] === 'X') && (gameData[4] === 'X') && (gameData[6] === 'X')
      ) {
      declareWinner('X')
      return
    } else if (
      (gameData[0] === 'O') && (gameData[3] === 'O') && (gameData[6] === 'O') ||
      (gameData[1] === 'O') && (gameData[4] === 'O') && (gameData[7] === 'O') ||
      (gameData[2] === 'O') && (gameData[5] === 'O') && (gameData[8] === 'O') ||
      (gameData[0] === 'O') && (gameData[1] === 'O') && (gameData[2] === 'O') ||
      (gameData[3] === 'O') && (gameData[4] === 'O') && (gameData[5] === 'O') ||
      (gameData[6] === 'O') && (gameData[7] === 'O') && (gameData[8] === 'O') ||
      (gameData[0] === 'O') && (gameData[4] === 'O') && (gameData[8] === 'O') ||
      (gameData[2] === 'O') && (gameData[4] === 'O') && (gameData[6] === 'O')
      ) {
      declareWinner('O')
      return
    }

    const tempArray = gameData
    tempArray.splice(cell, 1, letter)
    setGameData(tempArray)
    switchPlayer()
  }
  
  const renderedCells = gameData.map((cell, index) => {
    let cellValue = cell === 0 ? '' : cell
    return (
      <Cell 
        key={index} 
        cellValue={cellValue}
        cellId={index} 
        currentPlayer={currentPlayer}
        submitAnswer={submitAnswer}
      ></Cell>
    )
  })

  return (
    <div className="board">
      {renderedCells}
    </div>
  )
}

export default Board