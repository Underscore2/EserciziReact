import { useState, useEffect } from 'react'


function Counter({ initialValue = 0 }) {


    const [counter, setCount] = useState(initialValue)
    const intervalID = ()=> setInterval(()=>{
              setCount(counter + 1)
          },1000)

    useEffect(() => {

        intervalID()
        
    }, [counter])

    useEffect(()=>{
        return()=>{
            clearInterval(intervalID)
            console.log('Verrò smontato, ma due volte perché sono in strict mode. LOL!')
        }
    },[])



    return (


        <>
            <h1>Counter: {counter}</h1>
        </>
    )

}
export default Counter;