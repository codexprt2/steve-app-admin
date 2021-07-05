import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import GridInput from "../GridInput";
import { connect } from "react-redux";
import { addProjectSettingValue } from "../../redux/projectSetting/action";

const ProjectSetting = ({ addProjectSettingData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [skills, setSkills] = useState([]);
	const [item, setItem] = useState({
		firstName: "",
		lastName: "",
		profileLabel: "",
		profileImage: "",
	});
	const handleInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
		console.log(item);
	};
	const handleSkillsChange = (e, index) => {
		const skillsData = [...skills];
		skillsData[index] = e.target.value;
		setSkills(skillsData);
	};

	const handleAdd = () => {
		setSkills([...skills, ""]);
	};

	const onEditHandle = () => {
		setIsOpen(false);
		setIsEdit(false);
	};
	const handleEdit = () => {
		setIsEdit(true);
	};
	const handleSubmit = () => {
		item.headingSkills = skills;
		addProjectSettingData(item);
	};

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
						label='First name'
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
						label='Last name'
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
						label='Profile Label'
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
						label='Profile Image'
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
							label='Heading Skills '
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

const mapDispatchToProps = (dispatch) => {
	return {
		addProjectSettingData: (val) => dispatch(addProjectSettingValue(val)),
	};
};
export default connect(null, mapDispatchToProps)(ProjectSetting);
