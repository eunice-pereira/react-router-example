# React Router Example

Initial set up. After creating React app, need to install `react-router-dom` to build router components.

```sh
npx create-react-app router-example
cd router-example
npm install react-router-dom
mkdir src/components
npm start
```

### Routers will help:

- Set up a menu of links to navigate to different screens
- Create `Back` and `Forward` buttons
- Call a function to go to a specific part of your app.

### Conceptually...

- Routers organize Components into screens or pages (i.e. Login, Profile, News Feed)

- React Router chooses which Component to show based on the address in the browser's URL bar. In this way, it is a simulation of a multi-page website or a backend app.

### React Router components

`<Router>`

- the "top-level" component. All following components will be nested inside.
- it coordinates with other Router components

`<Link>`

- works like a smarter <a> tag. Talks to React Router and tells it to display a different set of Components.
- Unlike <a> tags, a <Link> tag will only navigate within the React app. (That is, it will update the value in the address bar, but it will not go to a different website.)

`<Route>`

- associates your Components with an address
- the address is how <Link> tells React Router what Components to display.
- Add `exact` prop to Route for Home it does not follow partial matches of other Routes.

`<Switch>`

- gives a convenient way to show a Component, while hiding others.

## Summary:

- React Router helps organize groups of Components into pages (or screens) that are shwon at a URL path.
- Router manages URL change Events, making sure that `<Link>` Components only navigate within your React app.
- Corresponding `<Route>` Components match sepcific URL paths and render your Components.
- Usually, Route components will be wrapped with `<Switch>`, which renders first matching Route.

### Dynamic URL paths

- Route Components also use dynamic URL paths.
- Placeholders in string serve as variable names.
- Rendered Components can access values via useParams()
- To avoid hard-coding path information in your Components, the useRouteMatch() hook can tell you the matched path and the current url.

```sh
import { useParams } from 'react-router-dom';

const Post = (props) => {
	const { id } = useParams();
	const post = props.posts[id];
	return (
		<article>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</article>
	);
};

```
