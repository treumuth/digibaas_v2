import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceKiss } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

const logo = require('../logo.svg');

const Navbar = () => {
	const [value, setValue] = useState('ee');


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
				<li>
					<SegmentedControl
						color="cyan"
						value={value}
						onChange={setValue}
						data={[
							{ value: 'ee', label: 'Eesti' },
							{ value: 'en', label: 'Inglise' },
							{ value: 'ru', label: 'Vene' },
						]}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
