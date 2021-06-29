import React, { useState, useEffect } from "react";
import fire from "../firebase";

const Login = ({ email, password, setEmail, setPassword }) => {
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [hasAccount, setHasAccount] = useState(false);

	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
	};

	const handleLogin = () => {
		clearErrors();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
				}
			});
	};
	const handleSignup = () => {
		clearErrors();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
				}
			});
	};

	return (
		<section className='login'>
			<div className='loginContainer'>
				<label>UserName</label>
				<input
					type='text'
					outoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className='errorMsg'>{emailError}</p>
				<label>PassWord</label>
				<input
					type='password'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className='errorMsg'>{passwordError}</p>
				<div className='btnContainer'>
					{hasAccount ? (
						<>
							<button onClick={handleLogin} style={{ width: "100%" }}>
								Sign in
							</button>
							<p>
								Don't have an account ?
								<span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSignup} style={{ width: "100%" }}>
								Sign up
							</button>
							<p>
								Have an account ?
								<span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Login;
