import React, { useContext } from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { basket } from '../../App';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from '../../Reducer/Reducer';

function Checkout() {
	// const count = useSelector((state) => state.counter.value);
	// const dispatch = useDispatch();
	const checkoutList = useContext(basket);

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://static.toiimg.com/photo/msid-71563551/71563551.jpg?imgsize=71563551"
					className="checkout__ad"
					alt=""
				/>
				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					{checkoutList.list.map((item, i) => {
						return (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						);
					})}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
