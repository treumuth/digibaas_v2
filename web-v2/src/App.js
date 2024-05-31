import React, { Suspense, useState } from 'react';
import { useLanguage } from './components/LanguageContext';
import { useTranslation } from 'react-i18next';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import { Loader } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import Article from './components/Article';
import { LanguageProvider } from './components/LanguageContext';
import { useDisclosure } from '@mantine/hooks';
import {
	AppShell,
	Burger,
	Group,
	UnstyledButton,
	Skeleton,
} from '@mantine/core';

import classes from './MobileNavbar.module.css';
import SidePanel from './components/SidePanel';
import { SegmentedControl } from '@mantine/core';
const theme = createTheme({
	fontFamily: 'Inter var',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	headings: { fontFamily: 'Greycliff CF, sans-serif' },
});
const App = () => {
	const { t } = useTranslation();
	// et routimine töötaks prodis ja devis sama moodi
	const basename =
		process.env.NODE_ENV === 'development' ||
		process.env.NODE_ENV === undefined
			? '/'
			: '/web2/digibaas/web-v2/build';
	const [opened, { toggle }] = useDisclosure();
	const { language, changeLanguage } = useLanguage();
	//const [language, setLanguage] = useState('ee');

	const menuOptions = t('navigation', { returnObjects: true });

	return (
		<Suspense fallback={<Loader size={30} />}>
			<MantineProvider theme={theme}>
				<LanguageProvider>
					<BrowserRouter basename={basename}>
						<AppShell
							header={{ height: 60 }}
							navbar={{
								width: 300,
								breakpoint: 'sm',
								collapsed: { desktop: true, mobile: !opened },
							}}
							padding="md"
						>
							<AppShell.Header>
								<Group
									h="100%"
									px="md"
								>
									<Burger
										opened={opened}
										onClick={toggle}
										hiddenFrom="sm"
										size="sm"
									/>
									<Group
										justify="space-between"
										style={{ flex: 1 }}
									>
										{/* Existing group of buttons */}
										<Group
											ml="xl"
											gap={0}
											visibleFrom="sm"
										>
											<UnstyledButton className={classes.control}>
												{menuOptions.blog}
											</UnstyledButton>
											<UnstyledButton className={classes.control}>
												{menuOptions.createPackage}
											</UnstyledButton>
											<UnstyledButton className={classes.control}>
												{menuOptions.about}
											</UnstyledButton>
											<UnstyledButton className={classes.control}>
												{menuOptions.contact}
											</UnstyledButton>
										</Group>

										<Group>
											<Navbar></Navbar>
										</Group>
									</Group>
								</Group>
							</AppShell.Header>
							<AppShell.Navbar p="md">Navbar</AppShell.Navbar>
							<AppShell.Main>
								<Routes>
									<Route
										path="/"
										element={
											<>
												<Main />
											</>
										}
									/>
									<Route
										path="/blog"
										element={
											<>
												<Blog />
											</>
										}
									/>
									<Route
										path="/services"
										element={
											<>
												<Carousel />
												<SidePanel />
											</>
										}
									/>
									<Route
										path="/blog/:id"
										element={
											<>
												<Article />
											</>
										}
									/>
								</Routes>
							</AppShell.Main>
						</AppShell>
					</BrowserRouter>
				</LanguageProvider>
			</MantineProvider>
		</Suspense>
	);
};

export default App;
