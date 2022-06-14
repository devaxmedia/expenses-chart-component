import CurveContainer from "../../UI/CurveContainer";
import Chart from "../ChartComponent/Chart";

import styles from "./Spending.module.css";

export default function Spending() {
  return (
    <CurveContainer backgroundColor="#fff">
      <h2 className={styles.heading}>Spending - Last 7 days</h2>
      <Chart />
    </CurveContainer>
  );
}
