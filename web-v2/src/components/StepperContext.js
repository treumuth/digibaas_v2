// StepperContext.js
import React, {
	createContext,
	useState,
	useCallback,
	useContext,
	useEffect,
} from 'react';

const StepperContext = createContext(null);

export const useStepper = () => useContext(StepperContext);

export const StepperProvider = ({ children }) => {
	const [isAsideVisible, setIsAsideVisible] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const [selectedSectors, setSelectedSectors] = useState([]);
	const [contactForm, setContactForm] = useState();
	const [selectedCounties, setSelectedCounties] = useState(['']);
	const [selectedExtras, setSelectedExtras] = useState({
		workers: null,
		revenue: null,
		comments: null,
		courtDecisions: false,
		excludedDomain: null,
	});
	const [companySum, setCompanySum] = useState();

	// Logic to handle changes in steps
	const handleStepChange = useCallback((step) => {
		setActiveStep(step);
	}, []);

	// Handle sector change
	const handleSectorChange = (sector) => {
		setSelectedSectors((prevSectors) =>
			prevSectors.includes(sector)
				? prevSectors.filter((s) => s !== sector)
				: [...prevSectors, sector]
		);
	};
	const reqHeaders = new Headers();
	reqHeaders.append('Content-Type', 'application/json');

	const submitOrder = () => {
		const payload = JSON.stringify({
			...contactForm, // assuming contactForm contains fields like name, email, phoneNumber
			workers: selectedExtras.workers,
			revenue: selectedExtras.revenue,
			comments: selectedExtras.comments,
			courtDecisions: selectedExtras.courtDecisions,
			excludedDomain: selectedExtras.excludedDomain,
			piirkond: selectedCounties.filter((county) => county !== ''), // filter out any empty strings
			yld_tegevus: selectedSectors,
		});
		const requestOptions = {
			method: 'POST',
			headers: reqHeaders,
			body: payload,
			redirect: 'follow',
		};
		console.log(payload);
		// Make the POST request
		fetch('https://digibaas.ee/tellimus.php', requestOptions)
			.then((response) => {
				if (!response.ok) {
					console.error('Server error:', response.statusText);
					return;
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				// Handle the response data here, e.g., update your component state with the received data
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	// Handle extras change
	const handleExtrasChange = (extras) => {
		setSelectedExtras((prevExtras) => ({
			...prevExtras,
			...extras,
		}));
	};

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
	// Fetch company sum based on selected criteria

	// Provide the context value
	const contextValue = {
		activeStep,
		setActiveStep: handleStepChange,
		selectedSectors,
		handleSectorChange,
		selectedCounties,
		setSelectedCounties,
		selectedExtras,
		handleExtrasChange,
		companySum,
		isAsideVisible,
		setIsAsideVisible,
		contactForm,
		setContactForm,
		submitOrder,
	};

	return (
		<StepperContext.Provider value={contextValue}>
			{children}
		</StepperContext.Provider>
	);
};
