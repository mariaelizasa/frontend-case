import { AuthProvider } from "./context/authContext";
import { TransactionsProvider } from "./context/transactionsContext";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <AuthProvider>
        <TransactionsProvider>
          <GlobalStyle />
          <AppRoutes />
        </TransactionsProvider>
      </AuthProvider>
    </>
  );
};

export default App;
