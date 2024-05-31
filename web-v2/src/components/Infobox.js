import React from 'react';

const Infobox = ({
	selectedCounties,
	selectedSectors,
	selectedExtras,
	companySum,
}) => {
	return (
		<>
			<div className="infobox-container">
				<div className="infobox">
					<h3>Andmepaki kokkuvõte</h3>
					<p>Regioonid</p>
					{selectedCounties.length >= 16 ? (
						<p>
							<span>Kogu Eesti</span>
						</p>
					) : (
						selectedCounties.map((region, index) => (
							<p key={index}>
								<span>{region}</span>
							</p>
						))
					)}

					<p>Valdkonnad</p>
					{selectedSectors.length >= 16 ? (
						<p>
							<span>Kogu Eesti</span>
						</p>
					) : (
						selectedSectors.map((sector, index) => (
							<p key={index}>
								<span>{sector}</span>
							</p>
						))
					)}
					<p>Lisasoovid</p>
					{Object.keys(selectedExtras).map((key) => {
						const value = selectedExtras[key];
						if (value !== null) {
							const displayValue =
								typeof value === 'boolean'
									? value
										? 'True'
										: 'False'
									: value;
							return (
								<p key={key}>
									<span>
										{key}: {displayValue}
									</span>
								</p>
							);
						}
						return null; // Skip rendering if the value is null
					})}
					<p>Ettevõtteid kokku: ~{companySum}</p>
				</div>
			</div>
		</>
	);
};

export default Infobox;
