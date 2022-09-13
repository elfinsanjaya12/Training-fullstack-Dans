import { Navigate, Route, Routes } from 'react-router-dom';

import { MenusRoute } from './menu.route';

import NavBar from '../components/Navbar';

import { Container } from 'react-bootstrap';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route
          path='menus/*'
          element={
            <>
              <MenusRoute />
            </>
          }
        />
        <Route
          path='*'
          element={
            <Container className='mt-3'>
              <h1>Page not found</h1>
            </Container>
          }
        />
        <Route path='' element={<Navigate to='/menus' replace={true} />} />
      </Route>
    </Routes>
  );
}
