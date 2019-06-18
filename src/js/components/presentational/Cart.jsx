import React from 'react';
import { ProductConsumer } from '../container/context.jsx';
import CartProducts from './CartProducts.jsx';
import CartTotals from './CartTotals.jsx';

const Cart = () => (
	<div>
		
	    	<ProductConsumer>
	    		{
	    			(value) => {
	    				const { cart, cartRows, increment, decrement, removeItem, clearCart, cartTotal } = value;
	    				let key = 0;
	    				if ( cart.length < 1) {
	    					return <h4 className="subtitle">Cart is Empty</h4>
	    				} else {
	    					return (
	    						<React.Fragment>
		    						<div className=".u-full-width">
		    							<h4 className="subtitle">In Your Cart:</h4>
		    						</div>
		    						{cartRows.map((row, index) => {
		    							key += 1;
			    						return (
				    						<div className="products row" key={index}>
				    							<CartProducts row={row} 
				    										  methods={ { increment: increment, 
				    													  decrement: decrement, 
				    													  removeItem: removeItem 
				    													} } 
				    							/>
				    						</div>
			    						)
		    						})}
		    						<div className='row'>
		    							<CartTotals className='five columns' clearCart={clearCart} total={cartTotal}/>
		    						</div>
	    						</React.Fragment>
	    					)
	    				}
	    			}
	    		}
	    	</ProductConsumer>
	</div>
)

export default Cart;