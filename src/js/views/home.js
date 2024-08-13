import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context)

useEffect(() => {

	actions.fetchCharacters();
}, []);

return (

<div className="text-center mt-5">
	<p>home page</p>
	<div>
		{store.characters.map((character) => (
			<div>
				<p>{character.name}</p>
			</div>
		))}
	</div>
	</div>

	)
};
