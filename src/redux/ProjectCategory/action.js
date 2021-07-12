import * as types from "./types";
import * as projectCategoryFirestore from "../../helper/firestoreFunctions/projectCategory";

export const setProjectCategoryLoader = (val) => {
	return {
		type: types.SET_PROJECTCATEGORY_LOADER,
		payload: val,
	};
};
export const setProjectCategoryData = (val) => {
	return {
		type: types.SET_PROJECTCATEGORY,
		payload: val,
	};
};
export const setProjectCategory = () => (dispatch) => {
	dispatch(setProjectCategoryLoader(true));
	projectCategoryFirestore.getProjectCategory().then((projectCategoryVal) => {
		dispatch(setProjectCategoryData(projectCategoryVal));
		dispatch(setProjectCategoryLoader(false));
	});
};
export const updateProjectCategoryValue = (projectCategory) => (dispatch) => {
	dispatch(setProjectCategoryLoader(true));
	projectCategoryFirestore
		.editProjectCategory(projectCategory)
		.then((projectCategoryVal) => {
			dispatch(setProjectCategoryData(projectCategoryVal));
			dispatch(setProjectCategoryLoader(false));
		});
};
