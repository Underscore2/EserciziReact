import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
function App() {
  const margin = {
    margin: "5px"
  }

  return (
    <div className="App">
      <>
        <div>
          <Link style={margin} to="/counter" > Counter</Link>
          <Link style={margin} to="/githubuser/Underscore2" >Link2</Link>
          <Link style={margin} to="/" > Welcome</Link>

        </div>
        <Routes>
          <Route path='/' element={<Welcome name='Giangiorgio' />}> </Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/githubuser'>
            <Route path=':name' element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </>

    </div>
  );

}

export default App;
