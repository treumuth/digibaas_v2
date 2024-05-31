import React from 'react';
import {
	TextInput,
	NumberInput,
	Checkbox,
	Group,
} from '@mantine/core';

const Extras = ({ selectedExtras, handleExtrasChange }) => {
	return (
		<Group
			direction="row"
			spacing="md"
		>
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
				label="Comments:"
				value={selectedExtras.comments}
				onChange={(e) =>
					handleExtrasChange({ comments: e.target.value })
				}
			/>

			<Checkbox
				label="Court decisions:"
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
		</Group>
	);
};

export default Extras;
