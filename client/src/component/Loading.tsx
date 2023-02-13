import styles from "../style";

const Loading = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.modalContainer}`}>
      <div className={styles.modalBackdrop}></div>

      <div className={`${styles.modalContent} h-full`}>
        <div className="text-5xl animate-bounce">🦴</div>
      </div>
    </div>
  );
};

export default Loading;
