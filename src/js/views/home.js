import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CharacterCard from "../component/CharecterCard";
import PlanetsCard from "../component/PlanetsCard";
import StarshipsCard from "../component/StarshipsCard"

export const Home = () => (

		<div>
			<CharacterCard/>
			<PlanetsCard/>
			<StarshipsCard/>
		</div>
	
);