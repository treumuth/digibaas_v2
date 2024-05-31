import React, { useEffect, useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import BlogCard from './BlogCard';

// Create a context for the /posts directory
const blogContext = require.context(
	'../posts',
	true,
	/\.\/.+\/.+\.(json|md)$/
);

const Blog = () => {
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		const fetchContent = async () => {
			const postFiles = blogContext.keys();

			const postsArray = await Promise.all(
				postFiles.map(async (postFile) => {
					const folder = postFile
						.replace('./', '')
						.replace(/\.(json|md)$/, '')
						.split('/')[0];

					let postObject = blogPosts.find(
						(post) => Object.keys(post)[0] === folder
					);

					if (!postObject) {
						postObject = {};
						postObject[folder] = {
							metadata: null,
							content: null,
						};
					}

					if (postFile.endsWith('.json')) {
						const metadata = require(`../posts/${folder}/${folder}.json`);
						postObject[folder].metadata = metadata;
					} else if (postFile.endsWith('.md')) {
						const contentModule = await import(
							`!!raw-loader!../posts/${folder}/${folder}.md`
						);
						postObject[folder].content = contentModule.default;
					}

					return postObject;
				})
			);

			const mergedData = postsArray.reduce((result, current) => {
				const key = Object.keys(current)[0]; // Assuming each object has only one key
				const existingObject = result.find(
					(obj) => Object.keys(obj)[0] === key
				);

				if (existingObject) {
					// Merge metadata and content
					existingObject[key].metadata =
						existingObject[key].metadata || current[key].metadata;
					existingObject[key].content =
						existingObject[key].content || current[key].content;
				} else {
					// If the key doesn't exist in the result array, add the current object
					result.push(current);
				}

				return result;
			}, []);

			setBlogPosts(mergedData);
		};

		fetchContent();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Container size="xl">
			<SimpleGrid
				cols={2}
				align="center"
			>
				{blogPosts.map((postObject, index) => {
					const postKey = Object.keys(postObject)[0]; // Assuming there is only one key in each object

					return (
						<BlogCard
							key={postKey}
							metadata={postObject[postKey].metadata}
						/>
					);
				})}
			</SimpleGrid>
		</Container>
	);
};

export default Blog;
