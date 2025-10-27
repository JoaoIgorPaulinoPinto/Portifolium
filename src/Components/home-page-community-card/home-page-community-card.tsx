import styles from "./home-page-community-card.module.css";

interface CommunityCardProps {
  title: string;
  description: string;
}

export default function CommunityCard(props: CommunityCardProps) {
  return (
    <div className={styles.comunitys_card}>
      <span className={styles.comunitys_card_title}>{props.title}</span>
      <span className={styles.comunitys_card_description}>
        {props.description}
      </span>
    </div>
  );
}
