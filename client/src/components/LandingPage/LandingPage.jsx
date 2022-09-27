import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component{
    render(){
        return(
            <div className="lp-div">
                <h1 className="lp-h1-p">Welcome to Henry Countries</h1>
                <div>
                    <p className="lp-h1-p">
                        Henry Countries is an application where you will be able to search for information on different countries and their activities.
                    </p>
                    <NavLink to="/Home">
                        <button type="button" className="lp-bt">Home</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}   