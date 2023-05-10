import React, {useEffect, useState, useRef} from "react";
import styles from "/Users/user/projeto-react-treinamento/projeto-react/src/Styles/HomeCss.module.css"
import { Link } from "react-router-dom";
import {dataLayerWatch} from '../events-DataLayer/eventsDataLayer.js'


function AnimesData ()  {

    
    const [animeData,setAnimeData] = useState([])  
    const animeRef = useRef(0)
     
    const dataLayer = (anime) => {
        dataLayerWatch(anime)
    };

    useEffect(()=>{
        fetch(`https://api.jikan.moe/v4/anime?q=bleach&limite=20`)
        .then((resp) => resp.json())
        .then((data) =>{
            setAnimeData(data.data) 
        })
        .catch((err) => console.log(err))
        
    },[])  

    animeRef.current = animeData.length
    
    return(       
        <>
        <h3>Anime/Filmes encontrados: {animeRef.current}</h3>
            {
                animeData.map((anime) => (
                <div className={styles.cardContainer}> 
                    <div className={styles.card}>           
                    <img src ={anime.images.jpg.large_image_url} alt={anime.title}></img>
                    <div className={styles.animeInfo}>
                        <h4>{anime.title}</h4>
                        <Link to={"/watch/" + anime.title}> <button onClick={() => dataLayer(anime.title)}>Assistir</button></Link>
                    </div>
                    </div>   
                </div>                    
            ))}      
        </>   
    )
}
export default AnimesData