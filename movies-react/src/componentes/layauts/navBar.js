import { Fragment } from "react";


//Outlet
import {Navbar, Nav, Container} from "react-bootstrap";
import {Outlet,Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


import imagen from "./movi.jpg";

const NavBar = () => {

    
    return(
<>
    <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" > <img className="logo" src={imagen} alt="Logo"/> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Menu</Nav.Link>                    
                        <Nav.Link as={Link} to='/categoria/nuevo'>nuevo</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/accion'>accion</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
                
        <CartWidget/>
        </Container>  
    </Navbar>
    <section className="section">
            <Outlet></Outlet>                                                     
    </section>
        

</>
    )
}
export default NavBar;