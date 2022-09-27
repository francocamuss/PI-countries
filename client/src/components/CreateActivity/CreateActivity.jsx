import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import "./CreateActivity.css";



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

    const validate = (state) => {
        const errors = {};
        if (!state.name) {
            errors.name = "Se requiere un nombre";
        }
        if (state.difficulty > 5 || state.difficulty < 1) {
            errors.difficulty = "La dificultad tiene que ser un entero entre 1 y 5"
        }
        if (state.duration < 0 || state.duration > 10) {
            errors.duration = "La duracion es invalida";
        }
        if (state.season) {
            
        }
        if (state.countryID.length === 0) {
            errors.countryID = "Debes seleccionar al menos un elemento"
        }
        return errors;
    }

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
    }   

    const handleCheck = (e) => {
        e.preventDefault();
        if (e.target.checked) {
            setState({
                ...state,
                season: e.target.value
            })
        }
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setState({
            ...state,
            countryID: [...state.countryID, e.target.value]
        })
        setErrors(validate({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleDelete = (e) => {   
        setState({
            ...state,
            countryID: state.countryID.filter(id => id !== e)
        })
    }

    const createActivity = (e) => {
        e.preventDefault();
        dispatch(actions.postActivity(state));
        alert("Actividad creada con exito!")
        setState(initialState);
    }


    return(
        <form onSubmit={(e) => createActivity(e)} className="ca-form" >
            <div className="ca-div">
                <h2>Create activity: </h2>
                <label>Name: </label>
                <input name="name" type="text" value={state.name} onChange={handleChange} />
                {errors.name && (<p>{errors.name}</p>)}
                <label>Difficulty: </label>
                <input name="difficulty" type="number" value={state.difficulty} onChange={handleChange} />
                {errors.difficulty && (<p>{errors.difficulty}</p>)}
                <label>Duration</label>
                <input name="duration" type="number" value={state.duration} onChange={handleChange} />
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
                <select onChange={handleSelect}>
                    {
                        countries && countries.map(c => {
                            return <option value={c.id}>{c.name}</option>
                        })
                    }
                </select>
                <div className="ca-row">
                {
                        state.countryID.map(el => {
                            return <div >
                                <button onClick={() => handleDelete(el)} className="ca-bt-delete">x</button>
                                <p className="ca-p-delete">{el + ',  '}</p>
                            </div>
                        })
                        
                }
                </div>
                {errors.countryID && (<p>{errors.countryID}</p>)}
                <button type="submit">Create activity</button>
            </div>
        </form>
    )   
}

export default CreateActivity;