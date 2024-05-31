import React from 'react';
import ekraan from '../public/assets/ekraan.png'; // Replace with the actual image path

const Main = () => {
	const textWithBreak =
		'E-POSTI AADRESSIDE ANDMEBAAS\n330 000 Eesti asutuse kontaktid'; // Include '\n' where you want line breaks
	const lines = textWithBreak.split('\n');

	return (
		<div className="main-container">
			<div className="centered-text">
				{lines.map((line, index) => (
					<React.Fragment key={index}>
						{line}
						<br />
					</React.Fragment>
				))}
			</div>
			<img
				src={ekraan}
				alt="Centered Image"
			/>
		</div>
	);
};

export default Main;
