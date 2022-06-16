import React from "react";
import { useInputTracker } from "./useInputTracker";
export default function Forms() {
const {username,password,tellMeInputValue,inputHandler} = useInputTracker()   

    return (
        <>
            <form id="prova">
                <input type='text' name='username' onChange={inputHandler} value={username}></input>
                <input type='password' name='password' onChange={inputHandler} value={password}></input>
            </form>
            <button onClick={tellMeInputValue}>PULSANTINOCARINO</button>
        </>
    )
}
