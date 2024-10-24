
import { TransactionsType } from "../../@types/Transactions";
import api from "../api";

export const getAllTransactions = async (
  token: string
): Promise<TransactionsType | null> => {
  try {
    const response = await api.get<TransactionsType>("transactions", {
      headers: {
      'token-access': token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get all transactions:", error);
    throw error;
  }
};
