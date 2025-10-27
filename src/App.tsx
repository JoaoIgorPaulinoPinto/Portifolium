import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/navigation-bar/navigation-bar";
import IndexPage from "./pages";
import Communities from "./pages/Communities/communities";
import Home from "./pages/Home/home";
import Profile from "./pages/Profile/profile";
import Search from "./pages/Search/search";

export default function App() {
  const location = useLocation();

  // Lista de rotas onde a navbar não deve aparecer
  const hideNavbarRoutes = ["/"];

  // Verifica se a rota atual está na lista
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/communities" element={<Communities />} />
          {/* exemplo de outras rotas */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </main>

      {/* só renderiza se não for rota oculta */}
      {!shouldHideNavbar && <NavigationBar />}
    </div>
  );
}
