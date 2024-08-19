// import React, { useContext, useEffect } from "react";
// import "../../styles/home.css";
// import { Context } from "../store/appContext.js";

// export const PlanetCard = () => {
// 	const { store, actions } = useContext(Context);

// 	useEffect(() => {
// 		actions.fetchPlanets();
// 	}, []);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Star Wars Planets</h1>
// 			<div className="d-flex flex-wrap justify-content-center">
// 				{store.planets.map((planet) => (
// 					<div key={planet.uid} className="card m-2" style={{width: "18rem"}}>
// 						<div className="card-body">
// 							<h5 className="card-title">{planet.name}</h5>
// 							<button 
// 								className="btn btn-primary"
// 								onClick={() => actions.toggleFavorite(planet)}
// 							>
// 								{store.favorites.some(fav => fav.uid === planet.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
// 							</button>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export default function PlanetsCard() {
    const [planets, setPlanets] = useState([]);

    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getPlanets() {
            const response = await fetch("https://www.swapi.tech/api/planets");
            const data = await response.json();
            setPlanets(data.results);
        }
        getPlanets();

    }, []);

    const handleFavorite = (planet) => {
        if (store.favorite.includes(planet)) {
            actions.deleteFavorite(planet);
        } else {
            actions.addFavorites(planet);
        }
    }

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {planets.map((planet, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/planet-description/" + planet.uid}>Learn More</Link> 
                        <Button className="secondpagebutton" onClick = {() => {handleFavorite(planet.name)}}>Favorite</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}