import * as types from "./types";
import * as projectDetailsFirestore from "../../helper/firestoreFunctions/projectDetails";

export const setProjectDetailsLoader = (val) => {
	return {
		type: types.SET_PROJECTDETAILS_LOADER,
		payload: val,
	};
};
export const setProjectDetailsData = (val) => {
	return {
		type: types.SET_PROJECTDETAILS,
		payload: val,
	};
};
export const setProjectDetails = () => (dispatch) => {
	dispatch(setProjectDetailsLoader(true));
	projectDetailsFirestore.getProjectDetails().then((projectDetailsVal) => {
		dispatch(setProjectDetailsData(projectDetailsVal));
		dispatch(setProjectDetailsLoader(false));
	});
};

const addProjectDetailsData = (val) => {
	return {
		type: types.ADD_PROJECTDETAILS,
		payload: val,
	};
};

export const addProjectDetailsValue = (projectDetails) => (dispatch) => {
	dispatch(setProjectDetailsLoader(true));
	projectDetailsFirestore
		.addProjectDetails(projectDetails)
		.then((projectDetailsVal) => {
			console.log("projectDetailsVal", projectDetailsVal);

			dispatch(addProjectDetailsData(projectDetailsVal));
			dispatch(setProjectDetailsLoader(false));
		});
};

export const updateProjectDetailsValue = (projectDetails) => (dispatch) => {
	dispatch(setProjectDetailsLoader(true));
	projectDetailsFirestore
		.editProjectDetails(projectDetails)
		.then((projectDetailsVal) => {
			dispatch(setProjectDetailsData(projectDetailsVal));
			dispatch(setProjectDetailsLoader(false));
		});
};
