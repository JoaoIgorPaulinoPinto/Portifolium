import type { JSX } from "react";
import styles from "./center-screen-modal.module.css";

export default function CenterScreenModal({
  children,
}: {
  children: JSX.Element;
}) {
  return <div className={styles.modal}>{children}</div>;
}
