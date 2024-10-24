import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { TransactionsType } from "../@types/Transactions";
import { getAllTransactions } from "../services/transactions/transactionsService";

interface TransactionsContextProps {
  transactions: TransactionsType | null;
  fetchTransactions: () => void;
}

const TransactionsContext = createContext<TransactionsContextProps | undefined>(
  undefined
);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionsType | null>(
    null
  );
  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await getAllTransactions(token);
      if (response) {
        setTransactions(response);
      }
    } catch (error) {
      console.error("Error to get all transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider"
    );
  }
  return context;
};
