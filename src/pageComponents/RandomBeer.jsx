import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import Header from '../components/Header';

const RandomBeer = () => {
	let { id } = useParams();
	let [beer, setBeer] = useState('beer');
	let [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
			.then((response) => {
				setBeer(response.data);
				setIsLoaded(true);
			})
			.catch((error) => console.log(error));
	}, [id]);

	return (
		<div className="App">
			<Header />
			{isLoaded && (
				<div className="row AppForm">
					<div className="col">
						<img
							src={beer.image_url}
							alt=""
							style={{ maxWidth: '100px', maxHeight: '250px' }}
						/>
					</div>
					<div className="col">
						<h2>{beer.name}</h2>
						<p>{beer.tagline}</p>
						<p>{beer.attenuation_level}</p>
						<p>{beer.first_brewed}</p>
						<p>{beer.description}</p>
						<p>{beer.contributed_by}</p>
					</div>
				</div>
			)}
			<Link to="/beers">Back to beers</Link>
		</div>
	);
};

export default RandomBeer;
