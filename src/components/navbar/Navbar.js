import { Link } from "react-router-dom";
import { Modal, Navbar, Nav, Spinner, Button, FormControl } from "react-bootstrap";

export default (children) => {
  console.log("children in navbar", children)
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
        <Nav.Link as={Link} to="/usage">Usage</Nav.Link>
        <Nav.Link as={Link} to="/children">Children {
 children.length >= 1 ?
 <span>- Upcoming size change {
  children.sort((c1,c2) => c1.next_size_date - c2.next_size_date)[0].slice(0,10)
}</span>
 :
<Spinner animation="grow" />
}</Nav.Link>
      </Nav>
    </Navbar>
  );
};
