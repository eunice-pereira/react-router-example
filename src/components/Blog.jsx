import React from 'react';
import Post from './Post';
import { Link, useRouteMatch, Route } from 'react-router-dom';

const blogPosts = [
	{
		title: 'Blog Post #1',
		content: 'Random text for blog post #1',
	},
	{
		title: 'Blog Post #2',
		content: 'Random text for blog post #2',
	},
	{
		title: 'Blog Post #3',
		content: 'Random text for blog post #3',
	},
];

const Blog = () => {
	const { path, url } = useRouteMatch();
	return (
		<div>
			<h1>This is the blog</h1>
			<nav>
				{blogPosts.map((post, index) => (
					<>
						<Link to={`${url}/${index}`}>{post.title}</Link>
						<br />
					</>
				))}
			</nav>
			<Route exact path={path}>
				<h2>Please choose a blog post.</h2>
			</Route>
			<Route path={`${url}/:id`}>
				<Post posts={blogPosts} />
			</Route>
		</div>
	);
};

export default Blog;
