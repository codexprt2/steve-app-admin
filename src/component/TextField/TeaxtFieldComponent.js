import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const TeaxtFieldComponent = ({ i, obj, xs, md, handleChange }) => {
	return (
		<React.Fragment>
			<Grid item xs={xs} md={md} key='1'>
				<TextField
					required
					fullWidth
					name='title'
					placeholder='Title'
					autoComplete='shipping address-line1'
					variant='outlined'
					onChange={(e) => handleChange(e, i)}
					value={obj.title}
				/>
			</Grid>
			<Grid item xs={xs} md={md} key='2'>
				<TextField
					required
					fullWidth
					name='date'
					placeholder='date'
					autoComplete='shipping address-line1'
					variant='outlined'
					onChange={(e) => handleChange(e, i)}
					value={obj.date}
				/>
			</Grid>
			<Grid item xs={12} md={7} key='3'>
				<TextField
					required
					fullWidth
					name='description'
					placeholder='description'
					rows={4}
					autoComplete='shipping address-line1'
					variant='outlined'
					onChange={(e) => handleChange(e, i)}
					value={obj.description}
				/>
			</Grid>
		</React.Fragment>
	);
};

export default TeaxtFieldComponent;
