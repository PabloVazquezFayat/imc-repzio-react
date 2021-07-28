import "./Footer.css";

import React from "react";

import Logo from "../Logo/Logo";
import ContactCard from "../ContactCard/ContactCard";

export default function Footer(props) {
	const { ManufacturerID, SalesRep } = props.data || {};

	return (
		<div className="footer">
			<div className="footer__container layout-container">
				<div className="footer__container__content">
					<Logo
						src={`http://images.repzio.com/productimages/${ManufacturerID}/logo${ManufacturerID}_lg.jpg?width=85&scale=both`}
						alt="Repzio"
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
				</div>
				<div className="footer__container__content">
					<ContactCard data={SalesRep} />
				</div>
			</div>
		</div>
	);
}
