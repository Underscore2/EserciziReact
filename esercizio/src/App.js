import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome name='Giangiorgio' />}> </Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/githubuser'>
          <Route path=':name' element={<ShowGithubUser />} />
        </Route>
      </Routes>


    </div>
  );

}

export default App;
