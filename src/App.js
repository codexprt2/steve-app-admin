import "./App.css";
import fire from "./firebase";
import Login from "./component/Login/Login";
import Hoc from "./Hoc";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(false);
	const [email, setEmail] = useState("zalaanjali11@gmail.com");
	const [password, setPassword] = useState("134679852");

	var Loader = require("react-loader");
	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((userData) => {
			if (userData) {
				clearInputs();
				setLoading(true);
				setUser(userData);
				setLoading(false);
			} else {
				setUser(null);
			}
		});
	};

	useEffect(() => {
		authListener();
		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{user === false ? (
					<Loader loaded={loading} />
				) : user === null ? (
					<Login
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
					/>
				) : (
					<Hoc />
				)}
			</PersistGate>
		</Provider>
	);
}

export default App;
