import React from 'react';
import {
	Container,
	Group,
	Text,
	Button,
	SimpleGrid,
	Card,
	List,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageContext';

const Main = () => {
	const { language, changeLanguage } = useLanguage();
	const { t } = useTranslation();
	const lines = t('landing_title').split('\n');

	const customTextStyle = {
		fontSize: '76px',
		letterSpacing: '-4.4px',
		marginTop: '100px',
		// Add any additional styles as needed
	};
	const andmedOnSeisuga = 'Andmed on seisuga 31. mai 2023';

	return (
		<>
			<Container size="xl">
				<Text
					fw={700}
					size="xl"
					ta="center"
					style={customTextStyle}
				>
					{lines.map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br />
						</React.Fragment>
					))}
				</Text>
				<Text
					fw={400}
					size="lg"
					style={{ paddingLeft: '100px', paddingRight: '100px' }}
				>
					{t('landing_content')}
				</Text>
				<Group justify="center">
					<Button
						radius={10}
						style={{
							justify: 'center',
							marginTop: '25px',
						}}
						rightSection={
							<FontAwesomeIcon icon={faArrowAltCircleRight} />
						}
					>
						{t('try_now')}
					</Button>
				</Group>
			</Container>
			<Container>
				<SimpleGrid cols={2}>
					<Card
						padding="lg"
						radius="md"
					>
						<Group
							justify="space-between"
							mt="md"
							mb="xs"
						>
							<Text fw={600}>Andmebaasi kirjeldus</Text>
						</Group>

						<Text size="sm">
							{andmedOnSeisuga}
							<List>
								<List.Item>registrikood;</List.Item>
								<List.Item>juriidilise isiku nimi;</List.Item>
								<List.Item>
									e-posti aadressid (eraldatud komaga);
								</List.Item>
								<List.Item>
									telefoninumbrid (eraldatud komaga);
								</List.Item>
								<List.Item>aadress;</List.Item>
								<List.Item>
									peamise tegevusvaldkonna nimetus eesti keeles;
								</List.Item>
								<List.Item>riiklikud maksud;</List.Item>
								<List.Item>tööjõumaksud;</List.Item>
								<List.Item>käive;</List.Item>
								<List.Item>
									juhatuse liikme nimi ja isikukood;
								</List.Item>
								<List.Item>töötajate arv;</List.Item>
								<List.Item>setotud kohtulahendid;</List.Item>
							</List>
						</Text>
					</Card>
					<Card
						padding="lg"
						radius="md"
					>
						<Group
							justify="space-between"
							mt="md"
							mb="xs"
						>
							<Text fw={600}>Andmete kvaliteet</Text>
						</Group>

						<Text size="sm">{t('data_quality_content')}</Text>
					</Card>
				</SimpleGrid>
				<Group justify="center">
					<Text style={{ fontSize: '42px' }}>Tellimine </Text>
					<Text
						size="sm"
						style={{ paddingLeft: '50px', paddingRight: '50px' }}
					>
						{t('ordering_content')}
					</Text>
				</Group>
			</Container>
		</>
	);
};

export default Main;
