import styles from "./TotalSpendMonth.js.module.css";

export default function TotalSpendMonth() {
  return (
    <div className={styles["total-spend-wrapper"]}>
      <div>
        <p className={styles.discription}>Total this month</p>
        <h2 className={styles["total-spend-amount"]}>$478.33</h2>
      </div>
      <div className={styles["total-percent-wrapper"]}>
        <p className={styles.percentage}>+2.4%</p>
        <p className={styles.discription}>from last month</p>
      </div>
    </div>
  );
}
