import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Switches from "../Switch/Switches";
import AddButton from "../Button/AddButton";
import TeaxtFieldComponent from "../TextField/TeaxtFieldComponent";
import Button from "@material-ui/core/Button";

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

	const handleSubmit = () => {};
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				About Me
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={9}>
					<TextField
						id='outlined-multiline-static'
						label='Description'
						multiline
						rows={5}
						fullWidth
						defaultValue='Default Value'
						variant='outlined'
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h6'>About Table</Typography>
				</Grid>

				{personalInfo.map((obj, i) => (
					<>
						<Grid item xs={6} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='label'
								autoComplete='shipping address-line1'
								variant='outlined'
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
								variant='outlined'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}

				<AddButton handleAdd={handleAdd} />

				<Grid item xs={12}>
					<Typography variant='h6'>ProfessionalSkills</Typography>
				</Grid>

				{professionalSkills.map((obj, i) => (
					<Grid item xs={6} key={`${i}`}>
						<TextField
							required
							fullWidth
							placeholder='Professional Skills'
							autoComplete='shipping address-line1'
							variant='outlined'
							// onChange={(e) => handleSkillsChange(e, i)}
							// value={obj}
						/>
					</Grid>
				))}
				<AddButton handleAdd={handleProfessionalSkills} />

				<Grid item xs={12}>
					<Typography variant='h6'>Experience</Typography>
				</Grid>

				{experience.map((obj, i) => (
					<>
						<TeaxtFieldComponent i={i} obj={obj} xs={6} md={3} />

						<Grid item xs={6} md={3}>
							<Switches />
						</Grid>
					</>
				))}

				<AddButton handleAdd={handleExperience} />

				<Grid item xs={12}>
					<Typography variant='h6'>Education</Typography>
				</Grid>

				{education.map((obj, i) => (
					<>
						<TeaxtFieldComponent i={i} obj={obj} xs={6} md={4} />
					</>
				))}
				<AddButton handleAdd={handleEducation} />

				<Grid item xs={12}>
					<Typography variant='h6'>Services</Typography>
				</Grid>

				{services.map((obj, i) => (
					<>
						<TeaxtFieldComponent i={i} obj={obj} xs={6} md={4} />
					</>
				))}
				<AddButton handleAdd={handleServices} />

				<Grid item xs={12}>
					<Typography variant='h6'>Testimonials</Typography>
				</Grid>

				{testimonials.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='image'
								type='file'
								autoComplete='shipping address-line1'
								variant='outlined'
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
								variant='outlined'
								// onChange={(e) => handleSkillsChange(e, i)}
								// value={obj}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleTestimonials} />

				<Grid item xs={6}>
					<Button variant='contained' color='primary' onClick={handleSubmit}>
						Submit
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default AboutMe;
