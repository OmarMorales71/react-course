
import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch';
import { useState,useCallback } from 'react';
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading, errorMovies } = useMovies({ search, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce((search) => {
    console.log('search', search)
    getMovies(search)
  }, 2000), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debouncedGetMovies(newQuery)
  }
  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} placeholder='Avengers, Harry Potter, The Matrix...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
        {errorMovies && <p style={{ color: 'red' }}>{errorMovies}</p>}
      </main>
    </div>
  )
}

export default App
