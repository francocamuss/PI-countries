import React from "react";
import Search from '../Search/Search.jsx';
import Cards from '../Cards/Cards.jsx';
import Paginated from '../Paginated/Paginated.jsx';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useState } from "react";
import "./Home.css";

const Home = function(){
    const dispatch = useDispatch()
    const allCountries = useSelector(state => state.allCountries)
    const [render, setRender] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
    const allActivities = useSelector(state => state.activities)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(actions.getAllCountries())
    }, [dispatch])

    useEffect(()=>{
        dispatch(actions.getByActivities())
    }, [dispatch])

    return(
        <div>
            <div className="row">
                <Search setCurrentPage={setCurrentPage} setRender={setRender} allActivities={allActivities} />
                <Cards currentCountries={currentCountries} />
            </div>
            <Paginated allCountries={allCountries.length} countriesPerPage={countriesPerPage} paginated={paginated}/>
        </div>
    )
}

export default Home;