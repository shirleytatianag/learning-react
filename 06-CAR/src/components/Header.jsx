/* eslint-disable react/prop-types */
import { Filters } from './Filters.jsx'


export function Header({changeFilters}){
    return (
        <header>
            <h1>222 Shop 🛒</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}