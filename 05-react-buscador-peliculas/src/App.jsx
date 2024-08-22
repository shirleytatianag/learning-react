
import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies' 
// http://www.omdbapi.com/?apikey=[95004ebc]&s=Avenger
// http://www.omdbapi.com/?apikey=95004ebc&s=Avenger
// APIKEY: 95004ebc
/* http://www.omdbapi.com/?t=uyiuyu */


function App() {
  const { movies }= useMovies()
  
  const inputRef = useRef()

  const handleSubmit = (event)=>{
    event.preventDefault()
    const inputEl = inputRef.current
    const value= inputEl.value
    console.log(value);
  }
 
  return (
    <div className='page'> 
      <header>
        <h1>Technical test</h1>
        <form  className='form' onSubmit={handleSubmit} >
              <input ref={inputRef} className='input-search' type="text" placeholder='Avenger, Star Wars, The Matrix'/>
              <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} ></Movies>
      </main>
        
    </div>

  )
}

export default App
