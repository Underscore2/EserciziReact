import './App.css';
import CarDetails from './CarDetails';

function App() {
  const data={
    model:'fiat',
    color:'blue',
    year:1999
  }
  return (
    <div className="App">
     <CarDetails info={data}/>
    </div>
  );
}

export default App;
