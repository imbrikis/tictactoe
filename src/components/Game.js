import React, { useState } from 'react'
import Board from './Board'

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameOver, setIsGameOver] = useState(false)
  const [reset, setReset] = useState(false)
  const [tiedGame, setTiedGame] = useState(false)

  const isTiedGame = () => {
    setTiedGame(true)
  }

  const switchPlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
  }

  const gameIsOver = () => {
    setIsGameOver(true)
  }

  const resetGame = () => {
    switchPlayer()
    setIsGameOver(false)
    setReset(true)
  }

  const boardHasBeenReset = () => {
    setReset(false)
  }

  return (
    <div className='app-container'>
      {isGameOver ? (
        tiedGame ? (
          <h1>The game has been tied!!!</h1>
        ) : (
          <h1>Player {currentPlayer} Has Won!</h1>
        )
      ) : (
        <h1>Player {currentPlayer}'s Turn</h1>
      )}

      <Board
        currentPlayer={currentPlayer}
        switchPlayer={switchPlayer}
        gameIsOver={gameIsOver}
        reset={reset}
        boardHasBeenReset={boardHasBeenReset}
        isTiedGame={isTiedGame}
      />
      {isGameOver && (
        <button className='reset-btn' onClick={resetGame}>
          RESET GAME
        </button>
      )}
    </div>
  )
}

export default App
