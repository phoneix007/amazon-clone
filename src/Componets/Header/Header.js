import React, { useContext } from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { basket, userLogin } from '../../App';
import { auth } from './../../firebase';
import { signOut } from 'firebase/auth';

function Header() {
	const checkoutList = useContext(basket);
	const signInUser = useContext(userLogin);

	const signingOut = async () => {
		try {
			await signOut(auth);
			signInUser.setLoginUser(null);
			console.log('user signout successfull');
		} catch (error) {
			console.log('problem in signing out');
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					src="https://s3-symbol-logo.tradingview.com/amazon--600.png"
					className="header__logo"
					alt="amazon_picture"
				/>
			</Link>

			<div className="header__search">
				<input
					className="header__searchInput"
					type="text"
					placeholder="Search"
				/>
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!signInUser?.loginUser && '/Login'}>
					<div className="header__option">
						<span className="header__optionlineOne">
							{signInUser?.loginUser ? 'Hello User' : 'Hello Guest'}
						</span>
						<span className="header__optionlineTwo" onClick={signingOut}>
							{signInUser?.loginUser ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionlineOne">Return</span>
					<span className="header__optionlineTwo">& Orders</span>
				</div>

				<div className="header__option">
					<span className="header__optionlineOne">Your</span>
					<span className="header__optionlineTwo">Prime</span>
				</div>
				<NavLink className="navlink__basket" to="/Checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionlineTwo header__basketCount">
							{checkoutList.list?.length}
						</span>
					</div>
				</NavLink>
			</div>
		</div>
	);
}

export default Header;
