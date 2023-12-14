import styles from "../Loading/Loading.module.scss";

function Loader() {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.progressLoader}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}

export default Loader;
