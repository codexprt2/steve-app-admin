import React from "react";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const AddButton = ({ handleAdd }) => {
	return (
		<>
			<Grid item xs={6} sm={12}>
				<Button onClick={handleAdd}>
					<Fab color='primary' aria-label='add' size='small'>
						<AddIcon />
					</Fab>
				</Button>
			</Grid>
		</>
	);
};

export default AddButton;
