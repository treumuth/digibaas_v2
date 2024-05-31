import React from 'react';

const logo = require('../logo.svg');

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<a href="/">
						<img
							src={logo.default}
							width="30"
							height="30"
							alt="Logo"
						/>
					</a>
				</li>
				<li className="nav-item">
					<a href="/blog">Blog</a>
				</li>
				<li className="nav-item">
					<a href="/services">Services</a>
				</li>
				<li className="nav-item">
					<a href="/about">About</a>
				</li>
				<li className="nav-item">
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
