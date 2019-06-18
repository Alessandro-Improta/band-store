import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Checkout from "./Checkout.jsx";
import { ProductConsumer } from '../container/context.jsx';
import { Link } from 'react-router-dom';

class CompleteCheckout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	render() {
		return (
			<ProductConsumer>
				{ (value) => {
					const { cartTotal, isSuccessful } = value;
					return (
						<div className='container checkout'>
							<div className='row'>
								<div className="six columns">
									<label htmlFor="nameInput">Your name</label>
									<input className="u-full-width" type="text" placeholder="John Doe..." id="nameInput" required/>
								</div>
								<div className="six columns">
									<label htmlFor="emailInput">Your email</label>
									<input className="u-full-width" type="email" placeholder="example@example.com..." id="emailInput" required/>
								</div>
							</div>
							<div className='row'>
								<div className="u-full-width">
									<label htmlFor="streetAddressInput">Street Address</label>
									<input className="u-full-width" type="text" placeholder="123 Main st apt 3..." id="streetAddressInput" required/>
								</div>
							</div>
							<div className='row'>
								<div className='six columns'>
									<label htmlFor="cityInput">City</label>
									<input className='u-full-width' type='text' placeholder='city...' id='cityInput' required/>
								</div>
								<div className='two columns'>
									<label htmlFor='stateInput'>State</label>
									<input className='u-full-width' type='text' placeholder='XX' id='stateInput' maxLength='2' required/>
								</div>
								<div className='four columns'>
									<label htmlFor='zipInput'>Zip Code</label>
									<input className='u-full-width' type='number' placeholder='XXXXX' id='zipInput' maxLength='5' required/>
								</div>
							</div>
							<StripeProvider apiKey="pk_test_M1nkFb5RJYl74YEcYJJicHpj">
								<div className='row'>
							 		<Elements>
							 			<Checkout className='six columns offset' amount={cartTotal * 100} isSuccessful={isSuccessful} name={this.state.name}/>
								 	</Elements>
								</div>
							</StripeProvider>
						</div>
					)
				}}
			</ProductConsumer>
		);
	}
}


export default CompleteCheckout;