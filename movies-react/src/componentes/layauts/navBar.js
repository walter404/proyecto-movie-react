import React from "react";
import { Fragment } from "react";


import {Navbar, Nav, Container} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import imagen from "./movi.jpg";
import carrito from "./carrito-de-compras.png";

const NavBarMovies = () => {
    return(
<>
    <Navbar className="navBg" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/" > <img className="logo" src={imagen} alt="Logo"/> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto">
                       <Nav.Link as={Link} to="/" >Menu</Nav.Link>
                       <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                       <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <img className="carrito" src={ carrito } alt="carrito" />
        </Container>
    </Navbar>
        
        <section>
            <Outlet></Outlet>
        </section>

</>
    )
}
export default NavBarMovies;