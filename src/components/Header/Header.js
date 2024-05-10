import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { logo } from "../../utils/SiteImages/Images";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_image">
                    <img className="image_logo" src={logo} alt="logo" />
                </div>
                <div className="header_list">
                    <ul className="list_items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="tasks">Tasks</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
