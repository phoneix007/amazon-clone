import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { db, auth } from '../../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const Login = () => {
	// const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = async (e) => {
		e.preventDefault();
		try {
			const authObj = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			window.location.href = '/';
		} catch (error) {
			console.log('Registeration Failed ');
			console.log(error);
		}
	};

	const login = async (e) => {
		e.preventDefault();
		try {
			const authObj = await signInWithEmailAndPassword(auth, email, password);
			if (authObj) {
				alert('sign In successfully');
				console.log(authObj);
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
			alert('signIn failed');
		}
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="amazon"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-In</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="signInButton" onClick={login}>
						Sign-In
					</button>
				</form>
				<p>
					By Signing in you are agreeing to all of the made up clone of the
					amazon app
				</p>
				<button className="createAccountButton" onClick={register}>
					Create Your Account
				</button>
			</div>
		</div>
	);
};

export default Login;
