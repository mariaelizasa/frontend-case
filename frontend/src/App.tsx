import { AuthProvider } from "./context/authContext";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
