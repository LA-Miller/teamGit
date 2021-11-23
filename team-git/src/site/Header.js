import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand className="logo" href="/">
          <img
            src={logo}
           
            alt="Your Locator Logo"
          />
        </NavbarBrand>
        <Nav className=" github m-auto">
          <NavLink href="https://github.com/LA-Miller/teamGit/tree/master">
            GitHub
          </NavLink>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
