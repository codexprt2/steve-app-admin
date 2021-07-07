import * as types from "./types";
import * as projectSettingFirestore from "../../helper/firestoreFunctions/projectSetting";

const setProjectSettingLoader = (val) => {
	return {
		type: types.SET_PROJECTSETTING_LOADER,
		payload: val,
	};
};
const setProjectSettingData = (val) => {
	return {
		type: types.SET_PROJECTSETTING,
		payload: val,
	};
};
export const setProjectSetting = () => (dispatch) => {
	dispatch(setProjectSettingLoader(true));
	projectSettingFirestore.getProjectSetting().then((projectSettingVal) => {
		dispatch(setProjectSettingData(projectSettingVal));
		dispatch(setProjectSettingLoader(false));
	});
};

// const addProjectSettingData = (val) => {
// 	return {
// 		type: types.ADD_PROJECTSETTING,
// 		payload: val,
// 	};
// };
// export const addProjectSettingValue = (projectsetting) => (dispatch) => {
// 	dispatch(setProjectSettingLoader(true));
// 	projectSettingFirestore
// 		.addProjectSetting(projectsetting)
// 		.then((projectsettingVal) => {
// 			dispatch(setProjectSetting());
// 			dispatch(setProjectSettingLoader(false));
// 		});
// };

export const updateProjectSettingValue = (projectSetting) => (dispatch) => {
	console.log("projectSetting!!!", projectSetting);
	dispatch(setProjectSettingLoader(true));
	projectSettingFirestore
		.editProjectSetting(projectSetting)
		.then((projectSettingVal) => {
			dispatch(setProjectSettingData(projectSettingVal));
			dispatch(setProjectSettingLoader(false));
		});
};
