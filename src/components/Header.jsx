import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="shadow">
      <Navbar.Brand as={Link} to="/">
        🏡 فروشگاه
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/shop">
          🛒 فروشگاه
        </Nav.Link>
        <Nav.Link as={Link} to="/cart">
        🛍️سبد خرید ({cart.length})
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
