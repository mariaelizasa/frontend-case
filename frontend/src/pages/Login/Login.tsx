import { useState, ChangeEvent } from "react";
import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import "./style.ts";
import { AppContainer, Button, Input, Main, Title } from "./style";

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAuth = () => {
    console.log({
      cpf,
      password,
    });
  };

  return (
    <AppContainer>
      <Main id="login">
        <img src={logoFullImage} alt="Cora" title="Cora" />
        <Title>Fazer LogIn</Title>
        <Input
          id="cpf"
          placeholder="Insira seu e-mail ou CPF"
          onChange={handleChangeCPF}
        />
        <Input
          id="password"
          placeholder="Digite sua senha"
          type="password"
          onChange={handleChangePassword}
        />
        <Button onClick={handleAuth}>
          Continuar
          <img src={arrowRightImage} alt="Seta para continuar" />
        </Button>
      </Main>
    </AppContainer>
  );
};

export default Login;
