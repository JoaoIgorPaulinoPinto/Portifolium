// LoginButton.tsx
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { AuthService } from "../../services/AuthService";
import useUser from "../../store/user.store";

import "./perfil-buttom.css";

export default function GitLoginHub() {
  const { user, setUser } = useUser();

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

  return (
    <div className="github-badge">
      <span>{user?.username}</span>
      <img src={user?.avatar_url} width={64} />
    </div>
  );
}
