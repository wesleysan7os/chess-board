import LineBoard from "./LineBoard";
import styles from "../styles/ChessBoard.module.css";

const ChessBoard = () => {
  return (
    <div className={styles.chessContainer}>
      <LineBoard isEvenLine={false} />
      <LineBoard isEvenLine={true} />
      <LineBoard isEvenLine={false} />
      <LineBoard isEvenLine={true} />
      <LineBoard isEvenLine={false} />
      <LineBoard isEvenLine={true} />
      <LineBoard isEvenLine={false} />
      <LineBoard isEvenLine={true} />
    </div>
  );
};

export default ChessBoard;
