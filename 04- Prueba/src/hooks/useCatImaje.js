import { useEffect, useState } from "react";

export function useCatImage({fact}){
    const [imageUrl, setImageUrl] = useState();

    useEffect( ()=>{
        if (!fact) return
        const firstWord = fact.split(' ')[0];
        // const firstWord = fact.split(' ').slice(0,3).join(' ');
        // const firstWord = fact.split(' ',3).join(' ');
        // console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res=> res.json()
        .then(response => {
            console.log(response);
            const { url } = response;
            setImageUrl(url)
        })    
    )
    }, [fact])

    return { imageUrl}
}