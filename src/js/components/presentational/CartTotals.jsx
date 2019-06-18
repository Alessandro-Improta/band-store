import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ clearCart, total }) => {
	return (
		<React.Fragment>
			<div className='u-pull-right'>
				<h4>Total: ${total}</h4>
			</div>
			<div className='u-cf u-pull-right'>
				<Link className='button button-primary pad' to='/store'>
					Continue Shopping
				</Link>
				<Link className='button button-primary pad' to='/store' onClick={() => clearCart()}>
					Clear Cart
				</Link>
				<Link className='button button-primary pad' to='/checkout'>
					Checkout
				</Link>
			</div>
		</React.Fragment>
	)
}

export default CartTotals;