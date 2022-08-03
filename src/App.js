import './App.css';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Componets/Checkout/Checkout';
import { createContext, useState } from 'react';
import Login from './Componets/Login/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import Payment from './Componets/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckFile from './CheckFile';

const promise = loadStripe(
	'pk_test_51LSfMpSJP16fcwE3z9mW5SVORm5lIc2D3oLq7w3hTjsSlGl1dJ70nR66KL1UFwo9DezxZpeQnWOfL0byD82pSkF700afYwGqxu'
);

const basket = createContext();
const userLogin = createContext();

function App() {
	const [list, alterList] = useState([]);
	const [loginUser, setLoginUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setLoginUser(user);
		});
	}, []);

	function addingToList(rating, price, title, id, image) {
		const tempList = [...list, { rating, title, price, image, id }];
		alterList(tempList);
	}

	function removeFromList(id) {
		const tempList = [...list];
		const index = tempList.findIndex((item) => item.id === id);
		if (index >= 0) {
			tempList.splice(index, 1);
		} else {
			console.warn('Cannot remove Product as it is not in the basket');
		}

		alterList(tempList);
	}

	return (
		<CheckFile />
		// <userLogin.Provider value={{ loginUser, setLoginUser }}>
		// 	<basket.Provider
		// 		value={{
		// 			list,
		// 			addingToList,
		// 			removeFromList,
		// 		}}
		// 	>
		// 		<div className="app">
		// 			<Switch>
		// 				<Route path="/Login">
		// 					<Login />
		// 				</Route>
		// 				<Route path="/Checkout">
		// 					<Header />
		// 					<Checkout />
		// 				</Route>
		// 				<Route path="/Payment">
		// 					<Header />
		// 					{/* <Elements stripe={promise}></Elements> */}
		// 					<Payment />
		// 				</Route>
		// 				<Route path="/">
		// 					<Header />
		// 					<Home />
		// 				</Route>
		// 			</Switch>
		// 		</div>
		// 	</basket.Provider>
		// </userLogin.Provider>
	);
}

export default App;
export { basket, userLogin };
