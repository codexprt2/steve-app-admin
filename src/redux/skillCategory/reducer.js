import * as types from "./types";
const defaultState = {
	skillCategories: [],
};
const skillCategory = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_SKILLCATEGORY_LOADER: {
			return {
				...state,
				loading: action.payload,
			};
		}
		case types.SET_SKILLCATEGORY: {
			console.log("action.payload!!!!", action.payload);
			return {
				...action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export default skillCategory;
