import axios from 'axios';
const backDeploy = "https://pi-countries-production-5bd1.up.railway.app/";
const localBack = "http://localhost:3001/"

export const getAllCountries = () => dispatch => {
    const countries = axios.get(`${backDeploy}countries`)
    .then(response => response.data)
    .then(countries => {
        dispatch({type: "GET_ALL_COUNTRIES", countries})
    })
    return countries;
}

export const getCountryName = (name) => async dispatch => {
    try {
        const countries = await axios.get(`${backDeploy}countries?name=${name}`)
        dispatch({type: "GET_COUNTRY_NAME", countries: countries.data})
    return countries;
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getCountryID = (id) => dispatch => {
    const countries = axios.get(`${backDeploy}countries/${id}`)
    .then(response => response.data)
    .then(countries => {
        dispatch({type: "GET_COUNTRY_ID", countries})
    })
    return countries;
}

export const postActivity = (payload) => async dispatch => {
    const activity = await axios.post(`${backDeploy}activities`, payload);
    return activity;
}

export const getByActivities = () => dispatch => {
    const activities = axios.get(`${backDeploy}activities`)
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
    return{
        type: "DETAIL_NULL"
    }
}


