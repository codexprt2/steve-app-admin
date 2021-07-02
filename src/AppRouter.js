import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./Screens/Dashboard";
import ProjectSetting from "./component/ProjectSetting";

function AppRouter() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/login' component={Login} />
				<Route exact path='/projectSetting' component={ProjectSetting} />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRouter;
