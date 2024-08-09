import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts";

const CAT_ENDOPOINT_RANDOM_fACT = 'https://catfact.ninja/fact';
// const CAT_ENDOPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://catass.com';

export function App(){
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    //Un efecto para una sola responsabilidad. 
    useEffect(() =>{
        factSet()
    }, [])

    useEffect( ()=>{
        if (!fact) return
        const firstWord = fact.split(' ')[0];
        // const firstWord = fact.split(' ').slice(0,3).join(' ');
        // const firstWord = fact.split(' ',3).join(' ');
        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
        .then(res=> res.json()
        .then(response => {
            console.log(response);
            const { url } = response;
            console.log(url);
            setImageUrl(url)
        })    
    )
    }, [fact])

    const getFact = () =>{
        fetch(CAT_ENDOPOINT_RANDOM_fACT)
        .then(res =>  res.json()
            // Si no se hace el trhiw, solo entra al catch cuando  hay un error en la peticion
            // if (!res.ok) throw new Error('Error fetching fact')
            )
        .then(data =>{
            console.log(data, "dddd");
            const { fact } = data;
            console.log(fact);
            setFact(fact)
        }).catch((error)=>{
            console.log(error);
            //Tanto si hay error con la respuesta
            // como si hay un error con la petición
        })
    }

    const handleClick = async () => {
        factSet()
    }

    const factSet = async () => {
        const fact= await getRandomFact()
        console.log(fact)
        setFact(fact)
    }
     
    return (
        <main className="wrapper-container">
             <h1>App de gatitos</h1>
             <button onClick={handleClick}>Obtener nuevo hecho</button>
             { fact &&  <p>{fact}</p> }
             {imageUrl &&  <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`image extracted using the first word for ${fact}`} />}
        </main>
    )
}