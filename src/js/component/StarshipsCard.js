import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export default function StarshipsCard() {
    const [starships, setStarships] = useState([]);

    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getStarships() {
            const response = await fetch("https://www.swapi.tech/api/starships");
            const data = await response.json();
            setStarships(data.results);
        }
        getStarships();

    }, []);

    const handleFavorite = (starship) => {
        if (store.favorite.includes(starship)) {
            actions.deleteFavorite(starship);
        } else {
            actions.addFavorites(starship);
        }
    }

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {starships.map((starship, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} alt={starship.name} />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/starship-description/" + starship.uid}>Learn More</Link> 
                        <Button className="secondpagebutton" onClick = {() => {handleFavorite(starship.name)}}>Favorite</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}