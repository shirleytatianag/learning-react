import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies' 
import debounce from "just-debounce-it";


function useSearch () {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return 
    }

    if(search === ''){
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3){
      setError('La busqueda debe tener al menos 3 carácteres')
      return
    }
  
    setError(null)

  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({search, sort})

  const debouncedGetMovies = useCallback( 
    debounce(search => {
      console.log('search' + search);
      getMovies({search})
    }, 300)
    , [getMovies])

  const handleSubmit = (event)=>{
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

    // Forma controlada, cada vez que se actualice el input va a renderizaar //
  const handleChange = (event) => {
    const newQuery = event.target.value
    updateSearch(newQuery)
    debouncedGetMovies(newQuery)
  }

  return (
    <div className='page'> 
      <header>
        <h1>S E A R C H</h1>
        <form  className='form' onSubmit={handleSubmit} >
              <input onChange={handleChange} value={search} name='query' className='input-search' type="text" placeholder='Avenger, Star Wars, The Matrix'/>
              <input type="checkbox" onChange={handleSort} checked={sort} />
              <button type="submit">Buscar</button>
        </form>
        {error && <small className='error'>{error}</small>}
      </header>

      <main>
        {
          loading?  <p>Cargando...</p> : <Movies movies={movies} ></Movies>
        }
      </main>
        
    </div>

  )
}

export default App