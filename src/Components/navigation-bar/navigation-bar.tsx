import { House, MessageSquareText, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigation-bar.module.css";

export default function NavigationBar() {
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();

  const HandleSelection = (selected: string) => {
    setSelected(selected);
    navigate(selected);
  };
  return (
    <div className={styles.navbar}>
      <button
        className={
          selected == "search"
            ? styles.nav_button + " " + styles.isSelected
            : styles.nav_button
        }
        onClick={() => HandleSelection("search")}
      >
        <Search size={22} />
      </button>
      <button
        className={
          selected == "home"
            ? styles.nav_button + " " + styles.isSelected
            : styles.nav_button
        }
        onClick={() => HandleSelection("home")}
      >
        <House size={22} />
      </button>
      <button
        className={
          selected == "communities"
            ? styles.nav_button + " " + styles.isSelected
            : styles.nav_button
        }
        onClick={() => HandleSelection("communities")}
      >
        <MessageSquareText size={22} />
      </button>
    </div>
  );
}
