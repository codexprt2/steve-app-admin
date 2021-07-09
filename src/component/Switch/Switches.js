import React, { useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Switches = ({ setIsActive }) => {
	const [state, setState] = React.useState(false);

	const handleChange = (event) => {
		setState(!state);
	};
	useEffect(() => {
		setIsActive(state);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state]);
	return (
		<FormGroup row>
			<FormControlLabel
				control={
					<Switch
						checked={state}
						onChange={handleChange}
						name='isActive'
						color='primary'
					/>
				}
				label='Current'
			/>
		</FormGroup>
	);
};

export default Switches;
