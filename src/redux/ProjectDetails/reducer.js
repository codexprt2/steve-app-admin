import * as types from "./types";
const defaultState = {
	project: [],
};

const projectDetails = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_PROJECTDETAILS_LOADER: {
			console.log("loadder", action.payload);
			return {
				...state,
				loading: action.payload,
			};
		}
		case types.SET_PROJECTDETAILS: {
			console.log("set", action.payload);
			return {
				...action.payload,
			};
		}
		case types.ADD_PROJECTDETAILS: {
			console.log("action", action.payload);
			return {
				project: [...state.project, action.payload],
			};
		}
		default: {
			return state;
		}
	}
};
export default projectDetails;
