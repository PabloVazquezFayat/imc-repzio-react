import React from "react";

export default function Image(props) {
	const { src, alt } = props;

	const imageSrc = {
		small: `${src}?width=200&height=200&scale=both&crop=11,11,-11,-11`,
		medium: `${src}?width=300&height=300&scale=both&crop=11,11,-11,-11`,
		large: `${src}?width=400&height=400&scale=both&crop=11,11,-11,-11`,
		xlarge: `${src}?width=600&height=600&scale=both&crop=11,11,-11,-11`,
	};

	return (
		<img
			srcSet={`${imageSrc.small} 300w, ${imageSrc.medium} 768w, ${imageSrc.large} 1280w, ${imageSrc.xlarge} 1920w`}
			alt={alt || "Image"}
		/>
	);
}
