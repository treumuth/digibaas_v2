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

function BlogCard({ metadata, articlekey, articleimage }) {
	const location = useLocation();
	const relativeUrl = `${location.pathname}/${articlekey}`;
	const image = require(`../public/posts/${metadata.headerimage}`);
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
						src={image}
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
					lineClamp={4}
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
