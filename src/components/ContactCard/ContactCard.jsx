import "./ContactCard.css";
import React from "react";

export default function SalesRep(props) {
	const { data } = props || {};

	return (
		<div className="contact-card">
			<h4>Contact Info</h4>

			<div className="contact-card__contact__container">
				<ul className="contact-card__contact">
					<li>
						<p>{`${data.FirstName} ${data.LastName}`}</p>
					</li>
					<li>
						<p>{`${data.EmailAddress}`}</p>
					</li>
					<li>
						<p>{`${data.Phone}`}</p>
					</li>
				</ul>

				<ul className="contact-card__contact">
					<li>
						<p>{`${data.City} ${data.State}, ${data.PostalCode}`}</p>
					</li>
					<li>
						<p>{`${data.CompanyName}`}</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
