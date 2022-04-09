import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
	return (
		<div className="card mb-3" style={{ maxWidth: '540px' }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={props.image}
						className="img-fluid rounded-start"
						alt="..."
						style={{ maxWidth: '100px', maxHeight: '200px' }}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.tagline}</p>
						<p className="card-text">
							<small className="text-muted">
								Created by {props.contributed_by}
							</small>
						</p>
						<Link to={`/beers/${props.id}`} className="btn">
							See Beer
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BeerCard;
