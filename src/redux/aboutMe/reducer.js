import * as types from "./types";

const defaultState = {
	description: "",
	personalInfo: [{ label: "name", value: "yogitaba" }],
	professionalSkills: [],
	experience: [{ title: "", date: "", des: "", isActive: false }],
	education: [{ title: "", date: "", des: "" }],
	services: [{ title: "", icon: "", des: "" }],
	testimonials: [{ name: "", position: "", image: "", des: "" }],
	certificats: [{ title: "", id: "", date: "", link: "" }],
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
export default aboutMe;
