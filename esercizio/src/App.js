import { useState} from 'react'; 
import './App.css';
import GithubUserProvider from './GithubUserProvider';
const array=['Underscore2']


function App() {
  const [name,setName]=useState('')

function insertNameHandler(event){
  setName(event.target.value)
}

function launchData(event){
  event.preventDefault()
  array.push(event.target.previousElementSibling.defaultValue)
  console.log(array)
setName('')
}


  return (
    <div className="App">
      
      {array.map ((element)=>{return(
        <div style={{border: "1px solid red,",width:'500px', height:'500px'}}>
        <GithubUserProvider username={element}/>
        </div>
        )})}
     <form onSubmit={launchData}>
     <input type='text' name='insertName' value={name} onChange={insertNameHandler} ></input>
     <button type='submit' onClick={launchData}>LAUNCH</button>
     </form>

    </div>
  );

}

export default App;
