import React from 'react';
import { ProductConsumer } from '../container/context.jsx';
import { Link } from 'react-router-dom';

const ProductDetails = () => (
		<ProductConsumer>
			{ (value) => {
				const { id, title, price, description, image, inCart } = value.detailProduct;
				return (
						<React.Fragment>
							<div className='row'>
								<div className='six columns detailColumns'>
									<img className='detailImage card' alt={title} src={image} />
								</div>
								<div className='six columns detailColumns'>
									<h4>{title}</h4>
									<h5>${price}</h5>
									<p>{description}</p>
									<div className='u-pull-right'>
										<Link className='pad button button-primary' 
											onClick={() => value.addToCart(id)}
											to='/cart' 
										>
											{inCart ? "Check Out" : "Add To Cart"}
										</Link>
										<Link className='pad button button-primary' to='/store'>
											Continue Shopping
										</Link>
									</div>
								</div>
							</div>
						</React.Fragment>
					)
			}}
		</ProductConsumer>
	)

export default ProductDetails;