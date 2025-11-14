import { useState } from "react";
import CreateCommunityButton from "../../Components/community-create-button/create-community-button";
import CommunityCard from "../../Components/home-page-community-card/home-page-community-card";
import ProfileCard from "../../Components/home-page-profile-card/home-page-profile-card";
import SearchBar from "../../Components/search-posts-input/search-posts-input";
import Post from "../../Components/timeline-post/timeline-post";
import TrendingCard from "../../Components/trending-topics-card/treding-topics-card";
import styles from "./communities.module.css";

export default function Communities() {
  const [selectedFilter, setSelectedFilter] = useState("alguma coisa");
  return (
    <div className={styles.page}>
      {/* ===== COLUNA ESQUERDA ===== */}
      <div className={`${styles.side_bar} ${styles.left_bar}`}>
        <ProfileCard
          username="Nome de usuário"
          followers={410}
          following={530}
          avatar="https://i.imgur.com/40gsBxb.png"
        />

        <div className={styles.comunitys}>
          <CreateCommunityButton />

          <CommunityCard
            title="EcoApp Devs"
            description="Grupo para desenvolvedores do EcoApp compartilharem dicas e atualizações."
          />
          <CommunityCard
            title="GameDev Hub"
            description="Discussões sobre desenvolvimento de jogos e protótipos multiplayer."
          />
          <CommunityCard
            title="SmartHome Lovers"
            description="Compartilhe projetos e automações relacionadas a casas inteligentes."
          />
        </div>
      </div>

      {/* ===== COLUNA CENTRAL ===== */}

      <div className={styles.timeline}>
        <div className={styles.timeline_top}>
          <SearchBar
            filtredType={(e) => setSelectedFilter(e.target.value)}
            filterTypes={["Profile", "Communities", "Posts", "Projects"]}
            onChange={(e) => console.log(e.target.value)}
            placeholder={`Pesquise por ${selectedFilter}...`}
          />
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

      {/* ===== COLUNA DIREITA ===== */}
      <div className={`${styles.side_bar} ${styles.right_bar}`}>
        <TrendingCard
          name="EcoApp"
          update="Nova funcionalidade de rastreamento"
          description="Sistema para registrar itens recicláveis e acompanhar estatísticas."
          comments={45}
          likes={120}
        />
        <TrendingCard
          name="SmartHome"
          update="Controle de luz via app"
          description="Controle luzes remotamente e configure rotinas automáticas."
          comments={38}
          likes={105}
        />
      </div>
    </div>
  );
}
