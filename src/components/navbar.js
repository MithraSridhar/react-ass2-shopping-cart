import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() { 

    function LoadCart(){
        return(
            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
        );
        }
    
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container1">
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
   
      <Container className="container2">
      <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit"  >
                        {/* <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"> */}
                        <i className="fa-solid fa-cart-shopping fa-xs" ></i>
                        &nbsp;
                            Cart
                            &nbsp;   
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
      </form>
      </Container>  
    </Navbar>
  );
}


export default NavBar;