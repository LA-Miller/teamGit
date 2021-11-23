import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">
          <img
            src={logo}
            width="307px"
            height="154px"
            className="d-inline-block align-top"
            alt="Your Locator Logo"
          />
        </NavbarBrand>
        <Nav>
          <NavLink href="https://github.com/LA-Miller/teamGit/tree/master">
            GitHub
          </NavLink>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
