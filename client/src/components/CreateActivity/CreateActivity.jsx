import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../redux/actions';
import "./CreateActivity.css";

const CreateActivity = function(){
    const dispatch = useDispatch();

    const initialState = {
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countryID: []
    }

    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const createActivity = (e) => {
        e.preventDefault();
        dispatch(actions.postActivity(state));
        setState(initialState);
    }

    return(
        <form onSubmit={(e) => createActivity(e)} className="ca-form">
            <div className="ca-div">
                <h2>Create activity: </h2>
                <label>Name: </label>
                <input name="name" type="text" value={state.name} onChange={handleChange}/>
                <label>Difficulty: </label>
                <input name="difficulty" type="number" value={state.difficulty} onChange={handleChange}/>
                <label>Duration</label>
                <input name="duration" type="number" value={state.duration} onChange={handleChange}/>
                <label>Season: </label>
                <input name="season" type="text" value={state.season} onChange={handleChange}/>

            <button type="submit">Create activity</button>
            </div>
        </form>
    )   
}

export default CreateActivity;