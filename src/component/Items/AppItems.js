import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

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
				<ListItemText primary='About Me' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("SkillCategory")}>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary='Skill Category' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("PortFolio")}>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary='PortFolio' />
			</ListItem>
			<ListItem button onClick={() => onHandleSearch("ProjectCategory")}>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary='Project Category' />
			</ListItem>
		</div>
	);
};
export default AppItems;
