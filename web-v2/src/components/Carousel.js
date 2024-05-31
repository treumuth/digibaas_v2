import React, { useState } from 'react';
import Map from './Map';
import Sectors from './Sectors';
import InfoBox from './Infobox';
import Extras from './Extras';

const Carousel = () => {
	const [activeComponent, setActiveComponent] = useState('map');
	const [selectedSectors, setSelectedSectors] = useState([]);
	const [selectedCounties, setSelectedCounties] = useState(['']);
	const [selectedExtras, setSelectedExtras] = useState({
		workers: null,
		revenue: null,
		comments: null,
		courtDecisions: false,
	});

	const handleSectorChange = (e) => {
		const sector = e;

		setSelectedSectors((prevSectors) => {
			if (prevSectors.includes(sector)) {
				return prevSectors.filter((s) => s !== sector);
			} else {
				return [...prevSectors, sector];
			}
		});
	};
	const handleExtrasChange = (e) => {
		console.log(selectedExtras);
		// Assuming e is an object with key-value pairs
		const { revenue, workers, comments, courtDecisions } = e; // Destructure the values if available

		setSelectedExtras((prevExtras) => {
			// Create a new object based on the previous state and the incoming values
			return {
				...prevExtras,
				revenue: revenue !== undefined ? revenue : prevExtras.revenue,
				workers: workers !== undefined ? workers : prevExtras.workers,
				courtDecisions:
					courtDecisions !== undefined
						? courtDecisions
						: prevExtras.courtDecisions,
				comments:
					comments !== undefined ? comments : prevExtras.comments,
			};
		});
	};

	return (
		<>
			<div className="carousel-container">
				<div className="carousel-navigation">
					<button onClick={() => setActiveComponent('map')}>
						Regions
					</button>
					<button onClick={() => setActiveComponent('sectors')}>
						Sectors
					</button>
					<button onClick={() => setActiveComponent('extras')}>
						Extras
					</button>
				</div>
				<div className="carousel-content">
					{activeComponent === 'map' && (
						<Map
							selectedCounties={selectedCounties}
							setSelectedCounties={setSelectedCounties}
						/>
					)}
					{activeComponent === 'sectors' && (
						<Sectors
							selectedSectors={selectedSectors}
							handleSectorChange={handleSectorChange}
						/>
					)}
					{activeComponent === 'extras' && (
						<Extras
							selectedExtras={selectedExtras}
							handleExtrasChange={handleExtrasChange}
						/>
					)}
				</div>
			</div>
			<InfoBox
				selectedCounties={selectedCounties}
				selectedSectors={selectedSectors}
				selectedExtras={selectedExtras}
			/>
		</>
	);
};

export default Carousel;
