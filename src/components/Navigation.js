import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/Resources">Resources</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/Chat">Chat</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/Crisislines">Crisis lines</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/Booking">Booking</NavLink>


                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigation;