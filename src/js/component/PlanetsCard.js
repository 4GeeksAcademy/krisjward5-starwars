import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const PlanetCard = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Planets</h1>
			<div className="d-flex flex-wrap justify-content-center">
				{store.planets.map((planet) => (
					<div key={planet.uid} className="card m-2" style={{width: "18rem"}}>
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<button 
								className="btn btn-primary"
								onClick={() => actions.toggleFavorite(planet)}
							>
								{store.favorites.some(fav => fav.uid === planet.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};