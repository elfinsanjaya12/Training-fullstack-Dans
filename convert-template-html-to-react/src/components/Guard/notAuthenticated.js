import { Navigate, Outlet } from 'react-router-dom';

export function NotAuthenticatedGuardRoute({ children }) {
  let token = localStorage.getItem('token');

  if (token) return <Navigate to='/' replace={true} />;

  return children || <Outlet />;
}
