import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddButton from "../Button/AddButton";
import { connect } from "react-redux";

const SkillCategory = ({ skillCategory }) => {
	const [skills, setSkills] = useState([]);

	const handleSkillsChange = (e, index) => {
		const skillsData = [...skills];
		skillsData[index] = e.target.value;
		setSkills(skillsData);
	};
	const handleAdd = () => {
		setSkills([...skills, ""]);
	};

	useEffect(() => {
		setSkills(skillCategory.category);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Skill Category
			</Typography>
			<Grid container spacing={3}>
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
				<AddButton handleAdd={handleAdd} />
			</Grid>
		</React.Fragment>
	);
};
const mapStateToProps = (store) => {
	console.log("store", store.skillCategory);
	return {
		skillCategory: store.skillCategory,
	};
};
export default connect(mapStateToProps, null)(SkillCategory);
