import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import "./Cards.css";

const Cards = function({currentCountries}){
    return(
        <div className="Cards-div">
            {
                currentCountries && currentCountries.map(country => {
                    return <CountryCard
                        key={country.id}
                        name={country.name}
                        image={country.image}
                        continent={country.continent}
                        id={country.id}            
                    />
                })
            }
        </div>
    )
}

export default Cards;