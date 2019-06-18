import React, { Component } from 'react';
import { products, dates } from './data.js';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dates: dates,
			products: [],
			detailProduct: {
				id: 1,
				title: "Red Crest T-Shirt",
				price: 20,
				description: "Cotton t-shirt with the Michael Barrow and The Tourists crest on the chest",
				image: require("./../../../images/red-crest.jpg"),
				inCart: false
			},
			cart: [],
			cartRows: [],
			arrayOfRows:[],
			cartTotal: 0,
			paymentSuccess: false
		}

		this.handleDetail = this.handleDetail.bind(this);
		this.getItem = this.getItem.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.clearCart = this.clearCart.bind(this);
		this.addTotals = this.addTotals.bind(this);
		this.setRows = this.setRows.bind(this);
		this.isSuccessful = this.isSuccessful.bind(this);
	} 

	componentDidMount() {
		this.setProducts();
	}

	setProducts() {
		let tempProducts = [];
		products.forEach( item => {
			const singleItem = {...item};
			tempProducts = [...tempProducts,singleItem];
		})
		let iterations = Math.ceil(tempProducts.length/3);
		let arrayOfArrays = [];
		let counter = 0;
		for ( let i = 0; i < iterations; i++) {
			let end;
			if (counter + 3 < tempProducts.length) {
				end = counter + 3;
			}
			arrayOfArrays.push(tempProducts.slice(counter, end));
			counter += 3;
		}
		this.setState(() => {
			return { products: tempProducts, arrayOfRows: arrayOfArrays }
		});
	}

	getItem(id) {
		const product = this.state.products.find(item => item.id === id);
		return product;
	}

	handleDetail(id) {
		const product = this.getItem(id);
		this.setState({
			detailProduct: product
		});
	}

	setRows() {
		let cart = this.state.cart;
		let iterations = Math.ceil(cart.length/3);
		let cartRows = [];
		let counter = 0;
		for ( let i = 0; i < iterations; i++) {
			let end;
			if (counter + 3 < cart.length) {
				end = counter + 3;
			}
			cartRows.push(cart.slice(counter, end));
			counter += 3;
		}
		this.setState(() => {
			return {
				cartRows: cartRows
			}
		})
	}

	addToCart(id) {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		if (product.inCart) {
			return
		}
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price * product.count;
		let cart = [ ...this.state.cart, product ];
		
		this.setState({
			products: tempProducts,
			cart: cart
		}, () => {
			this.addTotals();
			this.setRows();
		});
	}

	increment(id) {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item => item.id === id); 
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.count * product.price;
		this.setState(
			() => {
				return {
					cart: [...tempCart]
				}
			}, () => {
				this.addTotals();
			}
		)
	}

	decrement(id) {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item => item.id === id); 
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;
		if (product.count === 0) {
			this.removeItem(id);
		} else {
			product.total = product.count * product.price;
			this.setState(
				() => {
					return {
						cart: [...tempCart]
					}
				}, () => {
					this.addTotals();
				}
			)
		}
	}

	removeItem(id) {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];
		tempCart = tempCart.filter(item => item.id !== id);
		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;
		this.setState(
			() => {
				return {
					cart: [...tempCart],
					products: [...tempProducts]
				}
			}, () => {
				this.addTotals();
				this.setRows();
			}
		);
	}

	clearCart() {
		this.setState(() => {
			return {
				cart: [],
				cartRows: []
			}
		}, () => {
			this.setProducts();
			this.addTotals();
		})
	}

	addTotals() {
		let total = 0;
		this.state.cart.map( item => total += item.total);
		this.setState(() => {
			return {
				cartTotal: total
			}
		});
	}

	isSuccessful(boolean) {
		this.setState(() => {
			return {
				paymentSuccess: boolean
			}
		});
	}

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				increment: this.increment,
				decrement: this.decrement,
				removeItem: this.removeItem,
				clearCart: this.clearCart,
				isSuccessful: this.isSuccessful
			}}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };