import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppShell } from '@mantine/core';

const SidePanel = () => {
	return (
		<>
			<AppShell.Aside p="md">Aside</AppShell.Aside>
		</>
	);
};

export default SidePanel;
