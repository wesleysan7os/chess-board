import styles from "../styles/Cell.module.css";

const Cell = (props) => {
  return (
    <div className={styles.cell} style={{ backgroundColor: props.cor }}></div>
  );
};

export default Cell;
