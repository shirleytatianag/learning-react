const CAT_ENDOPOINT_RANDOM_fACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDOPOINT_RANDOM_fACT)
    const data = await res.json()
    const { fact } = data;
    return fact;
}


// fetch(CAT_ENDOPOINT_RANDOM_fACT)
// .then(res =>  res.json()
//     // Si no se hace el trhiw, solo entra al catch cuando  hay un error en la peticion
//     // if (!res.ok) throw new Error('Error fetching fact')
//     )
// .then(data =>{
//     const { fact } = data;
// }).catch((error)=>{
//     console.log(error);
//     //Tanto si hay error con la respuesta
//     // como si hay un error con la petición
// })