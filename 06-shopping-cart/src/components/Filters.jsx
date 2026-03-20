import { useId, useState } from 'react'
import './Filters.css'
export function Filters({changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId =useId()
    const categoryFilterId =useId()


    const handleMinPrice = (event)=>{
        const newMinPrice = event.target.value
        setMinPrice(newMinPrice)
        changeFilters(prev =>({
            ...prev,
            minPrice : newMinPrice
        }))
    }

    const handleCategory = (event)=>{
        const newCategory = event.target.value
        changeFilters(prev =>({
            ...prev,
            category : newCategory
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>
                    Price
                </label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleMinPrice}/>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>

                </select>
            </div>
        </section>
    )
}