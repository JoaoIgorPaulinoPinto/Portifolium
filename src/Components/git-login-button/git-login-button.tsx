import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import useUser from "../../store/user.store";
export default function GitHubLoginButton() {
  const [code, setCode] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (authCode: string) => {
    try {
      const accessToken = await AuthService.exchangeCodeForToken(authCode);
      AuthService.saveToken(accessToken);

      const res = await AuthService.getUserData();
      setUser({
        id: res.data.id,
        username: res.data.login,
        email: res.data.email,
        avatar_url: res.data.avatar_url,
        repos: res.data.repos_url,
      });
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
  }, [navigate, setUser]);

  useEffect(() => {
    if (code && !AuthService.getToken()) {
      handleLogin(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const handleClick = () => {
    if (AuthService.getToken()) {
      navigate("/home");
    } else {
      window.location.href = "http://localhost:3000/auth/github";
    }
  };

  return (
    <button onClick={handleClick}>
      <FaGithub />
    </button>
  );
}
