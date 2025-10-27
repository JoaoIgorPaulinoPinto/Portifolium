import { useEffect, useRef } from "react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import AuthenticationForm from "../Components/authentication-form/auth-form";
import GitHubLoginButtom from "../Components/git-login-button/git-login-button";
import "../globals.css";
import "./index.css";

export default function IndexPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      targetPos.current.x = (e.clientX / w - 0.5) * 2;
      targetPos.current.y = (e.clientY / h - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.05;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.05;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(${
          mousePos.current.x * 20
        }px, ${mousePos.current.y * 20}px, 0) scale(1.05)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="background">
      <div className="background-image" ref={backgroundRef}></div>

      {/* Nome do site */}
      <div className="site-name">PORTIFOLIUM</div>

      {/* Formulário de login */}
      <div className="login-container">
        <AuthenticationForm />
        <div className="login-authentication">
          <button className="auth-btn">
            <FaGoogle />
          </button>
          <GitHubLoginButtom />
          <button className="auth-btn">
            <FaMicrosoft />
          </button>
        </div>
      </div>
    </div>
  );
}
