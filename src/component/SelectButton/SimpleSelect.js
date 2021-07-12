import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 350,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const SimpleSelect = ({ projectCategory, setProjectCategory }) => {
	const classes = useStyles();
	const [category, setCategory] = useState([]);
	const [option, setOption] = useState("");

	const handleChange = (event) => {
		console.log("`````", event.target.value);
		setOption(event.target.value);
		setProjectCategory(event.target.value);
	};
	useEffect(() => {
		setCategory(projectCategory);
	}, [projectCategory]);
	console.log("projectCategory", category);

	return (
		<div>
			<FormControl variant='outlined' className={classes.formControl}>
				<InputLabel id='demo-simple-select-outlined-label'>
					ProjectCategory
				</InputLabel>
				<Select
					labelId='demo-simple-select-outlined-label'
					id='demo-simple-select-outlined'
					value={option}
					onChange={handleChange}
					label='ProjectCategory'>
					{category.map((obj, i) => (
						<MenuItem value={obj} key={`${i}`}>
							{obj}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
const mapStateToProps = (store) => {
	return {
		projectCategory: store.projectCategory.category,
	};
};
export default connect(mapStateToProps, null)(SimpleSelect);
