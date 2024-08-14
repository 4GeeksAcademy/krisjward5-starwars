import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Characters</h1>
			<div className="d-flex flex-wrap justify-content-center">
				{store.characters.map((character) => (
					<div key={character.uid} className="card m-2" style={{width: "18rem"}}>
						<div className="card-body">
							<h5 className="card-title">{character.name}</h5>
							<button 
								className="btn btn-primary"
								onClick={() => actions.toggleFavorite(character)}
							>
								{store.favorites.some(fav => fav.uid === character.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};