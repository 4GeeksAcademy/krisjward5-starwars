import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { CharecterCard } from "../component/PeopleCard.js";
import { PlanetCard } from "../component/PlanetsCard.js";
import { StarshipsCard } from "../component/StarshipsCard.js";

export const Home = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div>
			<CharecterCard/>
			<PlanetCard/>
			<StarshipsCard/>
		</div>
	);
};