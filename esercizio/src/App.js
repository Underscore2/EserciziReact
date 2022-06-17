import './App.css';
import FilterdList from './FilteredList';
import { useState } from 'react'
function App() {
  // eslint-disable-next-line
  const [list, setList] = useState([{
    id: 1,
    name: 'Mariottide',
    age: 7
  }, {
    id: 2,
    name: 'Marcovaldo',
    age: 22
  },
  {
    id: 3,
    name: 'Pierstruzzo',
    age: 19
  },
  {
    id: 4,
    name: 'Mariafranca',
    age: 4
  }])

  return (
    <div className="App">
      <FilterdList list={list}/>
    </div>
  );
}

export default App;
