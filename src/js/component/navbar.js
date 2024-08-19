import React from "react";
import { Link } from "react-router-dom";
import FavoritesDropdown from "./FavoritesDropdown";

export const Navbar = () => {
    return (
        <nav className="navbar space-navbar">
            <div className="container">
                <h1>StarWars</h1>
                <div className="navbar-end">
                    <FavoritesDropdown />
                </div>
            </div>
        </nav>
    );
};