import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceKiss } from '@fortawesome/free-regular-svg-icons';

const logo = require('../logo.svg');

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/">
						<FontAwesomeIcon icon={faFaceKiss} />
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/blog">Blogi</Link>
				</li>
				<li className="nav-item">
					<Link to="/services">Koosta pakk</Link>
				</li>
				<li className="nav-item">
					<Link to="/about">Meist</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact">Kontakt</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
