// import React, { useContext, useEffect } from "react";
// import "../../styles/home.css";
// import { Context } from "../store/appContext.js";

// export const CharecterCard = () => {
// 	const { store, actions } = useContext(Context);

// 	useEffect(() => {
// 		actions.fetchCharacters();
// 	}, []);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Star Wars Characters</h1>
// 			<div className="d-flex flex-wrap justify-content-center">
// 				{store.characters.map((character) => (
// 					<div key={character.uid} className="card m-2" style={{width: "18rem"}}>
// 						<div className="card-body">
// 							<h5 className="card-title">{character.name}</h5>
// 							<button 
// 								className="btn btn-primary"
// 								onClick={() => actions.toggleFavorite(character)}
// 							>
// 								{store.favorites.some(fav => fav.uid === character.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
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

export default function CharecterCard() {
    const [Charecters, setCharecters] = useState([]);

    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getCharecters() {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
            setCharecters(data.results);
        }
        getCharecters();

    }, []);

    const handleFavorite = (charecter) => {
        if (store.favorite.includes(charecter)) {
            actions.deleteFavorite(charecter);
        } else {
            actions.addFavorites(charecter);
        }
    }

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {charecter.map((charecter, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/charecters/${charecter.uid}.jpg`} alt={charecter.name} />
                    <div className="card-body">
                        <h5 className="card-title">{charecter.name}</h5>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/charecter-description/" + charecter.uid}>Learn More</Link> 
                        <Button className="secondpagebutton" onClick = {() => {handleFavorite(charecter.name)}}>Favorite</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}