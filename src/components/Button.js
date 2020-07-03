import React from "react";

export default function Button({ location, handleClick }) {
	const clickHandler = (e) => {
		handleClick((location ? location : 'none') + ".png");
	};
	return (
		<button
			location={location}
			style={{
				margin: 10,
				background: "#fff",
				padding: "10px 20px",
				borderRadius: 5,
			}}
			onClick={clickHandler}
		>
			{location ? location : "All Locations"}
		</button>
	);
}
