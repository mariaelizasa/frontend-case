import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext";

interface PrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { token } = useAuth();
  const isAuthenticated = token !== null;

  return isAuthenticated ? (
    children ? (
      children
    ) : (
      <Outlet context={token} />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
