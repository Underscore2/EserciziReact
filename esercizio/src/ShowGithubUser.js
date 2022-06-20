import { useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import GithubUserProvider from "./GithubUserProvider"

export default function ShowGithubUser() {
const [name,setName]=useState(['Underscore2'])
    function handleInput(event ){
        event.preventDefault()
        setName(name.concat(event.target.previousSibling.value))
    }
    return (
        <>
        <form>
        <input type="text"></input>
        <button onClick={handleInput}>Link!</button>
        </form>
        <div>
            {name.map(item=>{return(
                <div>
                <Link to={`${item}`}>{item}</Link>
                </div>
            )})}
        </div>
        <Outlet/>
        </>
    )
}