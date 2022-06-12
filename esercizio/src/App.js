import logo from './logo.svg';
import './App.css';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <Container>
       {
        ((list,deleteHandler)=>{
          return(
            <ul>

              {list.map((item,i)=>{
                return(
                  <li key={i}>{item} <button onClick={()=>{deleteHandler(item)}} key={i+'btn'}>Delete</button></li>
                )
              })}
            </ul>
          )
        })
       }
      </Container>
    </div>
  );
}

export default App;
