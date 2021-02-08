import React, { useState } from 'react'
import Board from './Board'

const App = () => {

  const [currentPlayer, setCurrentPlayer] = useState('X');

  const switchPlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
  }

  return (
    <div className="app-container">
      <h1>Player {currentPlayer}'s Turn</h1>
      <Board currentPlayer={currentPlayer} switchPlayer={switchPlayer} />
    </div>
  )
}

export default App
