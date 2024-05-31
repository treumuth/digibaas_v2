// Carousel.js
import React from 'react';
import { useStepper } from './StepperContext';
import { Container } from '@mantine/core';
import Map from './Map';
import Sectors from './Sectors';
import Extras from './Extras';
import { GeneralInfo } from './GeneralInfo';
import { ContactForm } from './ContactForm';
const Carousel = () => {
	const {
		activeStep,
		selectedCounties,
		setSelectedCounties,
		selectedSectors,
		handleSectorChange,
		selectedExtras,
		handleExtrasChange,
		contactForm,
		setContactForm
	} = useStepper();

	return (
		<Container
			fluid
			h={50}
		>
			{/* Other content based on the active step */}
			{activeStep === 0 && <GeneralInfo></GeneralInfo>}
			{activeStep === 1 && (
				<Map
					selectedCounties={selectedCounties}
					setSelectedCounties={setSelectedCounties}
				/>
			)}
			{activeStep === 2 && (
				<Sectors
					selectedSectors={selectedSectors}
					handleSectorChange={handleSectorChange}
				/>
			)}
			{activeStep === 3 && (
				<Extras
					selectedExtras={selectedExtras}
					handleExtrasChange={handleExtrasChange}
				/>
			)}
			{activeStep === 4 && <ContactForm
				contactForm={contactForm}
				setContactForm={setContactForm}
			/>}
		</Container>
	);
};

export default Carousel;
