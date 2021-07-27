import "./PageDetailsBanner.css";

import React from "react";

export default function PageDetailsBanner(props) {
	const salesRep = props.salesRep || {};
	const text = props.children || "Product Selection";

	return (
		<div className="page-details-banner">
			<div className="page-details-banner__container layout-container ">
				<div className="page-details-banner__content">
					<h2>{text}</h2>
					<span>selected by : {`${salesRep.FirstName} ${salesRep.LastName}`}</span>
				</div>
			</div>
		</div>
	);
}
