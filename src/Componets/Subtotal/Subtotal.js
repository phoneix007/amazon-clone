import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { basket } from '../../App';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
function Subtotal() {
	const checkoutItems = useContext(basket);
	// const history = useHistory();
	function calculateBasketTotal(list) {
		let total = 0;
		for (let item of list) {
			total += item.price;
			console.log(item.price);
		}
		return total;
	}

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({checkoutItems?.list.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order Contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={calculateBasketTotal(checkoutItems?.list)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button className="checkout__button" onClick={(e) => {}}>
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
