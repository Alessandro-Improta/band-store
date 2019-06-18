import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';

const webtaskStripePayment = "https:\/\/wt-bde04ad5a060fb9cbc36084ae03f00ee-0.sandbox.auth0-extend.com/webtask-stripe-payment"
const webtaskStripeOrder = "https:\/\//wt-bde04ad5a060fb9cbc36084ae03f00ee-0.sandbox.auth0-extend.com/webtask-stripe-order"

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toConfirmation: false
    }
    this.submit = this.submit.bind(this);
  }

 
  async submit(ev) {
    let { token } = await this.props.stripe.createToken({name: this.props.name});
    const body = {
      amount: this.props.amount,
      token: token.id
    }
    fetch(webtaskStripePayment, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    })
      .then( res => res.json())
      .then( json => {
        const isSuccessful = this.props.isSuccessful;
        isSuccessful(json.success);
        this.setState(() => {
          return {
            toConfirmation: true
          }
        })
      });
  };

  render() {
    if (this.state.toConfirmation) {
      return (
        <Redirect to='/confirmation' />
      );
    };
    return (
      <div>
        <CardElement className='stripe-element'/>
        <button className='button button-primary' style={{marginTop: '25px'}} onClick={this.submit} >Send</button>
      </div>
    );
  }
}

export default injectStripe(Checkout);