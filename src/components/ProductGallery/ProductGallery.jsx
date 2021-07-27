import "./ProductGallery.css";

import React from "react";
import { NavLink } from "react-router-dom";

import ProductDetailsBanner from "../PageDetailsBanner/PageDetailsBanner";
import Image from "../Image/Image";

export default function ProductGallery(props) {
	const { items, SalesRep } = props.data || {};

	return (
		<div className="product-gallery">
			<ProductDetailsBanner salesRep={SalesRep}>Product Selection</ProductDetailsBanner>
			<div className="product-gallery__container layout-container">
				<ul className="product-gallery__product-list">
					{items && items.length > 0
						? React.Children.toArray(
								items.map((item) => {
									return (
										<NavLink to={`/product-view/${item.ProductID}`}>
											<li className="product-gallery__product-list__item">
												<Image src={item.PhotoName} alt={item.ItemName} />
												<h3>{item.ItemName}</h3>
												<div className="product-gallery__product-list__item__base-price">
													Base Price: {`$${item.BasePrice.toFixed(2)}`}
												</div>
												<div className="product-gallery__product-list__item__stock-counter">
													{item.OnHandQuantity > 0 ? <span>{item.OnHandQuantity}</span> : <span>0</span>}
													<span>In Stock</span>
												</div>
											</li>
										</NavLink>
									);
								})
						  )
						: null}
				</ul>
			</div>
		</div>
	);
}
