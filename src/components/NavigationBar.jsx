import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer} from "react-router-bootstrap";


export function Navigationbar(){
   return(
    <Navbar>
      <Container>
      <Navbar.Brand href="#home">AeroEase</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Nav>
                <LinkContainer to="/customerlist">
                     <Nav.Link>customerlist</Nav.Link>
               </LinkContainer>
           </Nav>
      </Container>
    </Navbar>
   );
}

// export function Navigationbar() {
//   return (
//     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#home">AeroEase</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//              <LinkContainer to="/">
//              <Nav.Link>Home</Nav.Link>
//              </LinkContainer>

//              <LinkContainer to="/About">
//              <Nav.Link>About Us</Nav.Link>
//              </LinkContainer>

//              <LinkContainer to="/Login">
//              <Nav.Link>Login</Nav.Link>
//              </LinkContainer>

//              <LinkContainer to="/Registration">
//              <Nav.Link>Register</Nav.Link>
//              </LinkContainer>

//              
          
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Click Me</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Login/Register
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">My Bookings</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Blog
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

    