import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

const AppItems = ({ onHandleSearch }) => {
	return (
		<div>
			<ListItem button onClick={() => onHandleSearch("projectSetting")}>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary='Project Setting' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("about")}>
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary='About' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("portfolio")}>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary='PORTFOLIO' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("blog")}>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary='Blog' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("contact")}>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary='Contact' />
			</ListItem>
		</div>
	);
};
export default AppItems;