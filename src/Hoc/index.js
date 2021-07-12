import React, { useEffect } from "react";
import Dashboard from "../Screens/Dashboard";

import { connect } from "react-redux";
import { setProjectSetting } from "../redux/projectSetting/action";
import { setSkillCategory } from "../redux/skillCategory/action";
import { setAboutMe } from "../redux/aboutMe/action";
import { setProjectCategory } from "../redux/ProjectCategory/action";

const Hoc = ({
	setProjectSettingData,
	setSkillCategoryData,
	setAboutMeData,
	setProjectCategoryData,
}) => {
	useEffect(() => {
		setProjectSettingData();
		setSkillCategoryData();
		setAboutMeData();
		setProjectCategoryData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <Dashboard />;
};

const mapDispatchToProps = (dispatch) => {
	return {
		setProjectSettingData: () => dispatch(setProjectSetting()),
		setSkillCategoryData: () => dispatch(setSkillCategory()),
		setAboutMeData: () => dispatch(setAboutMe()),
		setProjectCategoryData: () => dispatch(setProjectCategory()),
	};
};
export default connect(null, mapDispatchToProps)(Hoc);
