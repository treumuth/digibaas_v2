// SidePanel.js
import React, { useEffect } from 'react';
import { useStepper } from './StepperContext';
import { AppShell, Stepper } from '@mantine/core';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Progress, Text, Title } from '@mantine/core';
const SidePanel = () => {
	const {
		activeStep,
		setActiveStep,
		setIsAsideVisible,
		companySum,
		selectedCounties,
		selectedExtras,
		selectedSectors,
	} = useStepper();
	const location = useLocation(); // Get the location object
	const isServicesRoute = location.pathname === '/services'; // Check if the path is '/services'

	useEffect(() => {
		setIsAsideVisible(isServicesRoute);
	}, [isServicesRoute, setIsAsideVisible]);

	return isServicesRoute ? (
		<AppShell.Aside p="lg">
			<Stepper
				active={activeStep}
				onStepClick={(action) => setActiveStep(action)}
				orientation="vertical"
			>
				<Stepper.Step
					label="Step 1"
					description="General information"
				/>
				<Stepper.Step
					label="Step 2"
					description={
						selectedCounties.filter((county) => county !== '')
							.length === 0
							? 'Select regions'
							: selectedCounties
									.filter((county) => county !== '')
									.map((county, index, filteredArray) => (
										<React.Fragment key={index}>
											{county}
											{index < filteredArray.length - 1 && <br />}
										</React.Fragment>
									))
					}
				/>

				<Stepper.Step
					label="Step 3"
					description={
						selectedSectors.length === 0
							? 'Select sectors'
							: selectedSectors.map((sector, index) => (
									<React.Fragment key={index}>
										{sector}
										{index < selectedSectors.length - 1 && <br />}
									</React.Fragment>
							  ))
					}
				/>

				<Stepper.Step
					label="Step 4"
					description={
						Object.values(selectedExtras).every(
							(value) => value === null || value === false
						)
							? 'Select extras'
							: Object.entries(selectedExtras).map(
									([key, value], index, array) => {
										if (
											value === null ||
											(key === 'courtDecisions' && value === false)
										) {
											return null;
										}
										return (
											<React.Fragment key={index}>
												{`${key}: ${value.toString()}`}
												{index < array.length - 1 && <br />}
											</React.Fragment>
										);
									}
							  )
					}
				/>

				<Stepper.Step
					label="Step 5"
					description="Finalize order"
				/>
				{/* Other steps as needed */}
			</Stepper>
			<Progress value={100} />
			<Title order={5}>
				{' '}
				<Text
					span
					c="blue"
					inherit
				>
					{companySum}
				</Text>{' '}
				ettevõtet
			</Title>
			<Title order={5}>
				Paki hind:{' '}
				<Text
					span
					c="blue"
					inherit
				>
					1200€
				</Text>{' '}
			</Title>
		</AppShell.Aside>
	) : (
		<></> // Or null for an empty render
	);
};

export default SidePanel;
