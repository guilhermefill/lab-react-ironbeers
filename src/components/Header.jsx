import React from 'react';
import { Link } from 'react-router-dom';

import navbar from '../assets/navbar.png';

const Header = () => {
	return (
		<header>
			<Link to="/">
				<img
					src={navbar}
					alt=""
					style={{ width: '670px', maxHeight: `100px` }}
				/>
			</Link>
		</header>
	);
};

export default Header;
