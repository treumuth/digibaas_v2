import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Blog from './components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	// et routimine töötaks prodis ja devis sama moodi
	const basename =
		process.env.NODE_ENV === 'development' ||
		process.env.NODE_ENV === undefined
			? '/'
			: '/web2/digibaas/web-v2/build';
	console.log(basename);
	return (
		<BrowserRouter basename={basename}>
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
			</Routes>
		</BrowserRouter>
	);
};

export default App;
