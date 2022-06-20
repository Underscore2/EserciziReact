import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import GithubUserProvider from './GithubUserProvider';
function App() {
  const margin = {
    margin: "5px"
  }

  return (
    <div className="App">
      <>
        <div>
          <Link style={margin} to="/counter" > Counter</Link>
          <Link style={margin} to="/user" >Git</Link>
          <Link style={margin} to="/" > Welcome</Link>

        </div>
        <Routes>
          <Route path='/' element={<Welcome name='Giangiorgio' />}> </Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='user' element={<ShowGithubUser />}>
            <Route index element={<h3>Scrivi un nome e clicca il link!</h3>}/>
            <Route path=':name' element={<GithubUserProvider/>}/>
           
          </Route>
          <Route path='*' element={<h1>Errore 404</h1>} />
        </Routes>
      </>

    </div>
  );

}

export default App;
