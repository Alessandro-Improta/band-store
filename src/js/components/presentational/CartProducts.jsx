import React from 'react';
import OptionSelector from './OptionSelector.jsx';

const CartProducts = ({ row, methods }) => {
	const { decrement, increment, removeItem } = methods;
	return row.map( product => {
		return (
			<div key={product.id} className="product four columns card">
				<img alt={product.title} src={product.image} />
				<div className="card-container">
					<h4 className="tight-text">{product.title}</h4>
					<p className="tight-text">${product.total}</p>
					<div>
						<span className="button-black" onClick={ () => decrement(product.id) }>-</span>
						<span className="button-black">{product.count}</span>
						<span className="button-black" onClick={ () => increment(product.id) }>+</span>
					</div>
					<OptionSelector className="option-selector" options={product.options} count={product.count} />
					<i className="button-black far fa-trash-alt" onClick={() => removeItem(product.id)}></i>
				</div>
			</div>
		)
	})
}

export default CartProducts;