import React from "react";
import "./Paginated.css";

const Paginated = function(props){
    const pageNumbers = []

    for(let i = 1; i<=Math.ceil(props.allCountries/props.countriesPerPage); i++){
        pageNumbers.push(i)
    }


    return(
        <nav className="navSearch">
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => {
                       return (<li key={number}>
                        <a onClick={()=>props.paginated(number)}>{number}</a>
                        </li>)
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginated;