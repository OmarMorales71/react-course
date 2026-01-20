import { useState, useEffect } from "react"
import { refreshFact } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState('lorem ipsun cat fact')

    const getRandomFact = () => {
        refreshFact().then(newFact=>setFact(newFact))
    }

    useEffect(getRandomFact, [])


    return { fact, getRandomFact }
}