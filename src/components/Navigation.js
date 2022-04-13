import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'reactstrap';

const Navigation = () => {
  return (
    <Navbar color='dark' dark className='mb-2'>
        <Link className='navbar-brand' to='/'>REACT-CRUD</Link>
        <Nav>
            <NavItem>
                <Link className='btn btn-primary' to='/create'>Create Item</Link>
            </NavItem>
        </Nav>
    </Navbar>
  )
};

export default Navigation;
