import { Ellipsis, Forward } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilePreferencesModal } from "../Modals/profile-preferences-modal";
import styles from "./home-page-profile-card.module.css";

interface ProfileCardProps {
  username: string;
  followers: number;
  following: number;
  avatar: string;
}
type ModalPosition = { x: number; y: number } | null;
export default function ProfileCard(props: ProfileCardProps) {
  const navigate = useNavigate();

  const GoToProfile = () => {
    navigate("/profile");
  };
  const [modalPosition, setModalPosition] = useState<ModalPosition>(null);

  function openModal(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.bottom });
  }

  return (
    <div className={styles.profile_card}>
      <div className={styles.profile_card_actions_top}>
        <button onClick={(e) => openModal(e)}>
          <Ellipsis size={20} />
        </button>
        {modalPosition && (
          <ProfilePreferencesModal
            position={modalPosition}
            onClose={() => setModalPosition(null)}
          />
        )}
        <button onClick={GoToProfile}>
          <Forward size={20} />
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
