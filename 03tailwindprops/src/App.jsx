import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj ={
    username:"tinku",
    age:22
  }

let myArr = [1,2,3]
  return (
    <>
    <h1 username='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="tinkuverms" someObj = {myObj} someArr = {myArr} btnText = "clickMe"/>

    <Card username="learnig react js" btnText = "visitme" />
    </>
  )
}

export default App
