import { useState } from 'react'
import './App.css'
import TicTacToe from './components/tic-tac-toe.js'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <TicTacToe/>
   
  )
}

export default App
