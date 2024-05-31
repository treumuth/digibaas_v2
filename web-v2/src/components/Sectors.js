import React from 'react';
import { Grid, Col, Card, Image, Text, Center } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

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
		<Grid>
			{logos.map((logo) => (
				<Grid.Col
					span={4}
					key={logo.key}
				>
					{' '}
					{/* Adjust 'span' based on your layout needs */}
					<Card
						shadow="sm"
						p="lg"
						radius="md"
						withBorder
						onClick={() => handleSectorChange(logo.key)}
						style={{ cursor: 'pointer' }}
					>
						<Center style={{ position: 'relative' }}>
							<Image
								src={logo.src}
								alt={logo.key}
								height={80}
								fit="contain"
							/>
							{selectedSectors.includes(logo.key) && (
								<FontAwesomeIcon
									icon={faCircleCheck}
									style={{
										position: 'absolute',
										top: 10,
										right: 10,
										color: 'blue',
										size: '200%',
									}}
								/>
							)}
						</Center>
						<Text
							align="center"
							mt="md"
						>
							{logo.key}
						</Text>
					</Card>
				</Grid.Col>
			))}
		</Grid>
	);
};

export default Sectors;
