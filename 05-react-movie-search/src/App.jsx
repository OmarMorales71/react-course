
import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch';
import { useRef } from 'react';


function App() {
  const {search, updateSearch, error} = useSearch()
  const { movies, getMovies, loading, errorMovies } = useMovies({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }
  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} placeholder='Avengers, Harry Potter, The Matrix...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p>:<Movies movies={movies} />}
        {errorMovies && <p style={{ color: 'red' }}>{errorMovies}</p>}
      </main>
    </div>
  )
}

export default App
