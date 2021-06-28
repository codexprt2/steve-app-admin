import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./Screens/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
				<div className='App'>
					<Switch>
						<Route exact path='/'>
							<Login />
						</Route>
						<Route path='/dashboard'>
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</Router>
      
    </div>
  );
}

export default App;
