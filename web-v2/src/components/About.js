import React from 'react';
import {
	AppShell,
	Grid,
	Col,
	Text,
	Center,
	Title,
	Divider,
	Space,
	Image,
	Container,
	Stack,
} from '@mantine/core';

const About = () => {
	return (
		<Container size="md">
			<Grid>
				<Grid.Col span={12}>
					<Center>
						<Title order={5}>About Digibaas</Title>
					</Center>
					<Space h="md" />
					<Text
						size="lg"
						align="center"
					>
						At Digibaas, we are committed to delivering excellence in
						the realm of digital solutions. Our journey began in 2005,
						rooted in the vibrant city of Tartu, Estonia.
					</Text>
					<Space h="md" />
					<Divider />
				</Grid.Col>

				<Grid.Col span={12}>
					<Center>
						<Title order={5}>Our expertise</Title>
						<Image
							src="path-to-your-image.jpg"
							alt="Image representing Digibaas"
						/>
					</Center>
					<Space h="md" />
					<Text
						size="lg"
						align="center"
					>
						With a team of passionate experts, we've been
						revolutionizing the way businesses interact with
						technology, crafting unique experiences that drive
						success.
					</Text>
					<Space h="md" />
				</Grid.Col>

				<Grid.Col span={12}>
					<Divider />
					<Space h="md" />
					<Title
						order={5}
						align="center"
					>
						Our Core Values
					</Title>
					<Space h="md" />
					<Text
						size="lg"
						align="center"
					>
						Innovation, Integrity, and Customer Focus form the pillars
						of our ethos. We believe in creating value through
						continuous learning and adapting to the ever-evolving
						digital landscape.
					</Text>
				</Grid.Col>

				<Grid.Col span={4}>
					<Center direction="column">
						<Stack
							h={300}
							gap={0}
						>
							<Text weight={500}>Asukoht</Text>
							<Text size="xs">Tartu</Text>
							<Text size="xs">Eesti</Text>
						</Stack>
					</Center>
				</Grid.Col>

				<Grid.Col span={4}>
					<Center direction="column">
						<Stack
							h={300}
							gap={0}
						>
							<Text
								size="sm"
								weight={500}
							>
								Võta ühendust
							</Text>
							<Text size="xs">info@digibaas.ee</Text>
							<Text size="xs">Tel: (+372) 52 00883</Text>
						</Stack>
					</Center>
				</Grid.Col>

				<Grid.Col span={4}>
					<Center direction="column">
						<Stack
							h={300}
							gap={0}
						>
							<Text weight={700}>Ettevõte</Text>
							<Text size="xs">Margus Treumuth</Text>
							<Text size="xs">registrikood 10598926</Text>
							<Text size="xs">KMKR EE101018357</Text>
						</Stack>
					</Center>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default About;
