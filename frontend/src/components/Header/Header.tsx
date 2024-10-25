import { useLocation } from "react-router-dom";
import logoImage from "../../assets/cora-logo.webp";
import { useAuth } from "../../context/authContext";
import { HeaderContainer, Logo, LogoutButton } from "./style";

const Header = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderContainer>
      <Logo src={logoImage} alt="Logo" />
      {location.pathname === "/transactions" && (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
