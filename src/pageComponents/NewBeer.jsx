import React, { useState } from 'react';
import axios from 'axios';

import '../App.css';

import Header from '../components/Header';

const NewBeer = () => {
	const [values, setValues] = useState({
		name: '',
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: 0,
		contributed_by: '',
	});

	const handleChangeValues = (event) => {
		const value = event.target.value;
		setValues({
			...values,
			[event.target.name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('https://ih-beers-api2.herokuapp.com/beers/new', values)
			.then((response) => {
				setValues({
					name: '',
					tagline: '',
					description: '',
					first_brewed: '',
					brewers_tips: '',
					attenuation_level: 0,
					contributed_by: '',
				});
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="App">
			<Header />
			<div>
				<form className="AppForm" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="form-label">Name:</label>
						<input
							type="text"
							className="form-control"
							name="name"
							value={values.name}
							onChange={handleChangeValues}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Tagline:</label>
						<input
							type="text"
							className="form-control"
							name="tagline"
							value={values.tagline}
							onChange={handleChangeValues}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Description:</label>
						<textarea
							type="text"
							className="form-control"
							name="description"
							value={values.description}
							onChange={handleChangeValues}
							rows="6"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">First Brewed:</label>
						<input
							type="text"
							className="form-control"
							name="first_brewed"
							value={values.first_brewed}
							onChange={handleChangeValues}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Brewers Tips:</label>
						<input
							type="text"
							className="form-control"
							name="brewers_tips"
							value={values.brewers_tips}
							onChange={handleChangeValues}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Attenuation Level:</label>
						<input
							type="Number"
							className="form-control"
							name="attenuation_level"
							value={values.attenuation_level}
							onChange={handleChangeValues}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Contributed By:</label>
						<input
							type="text"
							className="form-control"
							name="contributed_by"
							value={values.contributed_by}
							onChange={handleChangeValues}
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						ADD NEW
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewBeer;
