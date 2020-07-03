import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Map from "./Map";

export default function StoreLocator({location}) {
  const [currentMap, setCurrentMap] = useState('none.png');

	const shops = [
		{
			location: "Portland",
			address: "123 Portland Dr",
		},
		{
			location: "Astoria",
			address: "123 Astoria Dr",
		},
		{
			location: "",
			address: "",
		},
  ];
  
  const chooseMap = (location) => {
    setCurrentMap(location);
  }
  
	return (
		<div>
			<Header />
			<div>
				{shops.map((shop, index) => (
					<Button handleClick={chooseMap} location={shop.location} key={index} />
				))}
			</div>
			<Map imageName={currentMap} location={location} />
		</div>
	);
}
