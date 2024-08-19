import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CharacterDescription = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function getCharacter() {
            const response = await fetch("https://www.swapi.tech/api/people/" + id)
            const data = await response.json();
            setCharacter(data.result.properties);
        }
        getCharacter();
        console.log(character)
    }, []);


    return (
        <section>
            <div className="post">
                <div className="left">
                    <img className="wordmark"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
                </div>
                <div className="right">
                    <img className="helmet"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png" alt="helmet" />
                        <div className="productInfo">
                            <h1>
                                {character.name}
                            </h1>
                            <div className="details">
                                <div className="size">
                                    <h4>Height: {character.height}</h4>
                                    <h4>Hair Color: {character.hair_color}</h4>
                                    <h4>Birth Year: {character.birth_year}</h4>
                                    <h4>Gender: {character.gender}</h4>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}