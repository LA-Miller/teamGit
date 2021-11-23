import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">
          <img
            src={logo}
            width="600px"
            height="154px"
            className="d-inline-block align-top"
            alt="Your Locator Logo"
          />
        </NavbarBrand>
        <Nav className="m-auto github">
          <NavLink href="https://github.com/LA-Miller/teamGit/tree/master">
            GitHub
          </NavLink>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
