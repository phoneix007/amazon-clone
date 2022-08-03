import React from 'react';
import './Product.css';

import { basket } from '../../App';
import { useContext } from 'react';

function Product({ title, price, id, image, rating }) {
	const ratingArray = [];
	const checkoutList = useContext(basket);

	let starRating = rating * 1;
	for (let i = 0; i < starRating; i++) {
		ratingArray.push(i);
	}
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{ratingArray.map((_, i) => (
						<p id={id}>🌟</p>
					))}
				</div>
			</div>
			<img src={image} alt="headphone" className="product__image" />
			<button
				onClick={() =>
					checkoutList.addingToList(rating, price, title, id, image)
				}
			>
				Add to basket
			</button>
		</div>
	);
}

export default Product;
