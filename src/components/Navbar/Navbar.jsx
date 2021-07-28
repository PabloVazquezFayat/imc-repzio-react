import "./Navbar.css";

import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";

export default function Navbar(props) {
	const {
		data: { ManufacturerID },
	} = props || {};

	return (
		<div className="navbar">
			<div className="navbar__container layout-container ">
				<div className="navbar__logo-container">
					<NavLink to="/">
						<Logo
							src={`http://images.repzio.com/productimages/${ManufacturerID}/logo${ManufacturerID}_lg.jpg?width=85&scale=both`}
							alt="Repzio"
						/>
					</NavLink>
				</div>
				<div className="navbar__navigation-container">
					<NavLink to="#">account</NavLink>
					<NavLink to="#">my cart</NavLink>
					<NavLink to="#">login</NavLink>
				</div>
			</div>
		</div>
	);
}
