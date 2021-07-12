import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddButton from "../Button/AddButton";
import { connect } from "react-redux";

const ProjectCategory = ({ projectCategory }) => {
	const [projectCategories, setProjectCategories] = useState([]);

	const handleCategoryChange = (e, index) => {
		const categoryData = [...projectCategories];
		categoryData[index] = e.target.value;
		setProjectCategories(categoryData);
	};
	const handleAdd = () => {
		setProjectCategories([...projectCategories, ""]);
	};

	useEffect(() => {
		setProjectCategories(projectCategory.category);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Project Category
			</Typography>
			<Grid container spacing={3}>
				{projectCategories.map((obj, i) => (
					<Grid item xs={12} key={`${i}`}>
						<TextField
							required
							variant='outlined'
							autoComplete='shipping address-line1'
							onChange={(e) => handleCategoryChange(e, i)}
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
	console.log("store", store.projectCategory);
	return {
		projectCategory: store.projectCategory,
	};
};
export default connect(mapStateToProps, null)(ProjectCategory);
