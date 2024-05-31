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
		<>
			{' '}
			<SegmentedControl
				color="cyan"
				value={language}
				onChange={(value) => {
					changeLanguage(value);
				}}
				data={[
					{
						value: 'ee',
						label: (
							<img
								src={require('../public/assets/estonia.png')}
								alt="Estonia"
								className="flag-image"
							/>
						),
					},
					{
						value: 'en',
						label: (
							<img
								src={require('../public/assets/united-kingdom.png')}
								alt="English"
								className="flag-image"
							/>
						),
					},
					{
						value: 'ru',
						label: (
							<img
								src={require('../public/assets/russia.png')}
								alt="Russia"
								className="flag-image"
							/>
						),
					},
				]}
			/>
		</>
	);
};

export default Navbar;
