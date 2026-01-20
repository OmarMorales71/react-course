import { useCatImage } from "../hooks/useCatImage";

export function Extra(){
    const {imageUrl} = useCatImage({ fact: 'Hola wuapa'})

    return <>{imageUrl && <img src={imageUrl}/>}</>
}