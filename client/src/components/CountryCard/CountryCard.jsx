import React from "react";
import { NavLink } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = function(props){
    return(
        <div className="cc-div">
            <NavLink to={`/Home/Countries/${props.id}`}>
            <h2>{props.name}</h2>
            <img src={props.image} alt="Image country" className="cc-img"/>
            <h3>{props.continent}</h3>
            </NavLink>
        </div>
    )
}

export default CountryCard;