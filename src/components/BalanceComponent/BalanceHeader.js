import Balance from "./Balance";
import CircleIcon from "../../UI/CircleIcon";
import CurveContainer from "../../UI/CurveContainer";

import styles from "./BalanceHeader.module.css";

export default function BalanceHeader() {
  return (
    <CurveContainer className={styles["balance-header"]} backgroundColor="hsl(10, 79%, 65%)">
      <Balance />
      <CircleIcon />
    </CurveContainer>
  );
}
