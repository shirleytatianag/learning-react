import { useState, useRef } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search }) {
  
  const [responseMovies, setResponseMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const previousSearch = useRef(search);

  const getMovies = async () => {
    console.log(search === previousSearch.current);
    
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      if (search) {
        previousSearch.current = search
        const data = await searchMovies({search})
        setResponseMovies(data)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
       
  };
  
  const movies = responseMovies?.Search || [];

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies, getMovies, loading, error };
}