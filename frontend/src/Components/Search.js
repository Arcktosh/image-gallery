import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Search = ({ value, setValue, onSubmit }) => {
	return (
		<Container className="mt-4">
			<Row className="justify-content-center">
				<Col xs={12} md={8} lg={6}>
					<Form onSubmit={onSubmit}>
						<Row>
							<Col xs={9}>
								<Form.Control
									type="text"
									placeholder="Search new image..."
									value={value}
									onChange={(e) => setValue(e.target.value)}
								/>
							</Col>
							<Col>
								<Button variant="primary" type="submit">
									Search
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}
export default Search
