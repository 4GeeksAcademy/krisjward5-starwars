import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const StarshipDescription = () => {
    const [starship, setStarship] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function getStarship() {
            const response = await fetch("https://www.swapi.tech/api/starships/" + id)
            const data = await response.json();
            setStarship(data.result.properties);
        }
        getStarship();
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
                                {starship.name}
                            </h1>
                            <div className="details">
                                <div className="size">
                                    <h4>Length: {starship.length}</h4>
                                    <h4>Hyperdrive Rating: {starship.hyperdrive_rating}</h4>
                                    <h4>Cargo Capacity: {starship.cargo_capacity}</h4>
                                    <h4>Crew: {starship.crew}</h4>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}