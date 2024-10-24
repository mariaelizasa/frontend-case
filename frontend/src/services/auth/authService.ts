import { AuthType } from "../../@types/Auth";
import api from "../api";

export const Auth = async (
  cpf: string,
  password: string
): Promise<AuthType> => {
  try {
    const response = await api.post(`auth`, { cpf, password });

    const { token } = response.data;
    api.defaults.headers.common['Authorization'] = `${token}`;
    localStorage.setItem("token", token);

    return { token, cpf, password };
  } catch (error) {
    console.error("Authentication error!", error);
    throw error;
  }
};
