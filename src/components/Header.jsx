import React from 'react';
import { Link } from 'react-router-dom';

import navbar from '../assets/navbar.png';

const Header = () => {
	return (
		<header>
			<Link to="/">
				<img src={navbar} alt="" />
			</Link>
		</header>
	);
};

export default Header;
