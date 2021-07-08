import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const TeaxtFieldComponent = ({ i, obj, xs, md }) => {
	return (
		<React.Fragment>
			<Grid item xs={xs} md={md}>
				<TextField
					required
					fullWidth
					placeholder='experience Title'
					autoComplete='shipping address-line1'
					variant='outlined'
					// onChange={(e) => handleSkillsChange(e, i)}
					// value={obj}
				/>
			</Grid>
			<Grid item xs={xs} md={md}>
				<TextField
					required
					fullWidth
					placeholder='date'
					autoComplete='shipping address-line1'
					variant='outlined'
					// onChange={(e) => handleSkillsChange(e, i)}
					// value={obj}
				/>
			</Grid>
			<Grid item xs={12} md={7}>
				<TextField
					required
					fullWidth
					placeholder='description'
					rows={4}
					autoComplete='shipping address-line1'
					variant='outlined'

					// onChange={(e) => handleSkillsChange(e, i)}
					// value={obj}
				/>
			</Grid>
		</React.Fragment>
	);
};

export default TeaxtFieldComponent;
