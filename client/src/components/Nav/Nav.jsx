import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = function(){
    return(
        <div className="n-color n-div">
            <h2 className="n-h2">Henry Countries</h2>
            <div className="div-navLinks">
                <NavLink to="/Home"><h4 className="n-color n-h4-L">Home</h4></NavLink>
                <NavLink to="/Home/Create"><h4 className="n-color n-h4-R">Create activity</h4></NavLink>
            </div>
        </div>
    )
}

export default Nav;