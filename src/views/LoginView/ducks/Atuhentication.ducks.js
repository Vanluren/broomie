
const DEFAULT_STATE = {
	isLoggedIn: false,
	isFetchingUser: false,
	userData: null,
};

//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		default:
			return state;
	}
};

export default reducer;