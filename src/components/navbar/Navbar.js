import { Link } from "react-router-dom";
import { Navbar, Nav, Spinner } from "react-bootstrap";

export default ({children}) => {
  console.log("children in navbar", children)
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/children">Children - Upcoming size change: {
 children.children.length >= 1 ?
 
  children.children.sort((c1,c2) => c1.next_size_date - c2.next_size_date)[0].next_size_date.slice(0,10)

 :
<Spinner animation="grow" />
}</Nav.Link>
      </Nav>
    </Navbar>
  );
};
