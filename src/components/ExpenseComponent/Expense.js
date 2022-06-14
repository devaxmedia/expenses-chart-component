import BalanceHeader from "../BalanceComponent/BalanceHeader";
import Spending from "../SpendingComponent/Spending";

import styles from "./Expense.module.css";

export default function Expense() {
  return (
    <section className={styles.expense}>
      <BalanceHeader />
      <Spending />
    </section>
  );
}
