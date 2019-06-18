import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import EmailCapture from "../presentational/EmailCapture.jsx";

class Header extends Component {
	constructor () {
		super();
	}

	render() {
		return (
		  <header className="header">
		    <Link to="/"><h1>Michael Barrow <span className="ampersand">&</span> The Tourists</h1></Link>
		    <nav>
		    	<Link to="/tour">TOUR</Link>
		    	<Link to="/store">MERCH</Link>
		    </nav>
		    <EmailCapture />
		  </header>
		);
	}
}

export default Header;