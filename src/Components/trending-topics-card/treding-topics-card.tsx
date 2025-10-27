import styles from "./treding-topics-card.module.css";

interface TrendingTopicsCardProps {
  name: string;
  update: string;
  description: string;
  comments: number;
  likes: number;
}

export default function TrendingCard(props: TrendingTopicsCardProps) {
  return (
    <div className={styles.trending_topics_card}>
      <span className={styles.trending_topics_card_name}>{props.name}</span>
      <span className={styles.trending_topics_card_update}>{props.update}</span>
      <span className={styles.trending_topics_card_update_description}>
        {props.description}
      </span>
      <div className={styles.metrics}>
        <span>💬 {props.comments} comentários</span>
        <span>❤️ {props.likes} likes</span>
      </div>
    </div>
  );
}
