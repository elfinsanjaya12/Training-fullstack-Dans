import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLink from '../NavLink';
import { Outlet, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className='justify-content-end'>
            <NavLink action={() => handleNavigate('/menus')}>Menu</NavLink>
            <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
