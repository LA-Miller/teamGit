import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
    <header>
        <Navbar style={{backgroundColor: '#C6ECF6'}} className='header'>
            <NavbarBrand href='/'></NavbarBrand>
            <img src="/logo.svg"
            width="307"
            height="154"
            className="d-inline-block align-top"
            alt="Your Locator Logo"
            />
            <Nav className='ml-auto' navbar>
                <NavLink href='https://github.com/LA-Miller/teamGit/tree/master'>GitHub</NavLink>
            </Nav>
        </Navbar>
    </header>
    
    );
};

export default Header;