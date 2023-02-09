import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../public/images/logoo.png';
import logo2 from '../public/images/logo.png';
import "../public/css/Nav.css";

const NavMenu = () => {
    return (
        <div className='navmenu'>
            <Navbar style={{ backgroundColor: "#F2F2F2" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo1} alt="" className='logo' />
                        <img src={logo2} alt="" className='logo2' />
                    </Navbar.Brand>
                    <Nav className="me-auto" style={{ fontWeight: "500" }}>
                        <Nav.Link className='nav-link active' href="#home" style={{ fontWeight: "bolder" }}><strong>Home</strong></Nav.Link>
                        <Nav.Link href="#features">Pages</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Nav className='me-auto button-grp' style={{ marginLeft: "38%", color: "blue" }} >
                        <button style={{ color: "blue", border: "1px solid blue", padding: "5px 20px", borderRadius: "50px", marginLeft: "10%", marginRight: "10px" }} >Login</button> or <button style={{ border: "1px solid blue", marginLeft: "10%", padding: "5px 20px", marginRight: "-20%", borderRadius: "50px", color: "blue" }}>Create Account</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavMenu;
