import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import * as actions from '../../redux/actions';
import "./Search.css";

const Search = function({setCurrentPage, setRender, allActivities}){

    const [country, setCountry] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    const searchCoutry = (e) => {
        e.preventDefault();
        dispatch(actions.getCountryName(country));
        setCountry("");
    }

    const restartCountries = (e) => {
        e.preventDefault();
        dispatch(actions.getAllCountries());
    }

    const orderName = (e) => {
        e.preventDefault();
        dispatch(actions.orderName(e.target.value));
        setCurrentPage(1);
        setRender(`Ordenando ${e.target.value}`);
    }

    const orderPopulation = (e) => {
        e.preventDefault();
        dispatch(actions.orderPopulation(e.target.value));
        setCurrentPage(1);
        setRender(`Ordenando ${e.target.value}`);
    }

    const orderContinent = (e) => {
        e.preventDefault();
        dispatch(actions.filterContinent(e.target.value));
        setCurrentPage(1);
        setRender(`Ordenando ${e.target.value}`);
    }

    const filterActivites = (e) => {
        e.preventDefault();
        dispatch(actions.filterActivities(e.target.value))
        setCountry("");
    }

    return(
        <div className='s-color s-div s-column'>
            <label>Search Country By Name: </label>
            <input
                type="text"
                name="name"
                placeholder='Search country'
                value={country}
                onChange={handleChange}
                className="s-input"
            />
            <button className='s-bt' type="button" onClick={searchCoutry}>Search country</button>
            <button className='s-bt' onClick={restartCountries}>Restart countries</button>
            <div className='s-column s-order'>
                <label className='s-label'>Search activity: </label>
                <select className='s-bt' onClick={filterActivites}>
                    {allActivities && allActivities.map(e => {
                        return <option value={e.name} key={e.id}>{e.name}</option>
                    })}
                </select>
                <label className='s-label'>Order by name: </label>
                <select className='s-bt' onClick={orderName}>
                    <option value="asc">Ascendancy</option>
                    <option value="des">Descendant</option>
                </select>
                <label className='s-label'>Order by population: </label>
                <select className='s-bt' onClick={orderPopulation}>
                    <option value="asc">Ascendancy</option>
                    <option value="des">Descendant</option>
                </select>
                <label className='s-label'>Filter by continent: </label>
                <select className='s-bt' onClick={orderContinent}>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
            </div>
        </div>
    )
}

export default Search;