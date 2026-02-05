
import { useState } from 'react'
import { searchMovies } from '../services/movies'
import { useRef, useMemo } from 'react'
import { useCallback } from 'react'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async (search) => {
        console.log("getMovies")
        if(previousSearch.current === search) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }, [])
    // const getSortedMovies = () => {
    //     console.log("getSortedMovies")
    //     return sort ? [...movies].sort((a,b)=> a.title.localeCompare(b.title)) : movies

    // }

    const sortedMovies= useMemo(() => {
        console.log("getSortedMovies")
        return sort ? [...movies].sort((a,b)=> a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading, errorMovies: error }
}