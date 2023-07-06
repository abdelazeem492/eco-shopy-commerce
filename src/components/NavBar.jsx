import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BasicExample() {
	const cartLength = useSelector((state) => state?.cart?.length);

	return (
		<Navbar expand='sm' className='bg-white shadow' fixed='top'>
			<Container>
				<Navbar.Brand href='/' className='fs-4 me-auto'>
					ECO-SHOPY
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Link to={"/"} className='fs-6 active nav-link'>
							Home
						</Link>
						<Link to={"/products"} className='fs-6 nav-link'>
							Products
						</Link>
					</Nav>
					<Nav className='ms-auto d-flex justify-content-between gap-2'>
						<Link to={"/cart"} className='cart-btn'>
							<i className='bi bi-cart-fill'></i>{" "}
							{cartLength ? <span>{cartLength}</span> : ""}
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default BasicExample;
