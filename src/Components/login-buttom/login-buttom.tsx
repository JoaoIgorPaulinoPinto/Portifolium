import axios from "axios";
import { useEffect, useState } from "react";

import "./login-buttom.css";
interface GithubUser {
  id: string;
  username: string;
  email?: string;
  avatar_url?: string;
}
export default function LoginButton() {
  const [user, setUser] = useState<Partial<GithubUser> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get<Partial<GithubUser>>(
          "http://localhost:3000/user",
          {
            withCredentials: true,
          }
        );
        console.log(res);
        setUser(res.data);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      {!user ? (
        <a href="http://localhost:3000/auth/github?redirect_uri=http://localhost:5173">
          <button>Login com GitHub</button>
        </a>
      ) : (
        <div className="github-badge">
          <span>{user.username}</span>
          <img
            src={user.avatar_url}
            alt={user.username}
            width={64}
            height={64}
          />
        </div>
      )}
    </>
  );
}
