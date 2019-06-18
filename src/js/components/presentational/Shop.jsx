import React from 'react';
import { ProductConsumer } from '../container/context.jsx';
import { Link } from 'react-router-dom';

const Shop = () => (
	<div className="container">
	    	<ProductConsumer>
	    		{
	    			(value) => {
	    				const { arrayOfRows } = value;
	    				return arrayOfRows.map(function(row, index) {
							return (
								<div className="row" key={index}>
									{row.map( product => {
										return (
											<div key={product.id} className="product one-third column card">
												<Link to='/details' onClick={() => value.handleDetail(product.id)}>
													<img alt={product.title} src={product.image} />
													<div className="card-container">
														<h4>{product.title}</h4>
														<span>${product.price}</span>
														<p>{product.description}</p>
													</div>
												</Link>
											</div>
										)
									})}
								</div>
							)
	    				})
	    			}
	    		}
	    	</ProductConsumer>
	</div>
)

export default Shop;