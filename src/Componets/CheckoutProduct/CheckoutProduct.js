import React from 'react';
import './CheckoutProduct.css';
import { basket } from '../../App';
import { useContext } from 'react';

function CheckoutProduct({ image, title, price, rating, id }) {
	const ratingStars = [];
	for (let i = 0; i < rating; i++) {
		ratingStars.push(i);
	}
	const removeFn = useContext(basket).removeFromList;
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">
					<strong>{title}</strong>
				</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{ratingStars.map((_, i) => (
						<p>🌟</p>
					))}
				</div>
				<button
					className="checkoutProduct__button"
					onClick={() => removeFn(id)}
				>
					Remove from basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
