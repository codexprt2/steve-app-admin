import React, { useEffect } from "react";
import Dashboard from "../Screens/Dashboard";

import { connect } from "react-redux";
import { setProjectSetting } from "../redux/projectSetting/action";

const Hoc = ({ setProjectSettingData }) => {
	useEffect(() => {
		setProjectSettingData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <Dashboard />;
};

const mapDispatchToProps = (dispatch) => {
	return {
		setProjectSettingData: () => dispatch(setProjectSetting()),
	};
};
export default connect(null, mapDispatchToProps)(Hoc);
