import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddButton from "../Button/AddButton";

const AboutMe = () => {
	const [personalInfo, setPersonalInfo] = useState([
		{ label: "name", value: "Yogitaba" },
	]);
	const [professionalSkills, setProfessionalSkills] = useState([""]);
	const [experience, setExperience] = useState([
		{ title: "", date: "", des: "" },
	]);
	const [education, setEducation] = useState([
		{ title: "", date: "", des: "" },
	]);
	const [services, setServices] = useState([{ title: "", icon: "", des: "" }]);
	const [testimonials, setTestimonials] = useState([{ image: "", des: "" }]);

	const handleAdd = () => {
		setPersonalInfo([...personalInfo, { label: "", value: "" }]);
	};
	const handleProfessionalSkills = () => {
		setProfessionalSkills([...professionalSkills, ""]);
	};
	const handleExperience = () => {
		setExperience([...experience, { title: "", date: "", des: "" }]);
	};
	const handleEducation = () => {
		setEducation([...education, { title: "", date: "", des: "" }]);
	};
	const handleServices = () => {
		setServices([...services, { title: "", icon: "", des: "" }]);
	};
	const handleTestimonials = () => {
		setTestimonials([...testimonials, { image: "", des: "" }]);
	};
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				About Me
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12}>
					<TextField
						id='outlined-multiline-static'
						label='Description'
						multiline
						rows={10}
						fullWidth
						defaultValue='Default Value'
						variant='outlined'
					/>
				</Grid>
				{personalInfo.map((obj, i) => (
					<>
						<Grid item xs={6} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='label'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='value'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleAdd} />

				{professionalSkills.map((obj, i) => (
					<Grid item xs={6} key={`${i}`}>
						<TextField
							required
							fullWidth
							placeholder='Professional Skills'
							autoComplete='shipping address-line1'
							// onChange={(e) => handleSkillsChange(e, i)}
							// value={obj}
						/>
					</Grid>
				))}
				<AddButton handleAdd={handleProfessionalSkills} />

				{experience.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='experience Title'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='date'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='description'
								rows={4}
								autoComplete='shipping address-line1'

								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleExperience} />

				{education.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='education Title'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='date'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='description'
								rows={4}
								autoComplete='shipping address-line1'

								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleEducation} />

				{services.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='services'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='icon'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='description'
								rows={4}
								autoComplete='shipping address-line1'

								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleServices} />

				{testimonials.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='image'
								type='file'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='description'
								autoComplete='shipping address-line1'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleTestimonials} />
			</Grid>
		</React.Fragment>
	);
};

export default AboutMe;
