import React from 'react';
import './Map.css';

export default function Map({imageName, location}){
  return (
		<div className='mapBox'>
			<img src={`images/${imageName ? imageName : 'none.png'}`} alt={location} />
		</div>
	);
}