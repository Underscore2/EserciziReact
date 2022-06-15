import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';
function App() {

  const [toggle,setToggle]=useState(true)



  function onCounterChange(counter){
    console.log(`The state now is ${counter}`)
  }

  function handleButton(){
    setToggle(s=>!s)
  }

  return (
    <div className="App">
     {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >UAAAAAAAAAa</button>
     
    </div>
  );

}

export default App;
