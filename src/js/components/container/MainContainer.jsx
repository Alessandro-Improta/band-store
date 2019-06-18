import React, {Component} from "react";
import { Route } from 'react-router-dom';
import 'babel-polyfill';
import ReactDOM from "react-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';
import Carousel from "../presentational/Carousel.jsx";
import Shop from "../presentational/Shop.jsx";
import CompleteCheckout from "../presentational/CompleteCheckout.jsx";
import Cart from "../presentational/Cart.jsx";
import Tour from "../presentational/Tour.jsx";
import ProductDetails from "../presentational/ProductDetails.jsx";
import Confirmation from "../presentational/Confirmation.jsx";



class Main extends Component {
	constructor() {
		super();
	}
	render() {
	    return (
	    		<div className="main-container">
	    			<Route exact path="/" component={Carousel}/>
					<Route path="/store" component={Shop}/>
					<Route path="/checkout" component={CompleteCheckout}/>
					<Route path="/tour" component={Tour}/>
					<Route path="/details" component={ProductDetails}/>
					<Route path="/cart" component={Cart}/>
					<Route path="/confirmation" component={Confirmation}/>
	    		</div>
	    	)
  	}
}
export default Main;

// {
//   "order": {
//     "id": "or_1DpGPdGU8wjYJDtE8OnPgI3Z",
//     "object": "order",
//     "amount": 1700,
//     "amount_returned": null,
//     "application": null,
//     "application_fee": null,
//     "charge": null,
//     "created": 1546699569,
//     "currency": "usd",
//     "customer": null,
//     "email": "test@test.com",
//     "items": [
//       {
//         "object": "order_item",
//         "amount": 1700,
//         "currency": "usd",
//         "description": "Second Test",
//         "parent": "sku_EHpxZICufCgs45",
//         "quantity": 1,
//         "type": "sku"
//       },
//       {
//         "object": "order_item",
//         "amount": 0,
//         "currency": "usd",
//         "description": "Taxes (included)",
//         "parent": null,
//         "quantity": null,
//         "type": "tax"
//       },
//       {
//         "object": "order_item",
//         "amount": 0,
//         "currency": "usd",
//         "description": "Free shipping",
//         "parent": "ship_free-shipping",
//         "quantity": null,
//         "type": "shipping"
//       }
//     ],
//     "livemode": false,
//     "metadata": {
//       "phone": "9999999999"
//     },
//     "returns": {
//       "object": "list",
//       "data": [],
//       "has_more": false,
//       "total_count": 0,
//       "url": "/v1/order_returns?order=or_1DpGPdGU8wjYJDtE8OnPgI3Z"
//     },
//     "selected_shipping_method": "ship_free-shipping",
//     "shipping": {
//       "address": {
//         "city": null,
//         "country": null,
//         "line1": "1234 Main St Provo, UT 84604",
//         "line2": null,
//         "postal_code": null,
//         "state": null
//       },
//       "carrier": null,
//       "name": "Test Person",
//       "phone": null,
//       "tracking_number": null
//     },
//     "shipping_methods": [
//       {
//         "id": "ship_free-shipping",
//         "amount": 0,
//         "currency": "usd",
//         "delivery_estimate": null,
//         "description": "Free shipping"
//       }
//     ],
//     "status": "created",
//     "status_transitions": {
//       "canceled": null,
//       "fulfiled": null,
//       "paid": null,
//       "returned": null
//     },
//     "updated": 1546699569
//   }
// }

// {
//   "order": {
//     "type": "StripeInvalidRequestError",
//     "stack": "Error: No such sku: xxxsku_EHpxZICufCgs45\n    at Constructor._Error (/data/_verquire/stripe/6.20.0/node_modules/stripe/lib/Error.js:12:17)\n    at Constructor (/data/_verquire/stripe/6.20.0/node_modules/stripe/lib/utils.js:134:13)\n    at new Constructor (/data/_verquire/stripe/6.20.0/node_modules/stripe/lib/utils.js:134:13)\n    at Function.StripeError.generate (/data/_verquire/stripe/6.20.0/node_modules/stripe/lib/Error.js:57:12)\n    at IncomingMessage.<anonymous> (/data/_verquire/stripe/6.20.0/node_modules/stripe/lib/StripeResource.js:155:39)\n    at emitNone (events.js:111:20)\n    at IncomingMessage.emit (events.js:208:7)\n    at endReadableNT (_stream_readable.js:1064:12)\n    at _combinedTickCallback (internal/process/next_tick.js:139:11)\n    at process._tickDomainCallback (internal/process/next_tick.js:219:9)",
//     "rawType": "invalid_request_error",
//     "code": "resource_missing",
//     "param": "items[0]",
//     "message": "No such sku: xxxsku_EHpxZICufCgs45",
//     "raw": {
//       "code": "resource_missing",
//       "doc_url": "https://stripe.com/docs/error-codes/resource-missing",
//       "message": "No such sku: xxxsku_EHpxZICufCgs45",
//       "param": "items[0]",
//       "type": "invalid_request_error",
//       "headers": {
//         "server": "nginx",
//         "date": "Sat, 05 Jan 2019 14:46:42 GMT",
//         "content-type": "application/json",
//         "content-length": "238",
//         "connection": "close",
//         "access-control-allow-credentials": "true",
//         "access-control-allow-methods": "GET, POST, HEAD, OPTIONS, DELETE",
//         "access-control-allow-origin": "*",
//         "access-control-expose-headers": "Request-Id, Stripe-Manage-Version, X-Stripe-External-Auth-Required, X-Stripe-Privileged-Session-Required",
//         "access-control-max-age": "300",
//         "cache-control": "no-cache, no-store",
//         "request-id": "req_pTScjZ4SIqzaZV",
//         "stripe-version": "2018-11-08",
//         "strict-transport-security": "max-age=31556926; includeSubDomains; preload"
//       },
//       "statusCode": 400,
//       "requestId": "req_pTScjZ4SIqzaZV"
//     },
//     "headers": {
//       "server": "nginx",
//       "date": "Sat, 05 Jan 2019 14:46:42 GMT",
//       "content-type": "application/json",
//       "content-length": "238",
//       "connection": "close",
//       "access-control-allow-credentials": "true",
//       "access-control-allow-methods": "GET, POST, HEAD, OPTIONS, DELETE",
//       "access-control-allow-origin": "*",
//       "access-control-expose-headers": "Request-Id, Stripe-Manage-Version, X-Stripe-External-Auth-Required, X-Stripe-Privileged-Session-Required",
//       "access-control-max-age": "300",
//       "cache-control": "no-cache, no-store",
//       "request-id": "req_pTScjZ4SIqzaZV",
//       "stripe-version": "2018-11-08",
//       "strict-transport-security": "max-age=31556926; includeSubDomains; preload"
//     },
//     "requestId": "req_pTScjZ4SIqzaZV",
//     "statusCode": 400
//   }
// }
