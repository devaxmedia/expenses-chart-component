import { useContext } from "react";
import { SpendingContext } from "../../App";

import styles from "./ChartBar.module.css";

export default function ChartBar() {
  const spendDatas = useContext(SpendingContext);

  return (
    <div className={styles["chart-wrapper"]}>
      {spendDatas.map((spendData, index) => (
        <section key={index} className={styles.chart}>
          <div className={styles.price}>${spendData.amount}</div>
          <div className={styles.bar} style={{ height: `${spendData.amount}%` }}></div>
          <div className={styles.day}>{spendData.day}</div>
        </section>
      ))}
    </div>
  );
}
