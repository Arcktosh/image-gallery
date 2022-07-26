import { Container, Nav, Navbar } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/logo.svg'

const NavbarStyle = {
	backgroundColor: '#eee',
}

const Header = () => {
	return (
		<Navbar style={NavbarStyle} variant="light">
			<Container>
				<Navbar.Brand href="/">
					<Logo style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					></Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
