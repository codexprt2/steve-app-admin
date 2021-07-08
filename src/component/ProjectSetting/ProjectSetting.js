import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { storageRef } from "../../firebase";
import { connect } from "react-redux";
import { updateProjectSettingValue } from "../../redux/projectSetting/action";

const ProjectSetting = ({ projectSetting, updateProjectSettingData }) => {
	const [skills, setSkills] = useState([]);
	const [socialLinks, setSocialLinks] = useState([]);

	const [file, setFile] = useState(null);
	const [url, setURL] = useState("");
	const [item, setItem] = useState({
		firstName: "",
		lastName: "",
		profileLabel: "",
		id: "",
	});

	const handleInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};
	const handleUpload = (e) => {
		e.preventDefault();

		const ref = storageRef.ref(`/images/${file.name}`);
		const uploadTask = ref.put(file);

		uploadTask.on("state_changed", console.log, console.error, () => {
			ref.getDownloadURL().then((url) => {
				setFile(null);
				setURL(url);
			});
		});
	};

	const handleSkillsChange = (e, index) => {
		const skillsData = [...skills];
		skillsData[index] = e.target.value;
		setSkills(skillsData);
	};
	const handleLinksChange = (e, index) => {
		const linksData = [...socialLinks];
		linksData[index][e.target.name] = e.target.value;

		setSocialLinks(linksData);
		console.log("linksData", linksData);
	};

	const handleAdd = () => {
		setSkills([...skills, ""]);
	};
	const handleAddLink = () => {
		setSocialLinks([...socialLinks, { socialMedia: "", icon: "", link: "" }]);
	};
	const handleSubmit = () => {
		item.headingSkills = skills;
		item.socialMediaLinks = socialLinks;
		item.profileImage = url;

		updateProjectSettingData(item);
		console.log("item", item);
	};

	useEffect(() => {
		setItem({
			firstName: projectSetting.firstName,
			lastName: projectSetting.lastName,
			profileLabel: projectSetting.profileLabel,
			id: projectSetting.id,
		});
		setSkills(projectSetting.headingSkills);
		setSocialLinks(projectSetting.socialMediaLinks);
		setURL(projectSetting.profileImage);
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
						variant='outlined'
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
						variant='outlined'
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
						variant='outlined'
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
							variant='outlined'
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
				{socialLinks.map((obj, i) => (
					<>
						<Grid item xs={6}>
							<TextField
								required
								fullWidth
								name='socialMedia'
								autoComplete='shipping address-line1'
								onChange={(e) => handleLinksChange(e, i)}
								value={obj.socialMedia}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								fullWidth
								name='icon'
								autoComplete='shipping address-line1'
								onChange={(e) => handleLinksChange(e, i)}
								value={obj.icon}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={6} key={`${i}`}>
							<TextField
								required
								fullWidth
								name='link'
								autoComplete='shipping address-line1'
								onChange={(e) => handleLinksChange(e, i)}
								value={obj.link}
								variant='outlined'
							/>
						</Grid>
					</>
				))}
				<Grid item xs={12}>
					<Button onClick={handleAddLink}>
						<Fab color='primary' aria-label='add' size='small'>
							<AddIcon />
						</Fab>
					</Button>
				</Grid>
				<Grid item xs={12} sm={12}>
					<div style={{ flex: "1" }}>
						<img src={url} alt='' height='50px' width='100px' />
					</div>
					<TextField
						required
						id='profileImage'
						placeholder='profileImage'
						name='profileImage'
						type='file'
						autoComplete='family-name'
						onChange={handleImageChange}
						// value={imageAsFile}
						variant='outlined'
					/>
					<Button
						size='small'
						color='primary'
						variant='outlined'
						onClick={handleUpload}>
						upload
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
	console.log("projectSettingReducer", store.projectSettingReducer);
	return {
		projectSetting: store.projectSettingReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// addProjectSettingData: (val) => dispatch(addProjectSettingValue(val)),
		updateProjectSettingData: (val) => dispatch(updateProjectSettingValue(val)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSetting);
