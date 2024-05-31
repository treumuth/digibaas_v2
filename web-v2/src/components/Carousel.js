import { useState, useEffect } from 'react';
import { Stepper, Button, Group, Container } from '@mantine/core';
import Map from './Map';
import Sectors from './Sectors';
import InfoBox from './Infobox';
import Extras from './Extras';
import { useLanguage } from './LanguageContext';
const Carousel = () => {
	const [active, setActive] = useState(0);
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	const { language, changeLanguage } = useLanguage();
	const [selectedSectors, setSelectedSectors] = useState([]);
	const [selectedCounties, setSelectedCounties] = useState(['']);
	const [selectedExtras, setSelectedExtras] = useState({
		workers: null,
		revenue: null,
		comments: null,
		courtDecisions: false,
	});
	const [companySum, setCompanySum] = useState();
	const reqHeaders = new Headers();
	reqHeaders.append('Content-Type', 'application/json');

	useEffect(() => {
		const timerId = setTimeout(() => {
			// Define the POST request body based on the state variables
			const requestBody = JSON.stringify({
				tootajaid: selectedExtras.workers || 0,
				piirkond: selectedCounties.filter((county) => county !== ''),
				yld_tegevus: selectedSectors,
			});
			const requestOptions = {
				method: 'POST',
				headers: reqHeaders,
				body: requestBody,
				redirect: 'follow',
			};

			// Make the POST request
			fetch('https://digibaas.ee/kirjete_arv', requestOptions)
				.then((response) => {
					if (!response.ok) {
						console.error('Server error:', response.statusText);
						return;
					}
					return response.json();
				})
				.then((data) => {
					setCompanySum(data.kirjete_arv);
					// Handle the response data here, e.g., update your component state with the received data
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		}, 2000);

		// Cleanup the timer when the component unmounts or when any of the specified variables change
		return () => {
			clearTimeout(timerId);
		};
	}, [selectedSectors, selectedCounties, selectedExtras]);
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
			<Container>
				<Stepper
					active={active}
					onStepClick={setActive}
				>
					<Stepper.Step
						label="Sissejuhatus"
						description="Sissejuhatus"
					>Pane siin enda ettevõtete pakk kokku, valida saab regiooni, valdkonna ja muude faktorite alusel</Stepper.Step>
					<Stepper.Step
						label="Regioonid"
						description="Vali regioonid"
					>
						<Map
							selectedCounties={selectedCounties}
							setSelectedCounties={setSelectedCounties}
						/>
					</Stepper.Step>
					<Stepper.Step
						label="Sektorid"
						description="Vali sektorid"
					>
						<Sectors
							selectedSectors={selectedSectors}
							handleSectorChange={handleSectorChange}
						/>
					</Stepper.Step>
					<Stepper.Step
						label="Lisad"
						description="Vali lisad"
					>
						<Extras
							selectedExtras={selectedExtras}
							handleExtrasChange={handleExtrasChange}
						/>
					</Stepper.Step>
					<Stepper.Completed>
						Completed, click back button to get to previous step
					</Stepper.Completed>
				</Stepper>

				<Group
					justify="center"
					mt="xl"
				>
					<Button
						variant="default"
						onClick={prevStep}
					>
						Back
					</Button>
					<Button onClick={nextStep}>Next step</Button>
				</Group>
			</Container>

			<InfoBox
				selectedCounties={selectedCounties}
				selectedSectors={selectedSectors}
				selectedExtras={selectedExtras}
				companySum={companySum}
			/>
		</>
	);
};

export default Carousel;
