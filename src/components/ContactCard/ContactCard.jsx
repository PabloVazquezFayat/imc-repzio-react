import "./ContactCard.css";
import React from "react";

export default function SalesRep(props) {
	const { data } = props || {};
	const { FirstName, LastName, EmailAddress, Phone, City, State, PostalCode, CompanyName } = data || {};

	return (
		<div className="contact-card">
			<h4>Contact Info</h4>

			<div className="contact-card__contact__container">
				<ul className="contact-card__contact">
					<li>
						<p>{`${FirstName || ""} ${LastName || ""}`}</p>
					</li>
					<li>
						<p>{`${EmailAddress || ""}`}</p>
					</li>
					<li>
						<p>{`${Phone || ""}`}</p>
					</li>
				</ul>

				<ul className="contact-card__contact">
					<li>
						<p>{`${City || ""} ${State || ""}, ${PostalCode || ""}`}</p>
					</li>
					<li>
						<p>{`${CompanyName || ""}`}</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
