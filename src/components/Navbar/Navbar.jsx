import "./Navbar.css";

import React from "react";

export default function Navbar(props) {
	const {
		data: { ManufacturerID },
	} = props || {};

	return (
		<div className="navbar">
			<div className="navbar__container">
				<div className="navbar__logo-container">
					<img
						src={`http://images.repzio.com/productimages/${ManufacturerID}/logo${ManufacturerID}_lg.jpg?width=75`}
						alt="Repzio"
					/>
				</div>
				<div className="navbar__navigation-container"></div>
			</div>
		</div>
	);
}
