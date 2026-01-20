const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const refreshFact= () => {
        return fetch(CAT_ENPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                return fact
            })
    }