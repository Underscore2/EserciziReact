import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome name='Giangiorgio' />}> </Route>
        <Route path='/counter' element={<Counter />}></Route>
      </Routes>

    </div>
  );
}

export default App;
