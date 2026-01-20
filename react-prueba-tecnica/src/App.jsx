import { use, useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Extra } from "./components/extra"



export function App() {
    const {fact, getRandomFact } = useCatFact()
    const { imageUrl } = useCatImage({fact})

    const handleOnClick = ()=>{
        getRandomFact()
    }
    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleOnClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}