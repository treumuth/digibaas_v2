import React from 'react';
import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, SimpleGrid } from '@mantine/core';
import { useLanguage } from './LanguageContext';
const Article = () => {
	const { language, changeLanguage } = useLanguage();
	const { id } = useParams();
	const [articleContent, setArticleContent] = useState('');
	useEffect(() => {
		import(`../posts/${id}/${id}.md`).then((res) => {
			fetch(res.default)
				.then((response) => response.text())
				.then((response) => setArticleContent(response))
				.catch((err) => console.log(err));
		});
	}, []);
	return (
		<>
			<Container>
				<Markdown>{articleContent}</Markdown>
			</Container>
		</>
	);
};
export default Article;
