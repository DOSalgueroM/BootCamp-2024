

import { useState } from 'react'
import './App.css'
import Cinema from './cinema'

function App() {
  const [inputText, setInputText] = useState<string>('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }
  const [cinema, setCinema] = useState<Cinema>(new Cinema(5, 5))

  const handleReserve = () => {
    const [row, column] = inputText.split(',').map((n) => parseInt(n));
    if (cinema.reserve(row, column)) {
      setCinema(cinema);
    }
  };

  return (
    <>
      <h2>Cinema</h2>

      <div className='container'>
        <div className='seats'>
          {cinema.showCinema()} 
        </div>
        <h3> Reserve an seat</h3>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleReserve}>Reserve</button>
      </div>
    </>
  )
}

export default App