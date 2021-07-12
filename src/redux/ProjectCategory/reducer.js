import * as types from "./types";
const defaultState = {
	projectCategories: [],
};

const projectCategory = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_PROJECTCATEGORY_LOADER: {
			return {
				...state,
				loading: action.payload,
			};
		}
		case types.SET_PROJECTCATEGORY: {
			return {
				...action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export default projectCategory;
