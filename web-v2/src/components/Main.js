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
	const { t } = useTranslation();
	const { language, changeLanguage } = useLanguage();
	const lines = t('landing_title').split('\n');
	const customTextStyle = {
		fontSize: '76px',
		letterSpacing: '-4.4px',
		marginTop: '100px',
		// Add any additional styles as needed
	};
	const descItems = t('database_desc_list', { returnObjects: true });
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
							<Text fw={600}>{t('database_desc_title')}</Text>
						</Group>

						<Text size="sm">
							{t('data_date')}
							<List>
								{descItems.map((item, index) => (
									<List.Item key={index}>{item}</List.Item>
								))}
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
							<Text fw={600}>{t('data_quality_title')}</Text>
						</Group>

						<Text size="sm">{t('data_quality_content')}</Text>
					</Card>
				</SimpleGrid>
				<Group justify="center">
					<Text fw={600}>{t('ordering_title')}</Text>
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
