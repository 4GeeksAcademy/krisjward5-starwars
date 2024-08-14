import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites ({store.favorites.length})
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
					{store.favorites.length === 0 ? (
						<li><span className="dropdown-item">(empty)</span></li>
					) : (
						store.favorites.map((favorite) => (
							<li key={favorite.uid}>
								<span className="dropdown-item">
									{favorite.name}
									<FaTrash
										className="ms-2"
										onClick={() => actions.toggleFavorite(favorite)}
										style={{ cursor: 'pointer' }}
									/>
								</span>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};