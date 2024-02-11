import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  // let counter = 0;

  const Increased = () =>{
    console.log("incresed button clicked",counter);
    if(counter >= 20){
      alert("counter is greater than 20")
      return;
    }else {
      counter = counter + 1;
      setCounter(counter);
    }
  }
  const Decreased = () =>{
    console.log("decreased button clicked", counter);
    if(counter <= 0){ // condition for counter not be less than 0
      alert("counter is less than zero")
      return;
    }else{
      counter = counter -1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={Increased} >Add value</button>
      <br/>
      <button onClick={Decreased}>Decrease value</button>
    </>
  )
}

export default App
