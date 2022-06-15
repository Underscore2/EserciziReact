import { useEffect,useState } from "react"

export default function GithubUserProvider({username}){
   const [data,setData]=useState('')

   async function userProvider (){ 
      const response = await fetch(`https://api.github.com/users/${username}`);
      const pack = await response.json()
      setData(pack)
      console.log(pack)
    
  }
   useEffect(()=>{
userProvider()

   },[])
   
   
    return(
        <>
         <h1>{data.login}</h1>
         <img src={data.avatar_url}></img>
        <h1>{data.name}</h1>
        </>
    )
}