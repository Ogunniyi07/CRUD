import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Nav, NavItem, NavBarBrand, Container, Navbar, NavbarBrand} from 'reactstrap'

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
        <Container style={{display:"flex", justifyContent:"space-between"}}>
            <NavbarBrand href="/">My Team</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className="btn btn-primary" to="/add">Add User</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}
