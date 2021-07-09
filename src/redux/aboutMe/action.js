import * as types from "./types";
import * as aboutMeFirestore from "../../helper/firestoreFunctions/aboutMe";

const setAboutMeLoader = (val) => {
	return {
		type: types.SET_ABOUTME_LOADER,
		payload: val,
	};
};
const setAboutMeData = (val) => {
	return {
		type: types.SET_ABOUTME,
		payload: val,
	};
};
export const setAboutMe = () => (dispatch) => {
	dispatch(setAboutMeLoader(true));
	aboutMeFirestore.getAboutMe().then((aboutMeVal) => {
		dispatch(setAboutMeData(aboutMeVal));
		dispatch(setAboutMeLoader(false));
	});
};
export const updateAboutMeValue = (aboutMe) => (dispatch) => {
	dispatch(setAboutMeLoader(true));
	aboutMeFirestore.editAboutMe(aboutMe).then((aboutMeVal) => {
		dispatch(setAboutMeData(aboutMeVal));
		dispatch(setAboutMeLoader(false));
	});
};
