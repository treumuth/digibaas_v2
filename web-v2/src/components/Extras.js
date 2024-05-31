import React from 'react';

const Extras = ({ selectedExtras, handleExtrasChange }) => {
	return (
		<div className="extras-container">
			<div className="slider">
				<label>
					Annual revenue greater than (EUR):
					<input
						type="number"
						min="0"
						max="1000000000"
						value={selectedExtras.revenue}
						onChange={(e) =>
							handleExtrasChange({ revenue: e.target.value })
						}
					/>
				</label>
			</div>
			<div className="slider">
				<label>
					Amount of workers (min):
					<input
						type="number"
						min="0"
						max="100000000"
						value={selectedExtras.workers}
						onChange={(e) =>
							handleExtrasChange({ workers: e.target.value })
						}
					/>
				</label>
			</div>
			<div className="slider">
				<label>
					Comments:
					<input
						type="text"
						value={selectedExtras.comments}
						onChange={(e) =>
							handleExtrasChange({ comments: e.target.value })
						}
					/>
				</label>
			</div>
			<div className="slider">
				<label>
					Court decisions:
					<input
						type="checkbox"
						checked={selectedExtras.courtDecisions}
						onChange={() =>
							handleExtrasChange({
								courtDecisions: !selectedExtras.courtDecisions,
							})
						}
					/>
				</label>
			</div>
		</div>
	);
};

export default Extras;
