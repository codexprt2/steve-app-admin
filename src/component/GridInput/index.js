import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Input } from "@material-ui/core";
import { IoMdDoneAll } from "react-icons/io";
import { connect } from "react-redux";
import { addProjectSettingValue } from "../../redux/projectSetting/action";

const GridInput = ({ onEditHandle, addProjectSettingData }) => {
	const [item, setItem] = useState([]);

	const handleClick = () => {
		onEditHandle(item);
	};
	const handleInputChange = (e) => {
		setItem({ ...item.headingSkills, [e.target.name]: e.target.value });
		console.log(item);
	};

	return (
		<>
			<Grid item xs={3}>
				<TextField
					required
					id='headingSkills'
					name='headingSkills'
					label='Heading Skills '
					fullWidth
					autoComplete='shipping address-line1'
					onChange={handleInputChange}
				/>
			</Grid>

			<Button onClick={handleClick}>
				<IoMdDoneAll />
			</Button>
		</>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addProjectSettingData: (val) => dispatch(addProjectSettingValue(val)),
	};
};
export default connect(null, mapDispatchToProps)(GridInput);
