import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Blog from './components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import Article from './components/Article';
import { LanguageProvider } from './components/LanguageContext';

const theme = createTheme({
	fontFamily: 'Inter var',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	headings: { fontFamily: 'Greycliff CF, sans-serif' },
});
const App = () => {
	// et routimine töötaks prodis ja devis sama moodi
	const basename =
		process.env.NODE_ENV === 'development' ||
		process.env.NODE_ENV === undefined
			? '/'
			: '/web2/digibaas/web-v2/build';

	return (
		<LanguageProvider>
			<BrowserRouter basename={basename}>
				<MantineProvider theme={theme}>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={<Main />}
						/>
						<Route
							path="/blog"
							element={<Blog />}
						/>
						<Route
							path="/services"
							element={<Carousel />}
						/>
						<Route
							path="/blog/:id"
							element={<Article />}
						/>
					</Routes>
				</MantineProvider>
			</BrowserRouter>
		</LanguageProvider>
	);
};

export default App;
