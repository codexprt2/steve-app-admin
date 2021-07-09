import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Switches from "../Switch/Switches";
import AddButton from "../Button/AddButton";
import TeaxtFieldComponent from "../TextField/TeaxtFieldComponent";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { updateAboutMeValue } from "../../redux/aboutMe/action";
import DatePicker from "../DatePicker/DatePicker";

const AboutMe = ({ updateAboutMeData, aboutMe }) => {
	const [item, setItem] = useState({
		description: "",
		id: "",
	});

	const [info, setInfo] = useState([]);

	const [skills, setSkills] = useState([]);
	const [experience, setExperience] = useState([
		{ title: "", date: "", description: "", isActive: false },
	]);
	const [education, setEducation] = useState([
		{ title: "", description: "", date: "" },
	]);
	const [services, setServices] = useState([
		{ title: "", description: "", date: "" },
	]);
	const [testimonials, setTestimonials] = useState([
		{ name: "", position: "", image: "", des: "" },
	]);
	const [certificats, setCertificats] = useState([
		{ title: "", certificatsId: "", date: "", link: "" },
	]);

	const handleDescription = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};

	const handleChangePersonalInfo = (e, index) => {
		const personalInfoData = [...info];
		personalInfoData[index][e.target.name] = e.target.value;

		setInfo(personalInfoData);
	};
	const handleAdd = () => {
		setInfo([...info, { label: "", value: "" }]);
	};
	const handleSkillsChange = (e, index) => {
		const skillsData = [...skills];
		skillsData[index] = e.target.value;

		setSkills(skillsData);
	};
	const handleProfessionalSkills = () => {
		setSkills([...skills, ""]);
	};
	const handleExperienceChange = (e, index) => {
		const experienceData = [...experience];
		experienceData[index][e.target.name] = e.target.value;
		setExperience(experienceData);
	};
	const handleExperience = () => {
		setExperience([
			...experience,
			{ title: "", date: "", description: "", isActive: false },
		]);
	};
	const handleEducationChange = (e, index) => {
		const educationData = [...education];
		educationData[index][e.target.name] = e.target.value;
		setEducation(educationData);
	};
	const handleEducation = () => {
		setEducation([...education, { title: "", description: "", date: "" }]);
	};

	const handleServicesChange = (e, index) => {
		const servicesData = [...services];
		servicesData[index][e.target.name] = e.target.value;
		setServices(servicesData);
	};
	const handleServices = () => {
		setServices([...services, { title: "", description: "", date: "" }]);
	};

	const handleTestimonialsChange = (e, index) => {
		const testimonialsData = [...testimonials];
		testimonialsData[index][e.target.name] = e.target.value;
		setTestimonials(testimonialsData);
	};

	const handleTestimonials = () => {
		setTestimonials([
			...testimonials,
			{ name: "", position: "", image: "", des: "" },
		]);
	};
	const setIsActive = (val) => {
		const newExp = experience.map((obj) => ({
			...obj,
			isActive: val,
		}));

		setExperience(newExp);
	};
	const handleCertificatsChange = (e, index) => {
		const certificatsData = [...certificats];
		certificatsData[index][e.target.name] = e.target.value;
		setCertificats(certificatsData);
	};
	const handleCertificats = () => {
		setCertificats([
			...certificats,
			{ title: "", certificatsId: "", date: "", link: "" },
		]);
	};
	const handleSubmit = () => {
		item.personalInfo = info;
		item.professionalSkills = skills;
		item.experience = experience;
		item.education = education;
		item.services = services;
		item.testimonials = testimonials;
		item.certificats = certificats;
		updateAboutMeData(item);
	};
	useEffect(() => {
		setItem({ description: aboutMe.description, id: aboutMe.id });
		setInfo(aboutMe.personalInfo);
		setSkills(aboutMe.professionalSkills);
		setExperience(aboutMe.experience);
		setEducation(aboutMe.education);
		setServices(aboutMe.services);
		setTestimonials(aboutMe.testimonials);
		setCertificats(aboutMe.certificats);
	}, [aboutMe]);

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
						name='description'
						variant='outlined'
						onChange={(e) => handleDescription(e)}
						value={item.description}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h6'>About Table</Typography>
				</Grid>

				{info.map((obj, i) => (
					<>
						<Grid item xs={6} key='1'>
							<TextField
								required
								fullWidth
								name='label'
								placeholder='label'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleChangePersonalInfo(e, i)}
								value={obj.label}
							/>
						</Grid>
						<Grid item xs={6} key='2'>
							<TextField
								required
								fullWidth
								name='value'
								placeholder='value'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleChangePersonalInfo(e, i)}
								value={obj.value}
							/>
						</Grid>
					</>
				))}

				<AddButton handleAdd={handleAdd} />

				<Grid item xs={12}>
					<Typography variant='h6'>ProfessionalSkills</Typography>
				</Grid>

				{skills.map((obj, i) => (
					<Grid item xs={6}>
						<TextField
							required
							fullWidth
							name='skill'
							placeholder='Professional Skills'
							autoComplete='shipping address-line1'
							variant='outlined'
							onChange={(e) => handleSkillsChange(e, i)}
							value={obj}
						/>
					</Grid>
				))}
				<AddButton handleAdd={handleProfessionalSkills} />

				<Grid item xs={12}>
					<Typography variant='h6'>Experience</Typography>
				</Grid>

				{experience.map((obj, i) => (
					<>
						<TeaxtFieldComponent
							i={i}
							obj={obj}
							xs={6}
							md={3}
							handleChange={(e) => handleExperienceChange(e, i)}
						/>

						<Grid item xs={6} md={3}>
							<Switches isActive={obj.isActive} setIsActive={setIsActive} />
						</Grid>
					</>
				))}

				<AddButton handleAdd={handleExperience} />

				<Grid item xs={12}>
					<Typography variant='h6'>Education</Typography>
				</Grid>

				{education.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key='1'>
							<TextField
								required
								fullWidth
								name='title'
								placeholder='Title'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleEducationChange(e, i)}
								value={obj.title}
							/>
						</Grid>
						<Grid item xs={6} md={4} key='3'>
							<DatePicker
								obj={obj}
								handleChange={(e) => handleEducationChange(e, i)}
							/>
						</Grid>
						<Grid item xs={12} md={7} key='2'>
							<TextField
								required
								fullWidth
								name='description'
								placeholder='description'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleEducationChange(e, i)}
								value={obj.description}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleEducation} />

				<Grid item xs={12}>
					<Typography variant='h6'>Services</Typography>
				</Grid>

				{services.map((obj, i) => (
					<>
						<TeaxtFieldComponent
							i={i}
							obj={obj}
							xs={6}
							md={4}
							handleChange={(e) => handleServicesChange(e, i)}
						/>
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
								name='image'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleTestimonialsChange(e, i)}
								// value={obj.image}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='position'
								name='position'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleTestimonialsChange(e, i)}
								value={obj.position}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='description'
								name='des'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleTestimonialsChange(e, i)}
								value={obj.des}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='name'
								name='name'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleTestimonialsChange(e, i)}
								value={obj.name}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleTestimonials} />

				<Grid item xs={12}>
					<Typography variant='h6'>Certificats</Typography>
				</Grid>
				{certificats.map((obj, i) => (
					<>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='title'
								name='title'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleCertificatsChange(e, i)}
								value={obj.title}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='certificatsId'
								name='certificatsId'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleCertificatsChange(e, i)}
								value={obj.certificatsId}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='date'
								name='date'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleCertificatsChange(e, i)}
								value={obj.date}
							/>
						</Grid>
						<Grid item xs={6} md={4} key={`${i}`}>
							<TextField
								required
								fullWidth
								placeholder='link'
								name='link'
								autoComplete='shipping address-line1'
								variant='outlined'
								onChange={(e) => handleCertificatsChange(e, i)}
								value={obj.link}
							/>
						</Grid>
					</>
				))}
				<AddButton handleAdd={handleCertificats} />

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
	return {
		aboutMe: store.aboutMe,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateAboutMeData: (val) => dispatch(updateAboutMeValue(val)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
