import {React} from "react"
import { useParams } from "react-router-dom";


export default function PageAnime(){  
    const {name} = useParams();

    return(
        <>
            <p>{name}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/78WIYzX_m98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </>
    )
    
}