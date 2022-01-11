import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  import { Link, useHistory } from "react-router-dom";

  
  function Navi() {
    let history = useHistory();
    
  
    return (
      <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to='/'>My React Portfolio</NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to='/search'>Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/saved'>Saved</NavLink>
              </NavItem>
              {/* <NavItem>
                {auth.user ?
                  <NavLink onClick={() => {
                    auth.signout(() => history.push('/'));
                  }}>
                    Log out
                  </NavLink>
                  :
                  <NavLink tag={Link} to='/login'>Log in</NavLink>
                }
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
  
  
  export default Navi;