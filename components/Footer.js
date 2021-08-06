import React from "react";

function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 rounded-lg">
			<div className="space-y-5 text-xs text-gray-800">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Deluxe</p>
			</div>
			<div className="space-y-5 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>Its a pretty awesome clone</p>
				<p>Referrals accepted</p>
				<p>hellohaider.com</p>
			</div>
			<div className="space-y-5 text-xs text-gray-800">
				<h5 className="font-bold">DEVELOPER</h5>
				<p>Haider Abbas</p>
				<p>Full Stack developer</p>
				<p>Freelancer</p>
				<p>Programming instructor</p>
				<p>AI researcher</p>
			</div>
			<div className="space-y-5 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help centre</p>
				<p>Trust & Safety</p>
				<p>Say Hi</p>
				<p>GitHub</p>
				<p>LinkedIn</p>
			</div>
		</div>
	);
}

export default Footer;
