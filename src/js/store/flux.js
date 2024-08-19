const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
		},
		actions: {

			 addFavorites: (item) => {
                const store = getStore();
                if (!store.favorites.includes(item)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            deleteFavorites: (item) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter((x) => x !== item) });
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
export default getState;