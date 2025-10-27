import styles from "./timeline-post.module.css";

interface timelinePostProps {
  project: string;
  title: string;
  description: string;
  details: string;
  comments: number;
  likes: number;
}

export default function Post(props: timelinePostProps) {
  return (
    <div className={styles.post}>
      <span className={styles.post_project_name}>{props.project}</span>
      <span className={styles.post_title}>{props.title}</span>
      <span className={styles.post_description}>{props.description}</span>
      <span className={styles.post_description_details}>{props.details}</span>
      <div className={styles.post_metrics}>
        <span>💬 {props.comments} comentários</span>
        <span>❤️ {props.likes} likes</span>
      </div>
    </div>
  );
}
