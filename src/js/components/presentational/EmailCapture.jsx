import React from 'react';

const EmailCapture = () => (
	<form name="email-form" method="POST" encType="application/x-www-form-urlencoded">
		<input type="hidden" name="form-name" value="email-form" />
		<input name="bot-field" hidden></input>
		<input className="email-capture" name="email-input" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
		<div className="hidden-submit"><input name="submit-button" type="submit" tabIndex="-1"></input></div>
	</form>
);

export default EmailCapture;