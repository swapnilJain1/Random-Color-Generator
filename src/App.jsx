import { useState } from 'react'
import './App.css'
import { randomHexGenerator } from './helper'

function App() {
  const [hex, setHex] = useState("#843581")



const handleClick = ()=>{
 const finalRes = randomHexGenerator()
setHex(finalRes)
}

  return (
    <div className='container' style={{backgroundColor:hex}} >
        {hex}
        <button onClick={handleClick} >Change Color</button>
    </div>
  )
}

export default App
