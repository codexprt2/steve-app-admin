import "./App.css";
import fire from "./firebase";
import Login from "./component/Login";
import Dashboard from "./Screens/Dashboard";
import React, { useState, useEffect } from "react";

function App() {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogout = () => {
		fire.auth().signOut();
	};

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser("");
			}
		});
	};

	useEffect(() => {
		authListener();
	}, []);

	return (
		<div className='App'>
			{user ? (
				<Dashboard handleLogout={handleLogout} />
			) : (
				<Login
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
				/>
			)}
		</div>
	);
}

export default App;
