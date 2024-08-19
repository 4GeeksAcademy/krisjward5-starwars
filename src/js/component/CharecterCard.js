import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export default function CharacterCard() {
    const [characters, setCharacters] = useState([]);

    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
            setCharacters(data.results);
        }
        getCharacters();

    }, []);

    const handleFavorite = (item) => {
        if (store.favorites.includes(item)) {
            actions.deleteFavorites(item);
        } else {
            actions.addFavorites(item);
        }
    }

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {characters.map((character, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/character-description/" + character.uid}>Learn More</Link>
                        <button className="secondpagebutton" onClick={() => { handleFavorite(character.name) }}>Favorite </button>
                    </div>
                </div>
            ))}
        </div>
    )
}