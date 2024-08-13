import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Favorites {store.favorites.length}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<ul>
						{store.favorites.map((favorite) => (
							<li key={favorite.id}>
								<span>{favorite.name}</span>
								<FaTrash
									onClick={() =>
										actions.toggleFavorite(
											favorite.id,
											favorite.type,
											favorite.name
										)
									}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};