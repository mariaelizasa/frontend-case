import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.main`
  width: calc(100% - 50px);
  max-width: 674px;
  margin: 0 auto;
  padding: 97px 87px 87px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.darkMain};
  position: absolute;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 38px;
  color: ${(props) => props.theme.colors.white};
  margin: 84px 0 48px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  padding: 20px 16px;
  margin: 24px 0;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.lighterGray};
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 20px 16px;
  margin-top: 48px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  font-weight: 900;
`;

export { Main, Title, Input, Button, AppContainer };
