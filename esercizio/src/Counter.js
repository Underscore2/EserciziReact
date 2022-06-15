import {useState,useEffect} from 'react'


function Counter ({initialValue=0,onCounterChange}){
    
    const [counter,setCount]=useState(initialValue)
    useEffect(()=>{
    onCounterChange(counter)}    
    ,[counter])
    
    
    function handlerButton(){
        
        return (setCount(counter+1))
        
    }
    
return(
    
    
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={handlerButton}>Click me!</button>
    </>
)

}
export default Counter;