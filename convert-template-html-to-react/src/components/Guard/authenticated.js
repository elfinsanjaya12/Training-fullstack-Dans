import { Navigate, Outlet } from 'react-router-dom';

export function AuthenticatedGuardRoute({ children }) {
  let token = window.localStorage.getItem('token');

  if (!token) return <Navigate to='/signin' replace={true} />;

  return children || <Outlet />;
}
