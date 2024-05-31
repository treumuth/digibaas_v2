import React, { useState } from 'react';
import {
	TextInput,
	Button,
	Stack,
	Notification,
} from '@mantine/core';

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
	});

	const handleInputChange = (field) => (event) => {
		setFormData({ ...formData, [field]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Stack align="center">
				<TextInput
					label="Name"
					value={formData.name}
					onChange={handleInputChange('name')}
					required
				/>

				<TextInput
					label="Email"
					value={formData.email}
					onChange={handleInputChange('email')}
					required
					type="email"
				/>

				<TextInput
					label="Phone Number"
					value={formData.phoneNumber}
					onChange={handleInputChange('phoneNumber')}
					required
					type="tel"
				/>
				<Notification title="Your personal information">
					Digibaas will never misuse your personal information.
					<br />
					Your contact info is used strictly for the order only.
				</Notification>
			</Stack>
		</form>
	);
};

export default ContactForm;
