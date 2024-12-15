import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";

export default function index() {
  return (
    <>
      <Navbar expand='lg' className='navbar-custom w-100 text-white p-3'>
        <Container fluid>
          <Navbar.Brand href='/' className='text-white'>
            Lateef Sanni
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar'
            className='custom-toggle'
          />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                Lateef Sanni
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='mobile-body'>
              <Nav className='justify-content-end flex-grow-1'>
                <NavLink to='/' className='nav-link text-white'>
                  Home
                </NavLink>
                <NavLink to='about' className='nav-link text-white'>
                  About
                </NavLink>
                <NavLink to='publications' className='nav-link text-white'>
                  Publication
                </NavLink>
                <NavLink to='contact' className='nav-link text-white'>
                  Contact Me
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
