import "./ProductView.css";

import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

import queryString from "query-string";

import ProductDetailsBanner from "../PageDetailsBanner/PageDetailsBanner";
import Image from "../Image/Image";
import ContactCard from "../ContactCard/ContactCard";

export default function ProductView(props) {
	const { items, SalesRep } = props.data || {};

	const location = useLocation();
	const [productData, setProductData] = useState({});

	useEffect(() => {
		const { productID } = queryString.parse(location.search);

		if (items && items.length > 0) {
			const selectedProduct = items.find((item) => item.ProductID === parseInt(productID));
			setProductData(selectedProduct);
		}
	}, [items]);

	return (
		<div className="product-view">
			{productData ? (
				<div className="product-view">
					<ProductDetailsBanner salesRep={SalesRep}>{productData.ItemName}</ProductDetailsBanner>
					<div className="product-view__container layout-container">
						<div className="product-view__image__container">
							<Image src={productData.PhotoName} alt={productData.ItemName} />
						</div>

						<div className="product-view__product-details__container">
							<h2>{productData.ItemName}</h2>
							<div className="product-view__base-price">
								Base Price: {`$${productData.BasePrice ? productData.BasePrice.toFixed(2) : "0.00"}`}
							</div>
							<p>{productData.Description || "No description found for this item..."}</p>
							<div className="product-view__item-info">Dimensions: {productData.Dimensions}</div>
							<div className="product-view__item-info item-id">Item ID: {productData.ItemID}</div>
							<ContactCard data={SalesRep} />
						</div>
					</div>
				</div>
			) : (
				<Redirect to="/not-found" />
			)}
		</div>
	);
}
