import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

const HomePageCards = (props) => {
	let img;
	if (props.link === '/beers') {
		img = beers;
	} else if (props.link === '/random-beer') {
		img = randomBeer;
	} else if (props.link === '/new-beer') {
		img = newBeer;
	}
	return (
		<div>
			<div
				className="card mb-3 text-center"
				style={{ width: '35rem', alignSelf: 'center' }}
			>
				<img src={img} className="card-img-top" alt="" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<Link to={props.link} className="btn btn-primary">
						Take me there
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePageCards;
