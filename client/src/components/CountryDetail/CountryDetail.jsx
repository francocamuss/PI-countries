import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import "./CountryDetail.css";


const CountryDetail = function(props){

    const countryDetail = useSelector(state => state.countryDetail);
    const countryID = props.match.params.id;
    const dispatch = useDispatch();

    /*useEffect(()=>{
        dispatch(actions.getByActivities())
    }, [])*/
    
    useEffect(()=> dispatch(actions.getCountryID(countryID)), [dispatch]);

    return(
        <div className="cd-div">
            <h2>{countryDetail.name}</h2>
            <img src={countryDetail.image} alt="flag country"/>
            <h3>id: {countryDetail.id}</h3>
            <h3>Continent: {countryDetail.continent}</h3>
            <h3>Capital: {countryDetail.capital}</h3>
            <h3>Subregion: {countryDetail.subregion}</h3>
            <h3>Area: {countryDetail.area} km2</h3>
            <h3>Population: {countryDetail.population}</h3>
            <h3>Activities: </h3>
            <div>
            {
                countryDetail.activities && countryDetail.activities.map(a => {
                    return <h3>Name: {a.name}, Difficulty: {a.difficulty}, Duration: {a.duration}, Season: {a.season}</h3>
                })
            }
            </div>
        </div>
    )
}

export default CountryDetail;
//<h3>activities: {countryDetail.activities}</h3>