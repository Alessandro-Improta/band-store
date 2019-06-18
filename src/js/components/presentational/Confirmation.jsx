import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../container/context.jsx';

const successful = (
	<React.Fragment>
		<h3 className="subtitle">Your payment was successful!</h3>
		<Link className='pad button button-primary u-pull-right' to='/'>
			Home
		</Link>
		<Link className='pad button button-primary u-pull-right' to='/store'>
			Continue Shopping
		</Link>
	</React.Fragment>
);

const failed = (
	<React.Fragment>
		<h3 className="subtitle">Something went wrong with your payment</h3>
		<Link className='pad button button-primary u-pull-right' to='/'>
			Home
		</Link>
		<Link className='pad button button-primary u-pull-right' to='/checkout'>
			Try Again
		</Link>
	</React.Fragment>
);

const Confirmation = () => (
	<ProductConsumer>
		{ (value) => {
			const { paymentSuccess } = value;
			return (
				<div className="container">
					{ paymentSuccess ? successful : failed }
				</div>
			)
		}}
	</ProductConsumer>
)
		

export default Confirmation;