import * as types from "./types";

const defaultState = {
	projectSetting: {
		firstName: "",
		lastName: "",
		profileImage: "",
		profileLabel: "",
		headingSkills: [],
		socialMediaLink: [],
		loading: false,
	},
};
const projectSettingReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_PROJECTSETTING_LOADER: {
			return {
				projectSetting: {
					...state.projectSetting,
					loading: action.payload,
				},
			};
		}
		// case types.SET_PROJECTSETTING: {
		// 	console.log("action.payload", action.payload);
		// 	return {
		// 		projectSetting: {
		// 			...state.projectSetting,
		// 			projectSetting: { ...action.payload },
		// 		},
		// 	};
		// }
		case types.ADD_PROJECTSETTING: {
			console.log("action.payload", action.payload);
			return {
				projectSetting: {
					...state.projectSetting,

					projectSetting: {
						firstName: action.payload.firstName,
						lastName: action.payload.lastName,
						profileImage: action.payload.profileImage,
						profileLabel: action.payload.profileLabel,
						loading: action.payload.loading,
						headingSkills: [...action.payload.headingSkills],
					},
				},
			};
		}
		default: {
			return state;
		}
	}
};
export default projectSettingReducer;
