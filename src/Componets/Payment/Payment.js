import React, { useContext } from 'react';
import './Payment.css';
import { basket, userLogin } from './../../App';
import CheckoutProduct from './../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
	const payment_items = useContext(basket);
	const userLoggedIn = useContext(userLogin);

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (
					<Link to="/Checkout">{payment_items?.list.length} items</Link>)
				</h1>
				{/* payment section - delivery address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>Hyd-XXXX</p>
						<p>Pincode - 267XXX</p>
						<p>257 Lane</p>
					</div>
				</div>
				{/* payment section - order review */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Your Items</h3>
					</div>
					<div className="payment__items">
						{/* {payment_items.list.map((item) => {
							return (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									price={item.price}
									image={item.image}
									rating={item.rating}
								/>
							);
						})} */}
						<CheckoutProduct
							image="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							title="Carry Bag from Lastioms"
							rating="5"
							price="19.84"
							id="122"
						/>
						<CheckoutProduct
							image="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							title="Carry Bag from Lastioms"
							rating="5"
							price="19.84"
							id="122"
						/>
					</div>
				</div>

				{/* payment section - payment method */}
				<div className="payment__seciton">
					<div>
						<h3>Payment Method</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
