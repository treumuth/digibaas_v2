// SidePanel.js
import React, { useEffect } from 'react';
import { useStepper } from './StepperContext';
import { AppShell, Stepper } from '@mantine/core';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Progress, Text, Title } from '@mantine/core';
const SidePanel = () => {
	const { activeStep, setActiveStep, setIsAsideVisible, companySum } =
		useStepper();
	const location = useLocation(); // Get the location object
	const isServicesRoute = location.pathname === '/services'; // Check if the path is '/services'

	useEffect(() => {
		setIsAsideVisible(isServicesRoute);
	}, [isServicesRoute, setIsAsideVisible]);
	// Conditionally render the Stepper or an empty JSX fragment
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
					description="Select regions"
				/>
				<Stepper.Step
					label="Step 3"
					description="Select sectors"
				/>
				<Stepper.Step
					label="Step 4"
					description="Select extras"
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
