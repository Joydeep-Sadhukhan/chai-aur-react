import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "joy",
    age: 99
  }

  return (
    <>
      <h1 className='bg-green-400 text-yellow-400 p-5 rounded-lg mb-5 text-lg'>Tailwind test</h1>
      <Card username="joy" btnText="click me"/>
      <Card username="deep" />

    </>
  )
}

export default App
