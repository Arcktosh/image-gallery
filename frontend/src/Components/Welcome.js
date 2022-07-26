import { Button } from 'react-bootstrap'

const Welcome = () => {
	const welcomeStyle = {
		backgroundColor: '#d8f9ff',
		margin: '2em 10em',
		padding: '4em 2em',
	}
	return (
		<div style={welcomeStyle}>
			<div>
				<h1>Images Galery</h1>
				<p>
					This is a simple application that retrieves photos from the Unsplash
					API. In order to start, enter any search term in the input field
					provided above.
				</p>
				<p>
					<Button variant="primary" href="https://unsplash.com" target="_blank">
						Learn More
					</Button>
				</p>
			</div>
		</div>
	)
}
export default Welcome
