import "./NotFound.css";

import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="not-found">
			<div className="not-found__container layout-container">
				<h1>404</h1>
				<h4>something went wrong</h4>
				<NavLink className="not-found__button" to="/">
					Go Back Home
				</NavLink>
			</div>
		</div>
	);
}
