import { BellRing, Ellipsis, Settings, UserPlus } from "lucide-react";
import { useState } from "react";
import { ProfilePreferencesModal } from "../../Components/Modals/profile-preferences-modal";
import Post from "../../Components/timeline-post/timeline-post";
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
      {/* ===== COLUNA ESQUERDA - PERFIL + COMUNIDADES ===== */}
      <div className={`${styles.side_bar} ${styles.left_bar}`}>
        {/* Profile Card */}

        {/* Comunidades */}
        <div className={styles.comunitys}>
          <div className={styles.comunitys_actions}>
            <button>Criar comunidade</button>
          </div>

          <div className={styles.comunitys_card}>
            <span className={styles.comunitys_card_title}>EcoApp Devs</span>
            <span className={styles.comunitys_card_description}>
              Grupo para desenvolvedores do EcoApp compartilharem dicas e
              atualizações.
            </span>
          </div>

          <div className={styles.comunitys_card}>
            <span className={styles.comunitys_card_title}>GameDev Hub</span>
            <span className={styles.comunitys_card_description}>
              Discussões sobre desenvolvimento de jogos e protótipos
              multiplayer.
            </span>
          </div>

          <div className={styles.comunitys_card}>
            <span className={styles.comunitys_card_title}>
              SmartHome Lovers
            </span>
            <span className={styles.comunitys_card_description}>
              Compartilhe projetos e automações relacionadas a casas
              inteligentes.
            </span>
          </div>
        </div>
      </div>

      {/* ===== COLUNA CENTRAL - TIMELINE ===== */}
      {/* Timeline abaixo do profile card */}
      <div className={styles.timeline}>
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
            {modalPosition && (
              <ProfilePreferencesModal
                position={modalPosition}
                onClose={() => setModalPosition(null)}
              />
            )}
          </div>
        </div>
        {/* <div className={styles.timeline_filter}>
          {Array.from({ length: 6 }).map((_, i) => (
            <button key={i} className={styles.timeline_filter_option}>
              <span>Projeto {i}</span>
            </button>
          ))}
        </div> */}
        <div className={styles.new_update_button}>
          <button>+</button>
        </div>
        <div className={styles.timeline_posts}>
          <Post
            project="EcoApp"
            title="Atualização do Rastreador de Reciclagem"
            description="Implementamos a visualização de estatísticas semanais."
            details="Usuários agora podem ver quantos itens reciclaram e receber dicas..."
            comments={45}
            likes={120}
          />
          <Post
            project="EcoApp"
            title="Atualização do Rastreador de Reciclagem"
            description="Implementamos a visualização de estatísticas semanais."
            details="Usuários agora podem ver quantos itens reciclaram e receber dicas..."
            comments={45}
            likes={120}
          />
          <Post
            project="EcoApp"
            title="Atualização do Rastreador de Reciclagem"
            description="Implementamos a visualização de estatísticas semanais."
            details="Usuários agora podem ver quantos itens reciclaram e receber dicas..."
            comments={45}
            likes={120}
          />

          <Post
            project="EcoApp"
            title="Atualização do Rastreador de Reciclagem"
            description="Implementamos a visualização de estatísticas semanais."
            details="Usuários agora podem ver quantos itens reciclaram e receber dicas..."
            comments={45}
            likes={120}
          />
          <Post
            project="EcoApp"
            title="Atualização do Rastreador de Reciclagem"
            description="Implementamos a visualização de estatísticas semanais."
            details="Usuários agora podem ver quantos itens reciclaram e receber dicas..."
            comments={45}
            likes={120}
          />
        </div>
      </div>

      {/* ===== COLUNA DIREITA - TRENDING TOPICS ===== */}
      <div className={`${styles.side_bar} ${styles.right_bar}`}>
        <div className={styles.trending_topics}>
          <div className={styles.trending_topics_card}>
            <span className={styles.trending_topics_card_name}>EcoApp</span>
            <span className={styles.trending_topics_card_update}>
              Nova funcionalidade de rastreamento
            </span>
            <span className={styles.trending_topics_card_update_description}>
              Adicionamos sistema para registrar itens recicláveis e acompanhar
              estatísticas.
            </span>
            <div className={styles.metrics}>
              <span>💬 45 comentários</span>
              <span>❤️ 120 likes</span>
            </div>
          </div>

          <div className={styles.trending_topics_card}>
            <span className={styles.trending_topics_card_name}>SmartHome</span>
            <span className={styles.trending_topics_card_update}>
              Controle de luz via app
            </span>
            <span className={styles.trending_topics_card_update_description}>
              Controle de luzes remotamente e configure rotinas automáticas.
            </span>
            <div className={styles.metrics}>
              <span>💬 38 comentários</span>
              <span>❤️ 105 likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
