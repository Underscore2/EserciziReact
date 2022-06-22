import useFetch from "./useFetch"

export default function GithubUserPrivder({username}){
    const {data,error,isLoading} = useFetch(username)
    return <>
    {isLoading && <h1>Loading..</h1>}
    {error && <h1>{error.message}</h1>}
    {data && <div><h1>{data.login}</h1>
    <img src={data.avatar_url}></img></div>}


    </>
}