import React, { Component }  from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from './context.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./HeaderContainer.jsx";
import Main from "./MainContainer.jsx";
import Footer from "./FooterContainer.jsx";


class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<ProductProvider>
				<Router>
					<div>
						<Header />
						<Main />
						<Footer />
					</div>
				</Router>
			</ProductProvider>
			)
	}
}

const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<App />, wrapper) : false;