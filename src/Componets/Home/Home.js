import React from 'react';
import './home.css';
import Product from '../Product/Product';
import { useHistory } from 'react-router-dom';
function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://cdn.vox-cdn.com/thumbor/W1F-IJESxJuEretqsHtMNoPMvYk=/0x0:1922x1082/1200x0/filters:focal(0x0:1922x1082):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23883986/Continue_Watching_Row_on_Home.png"
					alt="prime "
					className="home__image"
				/>

				<div className="home__row">
					<Product
						image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						title="Headphones"
						rating="5"
						price="19.99"
						id="1235"
					/>
					<Product
						image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
						title="Watch"
						rating="4"
						price="101.99"
						id="123"
					/>
				</div>

				<div className="home__row">
					<Product
						image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
						title="Earphones with new blutooth 5.0 technology"
						rating="5"
						price="100"
						id="124"
					/>
					<Product
						image="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						title="Carry Bag from Lastioms"
						rating="5"
						price="19.84"
						id="122"
					/>
					<Product
						image="https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
						title="iphone case"
						rating="5"
						price="60.99"
						id="12355"
					/>
				</div>

				<div className="home__row">
					<Product
						image="https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						title="Casual shoes from Puma"
						rating="5"
						price="50.99"
						id="1237"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
