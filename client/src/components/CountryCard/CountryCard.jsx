import React from "react";
import { NavLink } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = function(props){
    return(
        <div className="cc-div">
            <NavLink to={`/Home/Countries/${props.id}`}>
            <h2 className="cc-color cc-h2">{props.name}</h2>
            <img src={props.image} alt="Country" className="cc-img"/>
            <h3 className="cc-color">{props.continent}</h3>
            </NavLink>
        </div>
    )
}

export default CountryCard;