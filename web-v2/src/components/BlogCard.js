import {
	Card,
	Image,
	Text,
	Button,
	Badge,
	Group,
	Anchor,
} from '@mantine/core';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

function BlogCard({ metadata, articlekey }) {
	const location = useLocation();
	const relativeUrl = `${location.pathname}/${articlekey}`;

	return (
		<div>
			<Card
				shadow="sm"
				padding="lg"
				radius="md"
				withBorder
			>
				<Card.Section>
					<Image
						src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
						height={200}
						alt="Norway"
					/>
				</Card.Section>

				<Group
					justify="space-between"
					mt="md"
					mb="xs"
				>
					<Text fw={500}>{metadata.title} </Text>
					<Badge
						color="pink"
						variant="light"
					>
						Kuum artikkel!
					</Badge>
				</Group>

				<Text
					size="sm"
					c="dimmed"
				>
					{metadata.shortsummary}
				</Text>

				<Link to={relativeUrl}>
					<Button
						variant="light"
						color="blue"
						fullWidth
						mt="md"
						radius="md"
					>
						Loe edasi
					</Button>
				</Link>
			</Card>
		</div>
	);
}
export default BlogCard;
