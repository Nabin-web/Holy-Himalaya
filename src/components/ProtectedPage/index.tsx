// import { Navigate, useLocation } from 'react-router-dom';

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  // const location = useLocation();
  // const token = localStorage.getItem('token');

  // if (!token) {
  //   return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  // }
  return <>{children}</>;
};

export default ProtectedPage;
