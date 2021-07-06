import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { connect } from "react-redux";
import { updateProjectSettingValue } from "../../redux/projectSetting/action";

const ProjectSetting = ({
	addProjectSettingData,
	projectSetting,
	updateProjectSettingData,
}) => {
	const [skills, setSkills] = useState([]);
	const [item, setItem] = useState({
		firstName: "",
		lastName: "",
		profileLabel: "",
		profileImage: "",
		id: "",
	});

	const handleInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};
	const handleSkillsChange = (e, index) => {
		const skillsData = [...skills];
		skillsData[index] = e.target.value;
		setSkills(skillsData);
	};

	const handleAdd = () => {
		setSkills([...skills, ""]);
	};

	const handleSubmit = () => {
		item.headingSkills = skills;
		updateProjectSettingData(item);
	};

	useEffect(() => {
		setItem({
			firstName: projectSetting.firstName,
			lastName: projectSetting.lastName,
			profileLabel: projectSetting.profileLabel,
			profileImage: projectSetting.profileImage,
			id: projectSetting.id,
		});
		setSkills(projectSetting.headingSkills);
	}, [projectSetting]);

	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Project Setting
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='firstName'
						name='firstName'
						fullWidth
						autoComplete='given-name'
						onChange={handleInputChange}
						value={item.firstName}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='lastName'
						name='lastName'
						fullWidth
						autoComplete='family-name'
						onChange={handleInputChange}
						value={item.lastName}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='profileLabel'
						name='profileLabel'
						fullWidth
						autoComplete='family-name'
						onChange={handleInputChange}
						value={item.profileLabel}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='profileImage'
						name='profileImage'
						fullWidth
						autoComplete='family-name'
						onChange={handleInputChange}
						value={item.profileImage}
					/>
				</Grid>

				{skills.map((obj, i) => (
					<Grid item xs={6} key={`${i}`}>
						<TextField
							required
							fullWidth
							autoComplete='shipping address-line1'
							onChange={(e) => handleSkillsChange(e, i)}
							value={obj}
						/>
					</Grid>
				))}

				<Grid item xs={12}>
					<Button onClick={handleAdd}>
						<Fab color='primary' aria-label='add' size='small'>
							<AddIcon />
						</Fab>
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained' color='primary' onClick={handleSubmit}>
						Submit
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
const mapStateToProps = (store) => {
	console.log("projectSettingReducer", store.projectSettingReducer[0]);
	return {
		projectSetting: store.projectSettingReducer[0],
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// addProjectSettingData: (val) => dispatch(addProjectSettingValue(val)),
		updateProjectSettingData: (val) => dispatch(updateProjectSettingValue(val)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSetting);
