import "./ProductGallery.css";

import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductGallery(props) {
	const items = props.data || [];

	console.log(items);

	return (
		<div className="product-gallery">
			<div className="product-gallery__container">
				<div className="product-gallery__navigation__container"></div>

				<ul className="product-gallery__product-list">
					{items.length > 0
						? React.Children.toArray(
								items.map((item) => {
									const imageSrc = {
										small: `${item.PhotoName}?width=200&height=200&crop=11,11,-11,-11`,
										medium: `${item.PhotoName}?width=300&height=300&crop=11,11,-11,-11`,
										large: `${item.PhotoName}?width=400&height=400&crop=11,11,-11,-11`,
									};

									return (
										<li className="product-gallery__product-list__item">
											<img
												srcSet={`${imageSrc.small} 300w, ${imageSrc.medium} 768w, ${imageSrc.large} 1280w`}
												alt={item.ItemName}
											/>
											<NavLink to={`/product-view/${item.ItemID}`}>
												<h3>{item.ItemName}</h3>
											</NavLink>
											<div className="product-gallery__product-list__item__stock-counter">
												{item.OnHandQuantity > 0 ? <span>{item.OnHandQuantity}</span> : <span>0</span>}
												<span>In Stock</span>
											</div>
										</li>
									);
								})
						  )
						: null}
				</ul>
			</div>
		</div>
	);
}
