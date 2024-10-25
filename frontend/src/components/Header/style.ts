import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  height: 60px;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
export { HeaderContainer, Logo, LogoutButton };
