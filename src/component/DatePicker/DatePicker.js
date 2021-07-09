import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const DatePicker = ({ handleChange, i, obj }) => {
	const classes = useStyles();

	return (
		<form className={classes.container} noValidate>
			<TextField
				id='date'
				variant='outlined'
				type='date'
				name='date'
				value={obj.date}
				onChange={(e) => handleChange(e, i)}
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</form>
	);
};
export default DatePicker;
