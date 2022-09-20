import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from '../components/Navbar';
import Signin from '../pages/Signin';
import { MenusRoute } from './menu.route';
import { OrdersRoute } from './order.route';

import {
  AuthenticatedGuardRoute,
  NotAuthenticatedGuardRoute,
} from '../components/Guard';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='signin'
        element={
          <NotAuthenticatedGuardRoute>
            <Signin />
          </NotAuthenticatedGuardRoute>
        }
      />
      <Route path='/' element={<NavBar />}>
        <Route
          path='menus/*'
          element={
            <AuthenticatedGuardRoute>
              <MenusRoute />
            </AuthenticatedGuardRoute>
          }
        />
        <Route
          path='orders/*'
          element={
            <AuthenticatedGuardRoute>
              <OrdersRoute />
            </AuthenticatedGuardRoute>
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
