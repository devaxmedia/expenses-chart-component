import ChartBar from "./ChartBar";
import TotalSpendMonth from "../TotalSpendMonth/TotalSpendMonth";

import styles from "./Chart.module.css";

export default function Chart() {
  return (
    <section className={styles.charts}>
      <ChartBar />
      <TotalSpendMonth />
    </section>
  );
}
