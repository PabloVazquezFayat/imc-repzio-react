import React from "react";

export default function Logo(props) {
	const { src, alt } = props || {};
	return <img src={src} alt={alt} />;
}
