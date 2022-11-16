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
    
    useEffect(() => {
        dispatch(actions.setDetailNull())
        dispatch(actions.getCountryID(countryID))
    }, [dispatch]);

    return(
        <div>
            {countryDetail.name ? <div className="cd-div">
            <div className="cd-row">
                <div className="cd-div-nameflag">
                    <h2>{countryDetail.name}</h2>
                    <img src={countryDetail.image} alt="flag country"/>  
                </div>
                <div className="cd-div-caract">
                    <h3>INFORMATION</h3>
                    <h3>Continent: {countryDetail.continent}</h3>
                    <h3>Capital: {countryDetail.capital}</h3>
                    <h3>Subregion: {countryDetail.subregion}</h3>
                    <h3>Area: {countryDetail.area} km2</h3>
                    <h3>Population: {countryDetail.population}</h3>
                </div>
            </div>
            <div className="cd-div-activities">
                <h3>ACTIVITIES: </h3>
                <div>
                {
                    countryDetail.activities && countryDetail.activities.map(a => {
                        return <h3>Name: {a.name}, Difficulty: {a.difficulty}, Duration: {a.duration}, Season: {a.season}</h3>
                    })
                }
                </div>
            </div>
            </div> : <p className="loader">Cargando...</p>}
        </div>
    )
}

export default CountryDetail;
//<h3>activities: {countryDetail.activities}</h3>