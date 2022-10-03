import axios from 'axios';

export const getAllCountries = () => dispatch => {
    const countries = axios.get("http://localhost:3001/countries")
    .then(response => response.data)
    .then(countries => {
        dispatch({type: "GET_ALL_COUNTRIES", countries})
    })
    return countries;
}

export const getCountryName = (name) => dispatch => {
    const countries = axios.get(`http://localhost:3001/countries?name=${name}`)
    .then(response => response.data)
    .then(countries => {
        dispatch({type: "GET_COUNTRY_NAME", countries})
    })
    return countries;
}

export const getCountryID = (id) => dispatch => {
    const countries = axios.get(`http://localhost:3001/countries/${id}`)
    .then(response => response.data)
    .then(countries => {
        dispatch({type: "GET_COUNTRY_ID", countries})
    })
    return countries;
}

export const postActivity = (payload) => async dispatch => {
    const activity = await axios.post(`http://localhost:3001/activities`, payload);
    return activity;
}

export const getByActivities = () => dispatch => {
    const activities = axios.get(`http://localhost:3001/activities`)
    .then(response => response.data)
    .then(activities => {
        dispatch({type: "GET_COUNTRY_ACTIVITY", activities})
    })
    return activities;
} //Revisar que traiga los paises con esas actividades del back

export const filterContinent = (payload) => {
    return{
        type: "FILTER_CONTINENT",   
        payload
    }
}

export const orderName = (payload) => {
    return{
        type: "ORDER_NAME",
        payload
    }
}

export const orderPopulation = (payload) => {
    return{
        type: "ORDER_POPULATION",
        payload
    }
}

export const filterActivities = (payload) => {
    return{
        type: "FILTER_ACTIVITIES",
        payload
    }
}

export const deleteCountry = (id) => {
    return{
        type: "DELETE_COUNTRY",
        payload: id
    }
}

export const setDetailNull = () => {
    return {
        type: "SET_NULL"
    }
}


