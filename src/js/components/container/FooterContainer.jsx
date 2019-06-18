import React, {Component} from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<footer className="footer">
				<span className="footer-icon">
					<a href="https://open.spotify.com/artist/1mhe70fSiQDyc16JVlhBUE?si=o__TG3NBRSyC9AEEXSaZxQ">
						<i className="fab fa-spotify"></i>
					</a>
				</span>
				<span className="footer-icon">
					<a href="https://music.apple.com/us/artist/michael-barrow-the-tourists/1208194094">
						<i className="fab fa-apple"></i>
					</a>
				</span>
				<span className="footer-icon">
					<a href="https://www.instagram.com/michaelbarrowandthetourists/">
						<i className="fab fa-instagram"></i>
					</a>
				</span>
				<span className="footer-icon">
					<a href="https://www.facebook.com/michaelbarrowmusic/">
						<i className="fab fa-facebook-f"></i>
					</a>
				</span>
				<span className="footer-icon">
					<a href="https://twitter.com/mb_and_tourists">
						<i className="fab fa-twitter"></i>
					</a>
				</span>
				<span className="footer-icon">
					<a href="https://www.youtube.com/channel/UCHIZ6mN1eJi0oSwNF4NihUA">
						<i className="fab fa-youtube"></i>
					</a>
				</span>
				<span className="footer-icon">
					<a href="https://michaelbarrowandthetourists.bandcamp.com/">
						<i className="fab fa-bandcamp"></i>
					</a>
				</span>
			</footer>
		);
	}
}

export default Footer;