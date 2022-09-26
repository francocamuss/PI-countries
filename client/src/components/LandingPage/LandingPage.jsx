import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component{
    render(){
        return(
            <div className="lp-div">
                <h1 className="lp-h1-p">Bienvenido a Henry Countries</h1>
                <div>
                    <p className="lp-h1-p">
                        Henry Countries es una app donde vas a poder buscar informacion de distintos paises.
                    </p>
                    <NavLink to="/Home">
                        <button type="button" className="lp-bt">Home</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}   