import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import SimpleSelect from "../SelectButton/SimpleSelect";
import { addProjectDetailsValue } from "../../redux/ProjectDetails/action";

const ProjectModal = ({ addProjectDetailsData }) => {
	const [item, setItem] = useState({
		title: "",
		description: "",
		job: "",
		client: "",
		agency: "",
		year: "",
		// projectCategory: "",
	});

	const handleChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};
	const setProjectCategory = (val) => {
		setItem({ ...item, projectCategory: val });
	};
	console.log("item", item);
	const handleSubmit = () => {
		addProjectDetailsData(item);
	};
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Add Project Details
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						id='outlined-multiline-static'
						label='Title'
						multiline
						fullWidth
						name='title'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						// value={item.description}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<SimpleSelect setProjectCategory={setProjectCategory} />
				</Grid>
				<Grid item xs={12} md={12}>
					<TextField
						id='outlined-multiline-static'
						label='Description'
						multiline
						fullWidth
						rows={4}
						name='description'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						// value={item.description}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id='outlined-multiline-static'
						label='Job'
						multiline
						fullWidth
						name='job'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						// value={item.description}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id='outlined-multiline-static'
						label='Client'
						multiline
						fullWidth
						name='client'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						// value={item.description}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id='outlined-multiline-static'
						label='Year'
						multiline
						fullWidth
						name='year'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						// value={item.description}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id='outlined-multiline-static'
						label='Agency'
						multiline
						fullWidth
						name='agency'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						// value={item.description}
					/>
				</Grid>

				<Grid item xs={12} justify='center'>
					<center>
						<Button
							size='small'
							type='Submit'
							variant='contained'
							color='primary'
							onClick={handleSubmit}>
							Submit
						</Button>
					</center>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProjectDetailsData: (val) => dispatch(addProjectDetailsValue(val)),
	};
};

export default connect(null, mapDispatchToProps)(ProjectModal);
