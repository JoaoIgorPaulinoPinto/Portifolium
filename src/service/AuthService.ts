// AuthService.ts
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:3000";

export const AuthService = {
  async exchangeCodeForToken(code: string) {
    const res = await axios.get(`${API_URL}/auth/gitresponse?code=${code}`, {
      withCredentials: true,
    });
    return res.data.token.access_token;
  },

  saveToken(token: string) {
    Cookies.set("git_auth_token", token, {
      expires: 7,
      sameSite: "Lax",
      secure: false,
    });
  },

  getToken() {
    return Cookies.get("git_auth_token") || null;
  },

  async getUserData() {
    const token = AuthService.getToken();
    const user = await axios.get(`${API_URL}/user`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  },
};
