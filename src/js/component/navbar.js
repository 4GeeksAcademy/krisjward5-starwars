import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Context } from "../store/appContext"


export const Navbar = () => {
	const { store, actions } = useContext{ Context };

	return (
		<nav className="navbar navbar-light bg-light mb3">
			<div class="dropdown">
				<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((favorite) => (
						<li>
							<span>{favorite.nam}</span>
							<FaTrash onClick={() => actions.toggleFavorite(
								favorite.id,
								favorite.type,
								favorite.name,)}/>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
