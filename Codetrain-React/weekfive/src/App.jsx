import { useState } from 'react'
import Form from './Components/Form'

function App() {
  const [number, setNumber] = useState(0)
  const [ishover, setishover] = useState(false)

  const handleMouseEnter = () => {
    setishover(true)
  }
  const handleMouseLeave = () => {
    setishover(false)
  }

  const addNumbers = () => {
    setNumber(number + 1)
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={addNumbers} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: ishover ? "darkred" : "darkgray", borderRadius: "10px", color: ishover ? "white" : "darkred"}}>Click Here</button>
      <Form />
    </>
  )
}

export default App
