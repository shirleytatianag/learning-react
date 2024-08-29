import { useEffect, useState, useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies' 
// http://www.omdbapi.com/?apikey=[95004ebc]&s=Avenger
// http://www.omdbapi.com/?apikey=95004ebc&s=Avenger
// APIKEY: 95004ebc
/* http://www.omdbapi.com/?t=uyiuyu */

function useSearch () {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  console.log(isFirstInput);
  
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
      setError('La busqueda debe tener al menos 3 palabaras')
      return
    }
  
    setError(null)

  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({search})

  const handleSubmit = (event)=>{
    event.preventDefault()
    getMovies()

    // ***Forma no controlada
    // const data = new window.FormData(event.target)
    // const query = data.get('query')
    //     console.log(query);


    //Cuando son más de un input
    // const moreData = Object.fromEntries(new window.FormData(event.target))
    // console.log(moreData);

    //** FIn forma no controlada
  }

    // Forma controlada, cada vez que se actualice el input va a renderizaar //
  const handleChange = (event) => {
    const newQuery = event.target.value
    updateSearch(newQuery)
  }

  //Validar el form de forma controlada, se puede con use estate y use effects
  // useEffect(()=>{
 
  // }, [query])
 
  return (
    <div className='page'> 
      <header>
        <h1>S E A R C H</h1>
        <form  className='form' onSubmit={handleSubmit} >
              <input onChange={handleChange} value={search} name='query' className='input-search' type="text" placeholder='Avenger, Star Wars, The Matrix'/>
              <button type="submit">Buscar</button>
        </form>
        {error&& <small className='error'>{error}</small>}
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