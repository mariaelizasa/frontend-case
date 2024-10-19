import logoImage from "../../assets/logo.svg";
import "../../App.css";
import {
  ButtonItem,
  ButtonLink,
  ButtonsList,
  Description,
  Disclaimer,
  Logo,
  Page,
  Subtitle,
  Title,
} from "./style";

const Home = () => {
  return (
    <Page>
      <div>
        <header>
          <Logo src={logoImage} alt="Cora" title="Cora" />
          <Title>Hey There &#128075;</Title>
          <Subtitle>Tenha um ótimo teste!!!</Subtitle>
        </header>
        <section>
          <Description>
            <strong>Vamos começar?</strong> Como você faria os botões abaixo
            abrirem as suas respectivas páginas? (Comece pela{" "}
            <strong>TODO LIST</strong>, pois nela contem os próximos passos)
          </Description>
          <Disclaimer>
            &#9888; Você pode encontrar alguns <strong>erros</strong> no meio do
            caminho, não desanime e fique atento para conseguir{" "}
            <strong>visualizar</strong> e <strong>renderizar</strong> as
            páginas.
          </Disclaimer>
        </section>
        <footer>
          <ButtonsList>
            <ButtonItem>
              <ButtonLink to="/todo-list">TO-DO LIST</ButtonLink>
            </ButtonItem>
            <ButtonItem>
              <ButtonLink to="/ibanking">IBANKING</ButtonLink>
            </ButtonItem>
          </ButtonsList>
        </footer>
      </div>
    </Page>
  );
};

export default Home;
