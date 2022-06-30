import { useState } from "react"
import { store } from "./state/Store"

export default function Todo() {
    const [compito, setCompito] = useState('')
    const [complete, setComplete] = useState(false)
    const [todo, setTodo] = useState("store.todo.getState()")
    const deploy = () => {
        console.log(compito, complete)
    }
    return (
        <>
            <h1>Todo:</h1>
            <div>Compito:<input type="text" value={compito} onChange={(event) => { setCompito(event.currentTarget.value) }}></input></div>
            <div>Completato:<input type="checkbox" checked={complete} onChange={() => { setComplete(c => !c) }}></input></div>
            <button onClick={() => { deploy() }}>Deploy</button>
        </>

    )
}