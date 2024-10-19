import { Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.main`
  width: 100%;
  max-width: calc(100% - 50px);
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0 25px;
  font-size: 10px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 36px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 5em;
  font-weight: 700;
  line-height: 1.4em;
`;

const Subtitle = styled.h2`
  font-size: 2.6em;
  line-height: 1em;
  font-weight: 400;
  color: ${(props) => props.theme.colors.main};
`;

const Description = styled.p`
  width: 100%;
  max-width: 550px;
  display: block;
  font-weight: 300;
  text-align: center;
  font-size: 1.8em;
  line-height: 1.4em;
  margin: 15px auto;
  color: ${(props) => props.theme.colors.gray};
`;

const Disclaimer = styled(Description)`
  padding: 15px;
  border-radius: 5px;
  max-width: 450px;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const ButtonsList = styled.ul`
  list-style: none;
  margin-top: 20px;
`;

const ButtonItem = styled.li`
  &:first-child {
    margin-bottom: 10px;
  }
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  font-size: 1.4em;
  text-decoration: none;
  border-radius: 5px;
  min-width: 200px;
  text-align: center;
  color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.main};
`;

export {
  Page,
  Logo,
  Title,
  Subtitle,
  Description,
  Disclaimer,
  ButtonsList,
  ButtonItem,
  ButtonLink,
};
