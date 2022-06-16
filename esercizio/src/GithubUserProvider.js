import useFetch from "./useFetch"

export default function GithubUserProvider({username}){
const {data,error}=useFetch(username)
   
   
    return(
        <>
         <h1>{data.login}</h1>
         <img src={data.avatar_url}></img>
        <h1>{data.name}</h1>
        {error && <h1>{error.message} </h1>}
        </>
    )
}