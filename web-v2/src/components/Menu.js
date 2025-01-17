import React, { Suspense, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '@mantine/core/styles.css';
import { Button, Space } from '@mantine/core';
import LogoSvg from '../public/assets/logo_ilma_digibaasita.svg';
const Menu = () => {
	const { t } = useTranslation();

	const { language, changeLanguage } = useLanguage();

	const menuOptions = t('navigation', { returnObjects: true });
	return (
		<>
			<Link to="/">
				<img
					src={LogoSvg}
					alt="Logo"
					className="logo"
				/>
			</Link>
			<Space w="xl" />
			<Space w="md" />
			{menuOptions.map((option, index) => (
				<>
					<Link
						key={index}
						to={option.path}
					>
						<Button
							className="buttonWithSideBorders"
							variant="transparent"
						>
							{option.name}
						</Button>
					</Link>
					<Space w="sm"></Space>
				</>
			))}
		</>
	);
};

export default Menu;
