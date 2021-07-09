import * as types from "./types";

const defaultState = {
	description: "",
	personalInfo: [{}],
	professionalSkills: [{}],
	experience: [{}],
	education: [{}],
	services: [{}],
	testimonials: [{ name: "", position: "", image: "", des: "" }],
	certificats: [{ title: "", certificatsId: "", date: "", link: "" }],
};

const aboutMe = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_ABOUTME_LOADER: {
			return {
				...state,
				loading: action.payload,
			};
		}
		case types.SET_ABOUTME: {
			return {
				...action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
export default aboutMe;
