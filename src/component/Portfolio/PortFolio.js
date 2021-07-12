import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Table from "../Table/BasicTable";
import SimpleModal from "../Modal/SimpleModal";

const PortFolio = () => {
	return (
		<React.Fragment>
			<div style={{ display: "flex", flexDirection: "row-reverse" }}>
				<SimpleModal />
			</div>
			<Typography variant='h6' gutterBottom>
				PortFolio
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={10} md={12}>
					<Table />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default PortFolio;
