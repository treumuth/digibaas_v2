import React from 'react';
import {
	TextInput,
	NumberInput,
	Checkbox,
	Stack,
} from '@mantine/core';

const Extras = ({ selectedExtras, handleExtrasChange }) => {
	return (
		<Stack align="center">
			<NumberInput
				label="Annual revenue greater than (EUR):"
				min={0}
				max={1000000000}
				value={selectedExtras.revenue}
				onChange={(value) => handleExtrasChange({ revenue: value })}
			/>

			<NumberInput
				label="Amount of workers (min):"
				min={0}
				max={100000000}
				value={selectedExtras.workers}
				onChange={(value) => handleExtrasChange({ workers: value })}
			/>

			<TextInput
				label="Special requests:"
				value={selectedExtras.comments}
				onChange={(e) =>
					handleExtrasChange({ comments: e.target.value })
				}
			/>

			<Checkbox
				label="Include court decisions"
				checked={selectedExtras.courtDecisions}
				onChange={(event) =>
					handleExtrasChange({
						courtDecisions: event.currentTarget.checked,
					})
				}
			/>

			<TextInput
				label="Exclude mails with domain:"
				value={selectedExtras.excludedDomain}
				onChange={(e) =>
					handleExtrasChange({ excludedDomain: e.target.value })
				}
				placeholder="e.g., example.com"
			/>
		</Stack>
	);
};

export default Extras;
