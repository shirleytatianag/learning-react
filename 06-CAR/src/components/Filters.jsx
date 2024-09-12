/* eslint-disable react/prop-types */
import { useState, useId } from 'react'
import  '../assets/Filters.css'

export function Filters({ onChange }){
    //Algo huele mal, dos fuentes de la verdad
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    
    const handleChangeMinPrice = (e) => {
        console.log( e.target.value);

        setMinPrice(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        console.log( e.target.value);
            //Algo huele mal
        onChange(prevState => ({
            ...prevState,
            minPrice: minPrice,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio:</label>
                <input type="range" min='0' max='1000' id='minPriceFilterId'
                       onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId} >Categoria</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                        <option value="all">Todas</option>
                        <option value="laptops">Portátiles</option>
                        <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}