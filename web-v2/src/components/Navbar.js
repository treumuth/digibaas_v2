import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceKiss } from '@fortawesome/free-regular-svg-icons';
import React, { createContext, useContext, useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { useLanguage } from './LanguageContext';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
	const { language, changeLanguage } = useLanguage();
	const { t } = useTranslation();
	const menuOptions = t('navigation', { returnObjects: true });

	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/">
						<FontAwesomeIcon icon={faFaceKiss} />
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/blog">{menuOptions.blog}</Link>
				</li>
				<li className="nav-item">
					<Link to="/services">{menuOptions.createPackage}</Link>
				</li>
				<li className="nav-item">
					<Link to="/about">{menuOptions.about}</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact">{menuOptions.contact}</Link>
				</li>
				<li>
					<SegmentedControl
						color="cyan"
						value={language}
						onChange={(value) => changeLanguage(value)}
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
