import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  function onCounterChange(counter){
    console.log(`The state now is ${counter}`)
  }

  return (
    <div className="App">
     <Counter onCounterChange={onCounterChange}/>
     
    </div>
  );

}

export default App;
