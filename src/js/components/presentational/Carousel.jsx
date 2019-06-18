import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';
import PropTypes from 'prop-types';

let flickityOptions = {
	wrapAround: true,
	imagesLoaded: true
};

const Carousel = () => (
	<Flickity className="carousel"
		options={flickityOptions}>
		<img className="carousel-cell" alt="first" src={require('../../../images/juneau.jpg')}/>
		<img className="carousel-cell" alt="second" src={require('../../../images/merch.jpg')}/>
		<img className="carousel-cell" alt="third" src={require('../../../images/peacock.jpg')}/>
		<img className="carousel-cell" alt="third" src={require('../../../images/SBSCover.jpg')}/>
	</Flickity>
);

export default Carousel;

// 1. Spotify link to Juneau
// 2. Merch Link
// 3. Tour Dates image (at least next 5 dates)
// 4. SMSN video/embeded spotify
// 5. All I'll See is You video/embeded
// 6. Picture

