import { useState } from 'react'
import { API_URL } from '../env'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hola Mundo {import.meta.env.VITE_API_URL}</h1>
      <p>desde env.js {API_URL}</p>
    </div>
  )
}

export default App
