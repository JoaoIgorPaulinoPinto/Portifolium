import { Ellipsis, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./home-page-profile-card.module.css";

interface ProfileCardProps {
  username: string;
  followers: number;
  following: number;
  avatar: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  const navigate = useNavigate();

  const GoToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className={styles.profile_card} onClick={GoToProfile}>
      <div className={styles.profile_card_actions_top}>
        <button>
          <Settings size={18} />
        </button>
        <button>
          <Ellipsis size={18} />
        </button>
      </div>

      <div className={styles.profile_card_img}>
        <img src={props.avatar} alt="profile" />
      </div>

      <div className={styles.profile_card_info}>
        <span className={`${styles.username} NoWrapText-2lines`}>
          {props.username}
        </span>
        <div className={styles.profile_card_info_metrics}>
          <label>{props.followers} seguidores</label>
          <label>{props.following} seguindo</label>
        </div>
      </div>
    </div>
  );
}
