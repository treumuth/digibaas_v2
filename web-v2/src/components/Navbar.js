import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../logo.svg');

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/">
						<img
							src={logo.default}
							width="30"
							height="30"
							alt="Logo"
						/>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/blog">Blog</Link>
				</li>
				<li className="nav-item">
					<Link to="/services">Services</Link>
				</li>
				<li className="nav-item">
					<Link to="/about">About</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
