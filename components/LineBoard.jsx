import Cell from "./Cell";
import styles from "../styles/LineBoard.module.css";

const LineBoard = (props) => {
  return props.isEvenLine ? (
    <div className={styles.lineBoard}>
      <Cell cor="black" />
      <Cell cor="white" />
      <Cell cor="black" />
      <Cell cor="white" />
      <Cell cor="black" />
      <Cell cor="white" />
      <Cell cor="black" />
      <Cell cor="white" />
    </div>
  ) : (
    <div className={styles.lineBoard}>
      <Cell cor="white" />
      <Cell cor="black" />
      <Cell cor="white" />
      <Cell cor="black" />
      <Cell cor="white" />
      <Cell cor="black" />
      <Cell cor="white" />
      <Cell cor="black" />
    </div>
  );
};

export default LineBoard;
