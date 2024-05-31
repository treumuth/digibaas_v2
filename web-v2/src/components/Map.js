import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../App.css';

mapboxgl.accessToken =
	'pk.eyJ1Ijoic2VsbGFmaWVsZGd1eSIsImEiOiJjbG9vdWZzb3UwNDk0MnFwNWFlOTcxeTg4In0._bVIdZb58PUHd9JNY_YRQQ';
const Map = ({ selectedCounties, setSelectedCounties }) => {
	const mapContainerRef = useRef(null);
	const mapRef = useRef(null); // Reference to the map instance

	const [mapInitialized, setMapInitialized] = useState(false); // State variable to track map initialization

	const updateMapLayerDataCondition = () => {
		// Define the filter condition based on selectedCounties
		const filter = ['in', 'MNIMI', ...selectedCounties]; // Replace PROPERTY_NAME with the actual property name

		mapRef.current.setFilter('maakond-1uaf8b-coloroverlay', filter); // Replace 'maakond-1uaf8b-coloroverlay' with the actual layer name

		// Use setPaintProperty to set fill-color and fill-opacity with transitions
		mapRef.current.setPaintProperty(
			'maakond-1uaf8b-coloroverlay',
			'fill-color',
			[
				'case',
				['in', 'MNIMI', ...selectedCounties],
				'rgb(101, 230, 123)', // Color for selected counties
				'rgb(101, 230, 123)', // Default color for unselected counties
			]
		);

		mapRef.current.setPaintProperty(
			'maakond-1uaf8b-coloroverlay',
			'fill-opacity',
			['in', 'MNIMI', ...selectedCounties] ? 0.7 : 0
		);
	};
	useEffect(() => {
		if (!mapRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style:
					'mapbox://styles/sellafieldguy/cloowjdhi00go01nzg6ne3mfi',
				center: [25, 59],
				zoom: 8,
				maxZoom: 8,
			});

			mapRef.current.on('style.load', () => {
				updateMapLayerDataCondition();
				console.log('loaded');
				mapRef.current.addControl(
					new mapboxgl.NavigationControl(),
					'bottom-right'
				);

				mapRef.current.on('click', 'maakond-1uaf8b', (e) => {
					if (e.features.length > 0) {
						const clickedCounty = e.features[0].properties.MNIMI;
						setSelectedCounties((prevCounties) => {
							if (prevCounties.includes(clickedCounty)) {
								return prevCounties.filter(
									(county) => county !== clickedCounty
								);
							} else {
								return [...prevCounties, clickedCounty];
							}
						});
					}
				});
				setMapInitialized(true);
			});
		}
	}, []);

	useEffect(() => {
		if (mapInitialized) {
			updateMapLayerDataCondition();
		}
	}, [selectedCounties]);

	return (
		<>
			<div
				className="map-container"
				ref={mapContainerRef}
			/>
		</>
	);
};

export default Map;
