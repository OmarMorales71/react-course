import { useRef, useState, useEffect } from "react"

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
        isFirstInput.current=search ===''
        return
    } 
    if (search === '') {
      setError('Empty input is invalid')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Numeric value is not valid')
      return
    }

    if (search.length < 3) {
      setError('Movie search must have at least 3 characters')
      return
    }
    setError(null)
  }, [search])
  return {search, updateSearch, error}
}