import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Blog from './components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
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
