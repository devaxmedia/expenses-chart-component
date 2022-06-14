import styles from "./CircleIcon.module.css";

export default function CircleIcon() {
  return (
    <div className={styles["circle-container"]}>
      <div className={`${styles.circle} ${styles["outline-circle"]}`}></div>
      <div className={`${styles.circle} ${styles["solid-circle"]}`}></div>
    </div>
  );
}
