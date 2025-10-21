// LoginButton.tsx
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AuthService } from "../../service/AuthService";
import useUser from "../../store/user.store";

import "./login-buttom.css";

export default function LoginButton() {
  const { user, setUser } = useUser();
  const [code, setCode] = useState<string | null>(null);

  const handleLogin = async (authCode: string) => {
    try {
      const accessToken = await AuthService.exchangeCodeForToken(authCode);
      AuthService.saveToken(accessToken);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode) {
      setCode(urlCode);
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  useEffect(() => {
    const token = AuthService.getToken();
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await AuthService.getUserData();
        setUser({
          id: res.data.id,
          username: res.data.login,
          email: res.data.email,
          avatar_url: res.data.avatar_url,
          repos: res.data.repos_url,
        });
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (code && !AuthService.getToken()) {
      handleLogin(code);
    }
  }, [code]);

  return (
    <div className="github-badge">
      {!AuthService.getToken() ? (
        <a href="http://localhost:3000/auth/github">Login com GitHub</a>
      ) : (
        <>
          <span>{user?.username}</span>
          <img src={user?.avatar_url} width={64} />
        </>
      )}
    </div>
  );
}
