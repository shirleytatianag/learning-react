const APIKEY = '95004ebc&s'

// export const searchMovies = async ({search}) => {
//     try {
//         const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`)
//         let data= await response.json();
        
//         return data; 
//     } catch (error) {
//         throw new Error("Error searching movie" + error);
//     }
// }

export const searchMovies = async ({search}) => {
    try {        
        return await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`)
        .then(response => response.json());
    } catch (error) {
        throw new Error("Error searching movie" + error);
    }
}