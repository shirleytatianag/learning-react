import './App.css'
import { useCatImage } from "./hooks/useCatImaje";
import { useCatFact } from "./hooks/useCatFact";

const CAT_ENDOPOINT_RANDOM_fACT = 'https://catfact.ninja/fact';
// const CAT_ENDOPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://catass.com';



export function App(){
    const { fact, refreshRandomFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    //Un efecto para una sola responsabilidad. 
    const handleClick =  () => {
         refreshRandomFact()
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