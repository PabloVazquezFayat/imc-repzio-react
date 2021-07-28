import "./PageDetailsBanner.css";

import React from "react";

export default function PageDetailsBanner(props) {
	const { salesRep, message } = props || {};
	const { FirstName, LastName } = salesRep || {};
	const text = props.children || "Product Selection";

	return (
		<div className="page-details-banner">
			<div className="page-details-banner__container layout-container ">
				<div className="page-details-banner__content">
					<h2>{text}</h2>
					{message ? (
						<div className="page-details-banner__message" dangerouslySetInnerHTML={{ __html: message }} />
					) : null}
					<span>selected by : {`${FirstName || ""} ${LastName || ""}`}</span>
				</div>
			</div>
		</div>
	);
}
