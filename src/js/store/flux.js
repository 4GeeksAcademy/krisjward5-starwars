const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
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

		}
	};
}
export default getState