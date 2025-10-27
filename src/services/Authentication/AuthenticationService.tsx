import axios from "axios";
import type { SingUpUserModel } from "../../Models/SingUpUserModel";
const API_URL = "http://192.168.1.17:3000/auth/login";

export const AuthenticationService = {
  async Login(username: string, password: string) {
    const res = await axios.post(`${API_URL}`, {
      username: username,
      password: password,
    });
    console.log("usuario logado:" + res.data);
    return res.data;
  },
  async SingUp(data: SingUpUserModel) {
    try {
      const res = await axios.post(`${API_URL}`, {
        name: data.name,
        email: data.email,
        password: data.password,
        country: data.country,
        occupation: data.occupation,
      });
      return res.data;
    } catch (error) {
      console.log("Erro ao cadastrar usuario: " + error);
    }
  },
};
