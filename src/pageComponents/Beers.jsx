import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import BeerCard from '../components/BeerCard';

const Beers = () => {
	const [beers, setBeers] = useState('beers');
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((response) => {
				setBeers(response.data);
				setIsLoaded(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="App">
			<Header />
			{isLoaded ? (
				beers.map((beer) => {
					return (
						<BeerCard
							key={beer._id}
							id={beer._id}
							image={beer.image_url}
							name={beer.name}
							tagline={beer.tagline}
							contributed_by={beer.contributed_by}
						/>
					);
				})
			) : (
				<p>Loading.....</p>
			)}
		</div>
	);
};

export default Beers;
