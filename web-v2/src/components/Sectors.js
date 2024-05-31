import React from 'react';

// Import your logos as objects with keys
const logos = [
	{
		key: 'Avalik-haldus',
		src: require('../public/logos/Avalik-haldus.png'),
	},
	{
		key: 'Ehitus',
		src: require('../public/logos/Ehitus.png'),
	},
	{
		key: 'Energia',
		src: require('../public/logos/Energia.png'),
	},
	{
		key: 'Finants',
		src: require('../public/logos/Finants.png'),
	},
	{
		key: 'Haridus',
		src: require('../public/logos/Haridus.png'),
	},
	{
		key: 'Hulgi-ja-jaekaubandus',
		src: require('../public/logos/Hulgi-ja-jaekaubandus.png'),
	},
	{
		key: 'Info-ja-side',
		src: require('../public/logos/Info-ja-side.png'),
	},
	{
		key: 'Kinnisvara',
		src: require('../public/logos/Kinnisvara.png'),
	},
	{
		key: 'Kunst-meelelahutus',
		src: require('../public/logos/Kunst-meelelahutus.png'),
	},
	{
		key: 'Majutus-ja-toitlustus',
		src: require('../public/logos/Majutus-ja-toitlustus.png'),
	},
	{
		key: 'Pollumajandus',
		src: require('../public/logos/Pollumajandus.png'),
	},
	{
		key: 'Teadus',
		src: require('../public/logos/Teadus.png'),
	},
	{
		key: 'Tervishoid',
		src: require('../public/logos/Tervishoid.png'),
	},
	{
		key: 'Tootlev-toostus',
		src: require('../public/logos/Tootlev-toostus.png'),
	},
	{
		key: 'Transport',
		src: require('../public/logos/Transport.png'),
	},
];
const Sectors = ({ selectedSectors, handleSectorChange }) => {
	return (
		<div className="sectors-container">
			<div className="logo-grid">
				{logos.map((logo) => (
					<div
						key={logo.key}
						className="logo-item"
					>
						<button
							className={`sector-button ${
								selectedSectors.includes(logo.key) ? 'active' : ''
							}`}
							onClick={() => handleSectorChange(logo.key)}
						>
							<img
								src={logo.src}
								alt={logo.key}
							/>
							<p>{logo.key}</p>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sectors;
