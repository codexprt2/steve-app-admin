import React from "react";
import NavBar from "../component/NavBar";

const Dashboard = ({ handleLogout }) => {
	return (
		<div>
			<NavBar handleLogout={handleLogout} />
		</div>
	);
};

export default Dashboard;
