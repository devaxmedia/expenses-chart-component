import styles from "./Balance.module.css";

export default function Balance() {
  return (
    <div className={styles["balance-container"]}>
      <p>My balance</p>
      <p className={styles["balance-amount"]}>$921.48</p>
    </div>
  );
}
