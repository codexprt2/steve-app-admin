import * as types from "./types";

const defaultState = {
	firstName: "",
	lastName: "",
	profileImage: "",
	profileLabel: "",
	headingSkills: [],
	socialMediaLinks: [],
};
const projectSettingReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_PROJECTSETTING_LOADER: {
			return {
				...state,
				loading: action.payload,
			};
		}
		case types.SET_PROJECTSETTING: {
			return {
				...action.payload,
			};
		}
		// case types.ADD_PROJECTSETTING: {
		// 	return {
		// 		...state,
		// 		...action.payload,
		// 	};
		// }
		// case types.UPDATE_PROJECTSETTING: {
		// 	console.log("action.payload!!!", action.payload);

		// 	return {
		// 		...state,
		// 		...action.payload,
		// 	};
		// }
		default: {
			return state;
		}
	}
};
export default projectSettingReducer;
