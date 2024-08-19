import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export default function FavoritesDropdown() {
    const { store, actions } = useContext(Context);

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites ({store.favorites.length})
            </button>
            <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
                {store.favorites.map((item, index) => (
                    <li key={index}>
                        <span className="dropdown-item">{item}
                            <button className="btn btn-sm btn-danger ms-2" onClick={() => actions.deleteFavorites(item)}>X</button>
                        </span>
                    </li>
                ))}
                {store.favorites.length === 0 && <li><span className="dropdown-item">No favorites yet</span></li>}
            </ul>
        </div>
    );
}