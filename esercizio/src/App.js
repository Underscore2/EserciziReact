import { useState} from 'react'; 
import { mutate, SWRConfig } from 'swr';
import './App.css';
import GithubUserProvider from './GithubUserProvider';
const array=['Underscore2']
const fetcher=url=>fetch(url).then((resp)=>resp.json());


export default function App() {
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
    <SWRConfig value={{fetcher}}>
    <div className="App">

      {array.map ((element)=>{return(
        <>
        
        {element!==""&&
        <div style={{border: "1px solid red,",width:'500px', height:'500px'}}>
        <GithubUserProvider username={element}/>
     
        </div>}
        </>

        )})}
     <form onSubmit={launchData}>
     <input type='text' name='insertName' value={name} onChange={insertNameHandler} ></input>
     <button type='submit' onClick={launchData}>LAUNCH</button>
     </form>

    </div>
    </SWRConfig>
  );

      }