import React from 'react';
import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';

const Article = () => {
	const [articleContent, setArticleContent] = useState('');
	useEffect(() => {
		import('../posts/test-post/test-post.md').then((res) => {
			fetch(res.default)
				.then((response) => response.text())
				.then((response) => setArticleContent(response))
				.catch((err) => console.log(err));
		});
	}, []);
	return <Markdown>{articleContent}</Markdown>;
};
export default Article;
