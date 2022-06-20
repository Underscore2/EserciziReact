import { useParams } from "react-router-dom";
import GithubUserProvider from "./GithubUserProvider";
export default function ShowGithubUser() {
    const { name } = useParams()
    return (
        <>
            {console.log(name)}
            <GithubUserProvider name={name} />
        </>
    )
}