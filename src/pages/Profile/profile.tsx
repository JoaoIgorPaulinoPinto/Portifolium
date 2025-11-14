import { BellRing, Ellipsis, Settings, UserPlus } from "lucide-react";
import { useState } from "react";
import CreateCommunityButton from "../../Components/community-create-button/create-community-button";
import CommunityCard from "../../Components/home-page-community-card/home-page-community-card";
import { ProfilePreferencesModal } from "../../Components/Modals/Popover/profile-preferences-modal";
import Post from "../../Components/timeline-post/timeline-post";
import TrendingCard from "../../Components/trending-topics-card/treding-topics-card";
import styles from "./profile.module.css";

type ModalPosition = { x: number; y: number } | null;

export default function Profile() {
  const [modalPosition, setModalPosition] = useState<ModalPosition>(null);

  function openModal(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.bottom });
  }

  const isOwner = false;

  return (
    <div className={styles.page}>
      {/* ===== COLUNA ESQUERDA ===== */}
      <div className={`${styles.side_bar} ${styles.left_bar}`}>
        <div className={styles.comunitys}>
          <CreateCommunityButton />

          {Array.from({ length: 6 }).map((_, i) => (
            <CommunityCard
              key={i}
              title="SmartHome Lovers"
              description="Compartilhe projetos e automações relacionadas a casas inteligentes."
            />
          ))}
        </div>
      </div>

      {/* ===== COLUNA CENTRAL - TIMELINE ===== */}
      <div className={styles.timeline}>
        {/* Profile Header */}
        <div className={styles.profile_card}>
          <div className={styles.profile_card_info}>
            <div className={styles.profile_card_img}>
              <img src="https://i.imgur.com/40gsBxb.png" alt="profile" />
            </div>

            <div className={styles.profile_card_info_user}>
              <label className={styles.username}>Nome de Usuário</label>

              <div className={styles.profile_card_info_metrics}>
                <label>410 seguidores</label>
                <label>530 seguindo</label>
              </div>
            </div>
          </div>

          <div className={styles.profile_card_actions}>
            <button>
              {isOwner ? <Settings size={18} /> : <UserPlus size={18} />}
            </button>

            <button onClick={(e) => openModal(e)}>
              {isOwner ? <Ellipsis size={18} /> : <BellRing size={18} />}
            </button>

            {isOwner && modalPosition && (
              <ProfilePreferencesModal
                position={modalPosition}
                onClose={() => setModalPosition(null)}
              />
            )}
          </div>
        </div>

        {/* ==== TIMELINE POSTS (com data-date) ==== */}
        <div className={styles.timeline_posts}>
          {/* NOVO CONTAINER ADICIONADO AQUI */}
          <div className={styles.timeline_content}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} data-date={`${i + 1}/01/2025`}>
                <Post
                  project="EcoApp"
                  title="Atualização do Rastreador de Reciclagem"
                  description="Implementamos a visualização de estatísticas semanais."
                  details="Usuários agora podem ver quantos itens reciclaram e receber dicas..."
                  comments={45}
                  likes={120}
                />
              </div>
            ))}
          </div>
          {/* FIM DO NOVO CONTAINER */}
        </div>
      </div>

      {/* ===== COLUNA DIREITA - TRENDING ===== */}
      <div className={`${styles.side_bar} ${styles.right_bar}`}>
        <div className={styles.trending_topics}>
          {Array.from({ length: 4 }).map((_, i) => (
            <TrendingCard
              key={i}
              name="EcoApp"
              update="Nova funcionalidade de rastreamento"
              description="Sistema para registrar itens recicláveis e acompanhar estatísticas."
              comments={45}
              likes={120}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
