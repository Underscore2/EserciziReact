import {useState} from 'react'

function Login(){

const [info,setInfo]=useState({
    username:'',
    password:'',
    remember:false
})


const handleInputs=(event)=>{
    const {value,type,checked,name} = event.target
    return(setInfo(
        (info)=>{
            return({
                ...info,
                [name]:type==='checkbox'?checked:value
            })
        }
    ))
}

console.log(info)
    return(
        <>
        <input type='text' name='username'  onChange={handleInputs} value={info.username}></input>
        <input type='password' name='password' onChange={handleInputs}  value={info.password}></input>
        <input type='checkbox' name='remember' onChange={handleInputs}  value={info.remember}></input>
        </>
    )
}
export default Login