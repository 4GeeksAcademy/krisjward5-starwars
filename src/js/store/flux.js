const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: []
		},
		actions: {
			fetchCharacters: () => {
				fetch('https://www.swapi.tech/api/people?limit=100')
					.then(res => res.json())
					.then((payload) => {
						setStore({ characters: payload.results })
					})
					.catch((err) => console.error(err))
			},
			toggleFavorite: (character) => {
				const store = getStore();
				const favorites = [...store.favorites];
				const index = favorites.findIndex(fav => fav.uid === character.uid);
				
				if (index === -1) {
					favorites.push(character);
				} else {
					favorites.splice(index, 1);
				}
				
				setStore({ favorites });
			}
		}
	};
}
export default getState