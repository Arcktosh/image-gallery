import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Search from './Components/Search'
import ImageCard from './Components/Card'
import { Col, Container, Row } from 'react-bootstrap'
import Welcome from './Components/Welcome'

const App = () => {
	const unsplashKey = process.env.REACT_APP_UNSPLASH_KEY
	const [value, setValue] = useState('')
	const [images, setImages] = useState([])

	const handleSearchSubmit = (e) => {
		e.preventDefault()
		fetch(
			`https://api.unsplash.com/photos/random/?query=${value}&client_id=${unsplashKey}`
		)
			.then((res) => res.json())
			.then((data) => {
				setImages([{ ...data, title: value }, ...images])
			})
			.catch((err) => {
				console.error({ err })
			})
		setValue('')
	}

	const handleDeleteCard = (id) => {
		setImages(images.filter((image) => image.id !== id))
	}

	return (
		<>
			<Header />
			<Search value={value} setValue={setValue} onSubmit={handleSearchSubmit} />
			{images.length ? (
				<Container>
					<Row xs={1} md={2} lg={3} xl={4}>
						{images?.map((image, i) => (
							<Col key={i} className="pb-3 mt-4">
								<ImageCard image={image} deleteImage={handleDeleteCard} />
							</Col>
						))}
					</Row>
				</Container>
			) : (
				<Welcome />
			)}
		</>
	)
}

export default App
