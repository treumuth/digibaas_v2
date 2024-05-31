import React, { useState } from 'react';
import { TextInput, Button, Group } from '@mantine/core';

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
			<Group
				direction="column"
				spacing="md"
			>
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
			</Group>
		</form>
	);
};

export default ContactForm;
