import "./App.css";
import fire from "./firebase";
import Login from "./component/Login/Login";
import Hoc from "./Hoc";
import React, { useState, useEffect } from "react";

function App() {
	const[loading,setLoading] = useState(false)
	const [user, setUser] = useState(false);
	const [email, setEmail] = useState("zalaanjali11@gmail.com");
	const [password, setPassword] = useState("134679852");

	const handleLogout = () => {
		fire.auth().signOut();
	};
var Loader = require('react-loader');
	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((userData) => {
			console.log("usedata!!!!",userData)
			if (userData) {
				clearInputs();
				setLoading(true)
				setUser(userData);
				setLoading(false)
			} else {
				setUser(null);
			}
		});
	};

	useEffect(() => {
		
			authListener();
			setLoading(false)
			
	}, []);


	return (
		<div className='App'>
		
		
			{ user === false ? <Loader loaded={loading}/> 
			: user === null ? (
				<Login
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
				/>
			) : <Hoc />}
		</div>
	);
}

export default App;
