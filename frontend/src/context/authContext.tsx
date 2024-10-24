import { createContext, useState, ReactNode, useContext } from "react";
import { Auth } from "../services/auth/authService";

interface AuthContextProps {
  token: string | null;
  makeLogin: (cpf: string, password: string) => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const makeLogin = (cpf: string, password: string) => {
    Auth(cpf, password)
      .then(({ token }) => {
        setToken(token);
      })
      .catch((error) => {
        console.error("Erro na autenticação:", error);
        if (error.response?.status === 401) {
          setError("Usuário ou senha incorretos.");
        } else {
          setError("Erro ao tentar autenticar. Tente novamente.");
        }
      });
  };

  return (
    <AuthContext.Provider value={{ token, makeLogin, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
