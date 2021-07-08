import * as types from "./types";
import * as skillCategoryFirestore from "../../helper/firestoreFunctions/skillCategory";

export const setSkillCategoryLoader = (val) => {
	return {
		type: types.SET_SKILLCATEGORY_LOADER,
		payload: val,
	};
};
export const setSkillCategoryData = (val) => {
	return {
		type: types.SET_SKILLCATEGORY,
		payload: val,
	};
};
export const setSkillCategory = () => (dispatch) => {
	dispatch(setSkillCategoryLoader(true));
	skillCategoryFirestore.getSkillCategory().then((skillCategoryVal) => {
		dispatch(setSkillCategoryData(skillCategoryVal));
		dispatch(setSkillCategoryLoader(false));
	});
};
export const updateSkillCategoryValue = (skillCategory) => (dispatch) => {
	console.log("skillCategory!!!", skillCategory);
	dispatch(setSkillCategoryLoader(true));
	skillCategoryFirestore
		.editSkillCategory(skillCategory)
		.then((skillCategoryVal) => {
			dispatch(setSkillCategoryData(skillCategoryVal));
			dispatch(setSkillCategoryLoader(false));
		});
};
