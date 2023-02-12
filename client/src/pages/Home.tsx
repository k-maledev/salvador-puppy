import { Link } from "react-router-dom";
import { Overview, Samples, Description, MeetingAnimation } from "../component";
import styles from "../style";

const Home = () => {
  return (
    <div className={`${styles.pageContainer} sm:gap-y-48 gap-y-32`}>
      <Overview />
      <Samples />
      <Description />
      <MeetingAnimation />

      <div
        className={`xs:flex-row xs:justify-center ${styles.columnCenter} gap-4 xs:w-full w-[80%]`}
      >
        <Link to="/create" className={styles.buttonWhite}>
          생성하기
        </Link>
        <Link to="/reviews" className={styles.buttonOutlinedWhite}>
          리뷰 보기
        </Link>
      </div>
    </div>
  );
};

export default Home;
