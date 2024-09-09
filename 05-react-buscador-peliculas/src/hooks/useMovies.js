import { useState, useRef, useMemo, useEffect, useCallback} from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  
  const [responseMovies, setResponseMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const previousSearch = useRef(search);
  const [mappedM, setMappedM] = useState([])

  const getMovies = useCallback(
     async ({search}) => {
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
  }, [])

  useEffect(()=>{
    const movies = responseMovies?.Search || [];

    const mappedMovies = movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
    setMappedM(mappedMovies)
  }, [responseMovies])

  const sortedMovies = useMemo(()=>{
    return sort ? [ ...mappedM].sort((a, b) => a.title.localeCompare(b.title)) : mappedM
  }, [sort, mappedM ])

  return { movies: sortedMovies || [], getMovies, loading, error };
}