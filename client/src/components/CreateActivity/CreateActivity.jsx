import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import "./CreateActivity.css";

const validate = (state) => {
    const errors = {};
    let dif = Number(state.difficulty);
    let dur = Number(state.duration);
    if (!state.name) {
        errors.name = "Se requiere un nombre";
    }
    if (!state.difficulty) {
        errors.difficulty = "Campo necesario"
        
    } else if (dif < 1 || dif > 5) {
        errors.difficulty = "Debe ser entre 1 y 5"
    }
    if (!state.duration) {
        errors.duration = "Campo necesario";
    } else if (dur < 0 || dur > 24) {
        errors.duration = "Debe ser entre 1 y 24"
    }
    if (!state.season) {
        errors.season = "Debes seleccionar una temporada"
    }
    if (!state.countryID || state.countryID.length < 1) {
        errors.countryID = "Campo necesario"
    }
    return errors;
}


const CreateActivity = function(){
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);

    const initialState = {
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryID: []
    }

    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...state,
            [e.target.name]: e.target.value
        }))
        console.log(state)
    }   

    const handleCheck = (e) => {
        e.preventDefault();
        if (e.target.checked) {
            setState({
                ...state,
                season: e.target.value
            })
        }
        setErrors(validate({
            ...state,
            season: e.target.value
        }))
        console.log(state)
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setState({
            ...state,
            countryID: [...state.countryID, e.target.value]
        })
        setErrors(validate({
            ...state,
            countryID: e.target.value
        }))
        console.log(state)
    }

    const handleDelete = (e) => {   
        setState({
            ...state,
            countryID: state.countryID.filter(id => id !== e)
        })
    }

    const createActivity = (e) => {
        e.preventDefault();
        if (!state.name || !state.difficulty || !state.duration || !state.season || !state.countryID) {
            return alert('Complete correctamente el formulario antes de enviarlo')
        }
        dispatch(actions.postActivity(state));
        alert("Actividad creada con exito!")
        setState(initialState);
    }


    return(
        <form onSubmit={(e) => createActivity(e)} className="ca-form" >
            <div className="ca-div">
                <h2 className="ca-h2">Create activity: </h2>
                <label>Name: </label>
                <input className="ca-input" name="name" type="text" value={state.name} onChange={handleChange} />
                {errors.name && (<p>{errors.name}</p>)}
                <label>Difficulty: </label>
                <input className="ca-input" name="difficulty" type="number" value={state.difficulty} onChange={handleChange} />
                {errors.difficulty && (<p>{errors.difficulty}</p>)}
                <label>Duration</label>
                <input className="ca-input" name="duration" type="number" value={state.duration} onChange={handleChange} />
                {errors.duration && (<p>{errors.duration}</p>)}
                <div className="ca-column">
                    <label>Season: </label>
                    <label>
                        <input
                            type="checkbox"
                            name="Summer"
                            value="Summer"
                            onChange={handleCheck}
                        />Summer</label>
                    <label>
                        <input
                            type="checkbox"
                            name="Fall"
                            value="Fall"
                            onChange={handleCheck}
                        />Fall</label>
                    <label>
                        <input
                            type="checkbox"
                            name="Winter"
                            value="Winter"
                            onChange={handleCheck}
                        />Winter</label>
                    <label>
                        <input
                            type="checkbox"
                            name="Spring"
                            value="Spring"
                            onChange={handleCheck}
                        />Spring</label>
                </div>
                {errors.season && (<p>{errors.season}</p>)}
                <select className="ca-input" onChange={handleSelect}>
                    {
                        countries && countries.map(c => {
                            return <option key={c.id} value={c.id}>{c.name}</option>
                        })
                    }
                </select>
                <div className="ca-row">
                {
                        state.countryID.map(el => {
                            return <div key={el}>
                                <button onClick={() => handleDelete(el)} className="ca-bt-delete">x</button>
                                <p className="ca-p-delete">{el + ',  '}</p>
                            </div>
                        })
                        
                }
                </div>
                {errors.countryID && (<p>{errors.countryID}</p>)}
                <button className="ca-bt-submit" type="submit">Create activity</button>
            </div>
        </form>
    )   
}

export default CreateActivity;