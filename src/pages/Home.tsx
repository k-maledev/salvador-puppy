import { Link } from "react-router-dom";
import { Overview, Samples, Description, AdoptAnimation } from "../component";
import styles from "../style";

const Home = () => {
  return (
    <div
      className={`${styles.container} ${styles.columnCenter} sm:gap-y-48 gap-y-32 sm:mt-32 mt-16 sm:mb-40 mb-24`}
    >
      <Overview />
      <Samples />
      <Description />
      <AdoptAnimation />

      <div
        className={`xs:flex-row xs:justify-center ${styles.columnCenter} gap-4 xs:w-full w-[80%]`}
      >
        <Link to="/adopt" className={styles.buttonWhite}>
          입양하기
        </Link>
        <Link to="/reviews" className={styles.buttonOutlinedWhite}>
          리뷰 보기
        </Link>
      </div>
    </div>
  );
};

export default Home;
