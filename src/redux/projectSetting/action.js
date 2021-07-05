import * as types from "./types";
import * as projectSettingFirestore from "../../helper/firestoreFunctions/projectSetting";

const setProjectSettingLoader = (val) => {
	return {
		type: types.SET_PROJECTSETTING_LOADER,
		payload: val,
	};
};
const setProjectSettingData = (val) => {
	console.log("val", val);
	return {
		type: types.SET_PROJECTSETTING,
		payload: val,
	};
};
export const setProjectSetting = () => (dispatch) => {
	dispatch(setProjectSettingLoader(true));
	projectSettingFirestore.addProjectSetting().then((projectSettingVal) => {
		console.log("categoryval", projectSettingVal);
		dispatch(setProjectSettingData(projectSettingVal));
		dispatch(setProjectSettingLoader(false));
	});
};

const addProjectSettingData = (val) => {
	return {
		type: types.ADD_PROJECTSETTING,
		payload: val,
	};
};
export const addProjectSettingValue = (projectsetting) => (dispatch) => {
	dispatch(setProjectSettingLoader(true));
	projectSettingFirestore
		.addProjectSetting(projectsetting)
		.then((projectsettingVal) => {
			console.log("projectsettingVal", projectsettingVal);

			dispatch(addProjectSettingData(projectsettingVal));
			dispatch(setProjectSettingLoader(false));
		});
};
