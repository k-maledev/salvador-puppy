import { Link } from "react-router-dom";

import { PageContainer } from "../layout";
import { Overview, Samples, Description, MeetingAnimation } from "../component";
import styles from "../style";

const Home = () => {
  return (
    <PageContainer
      title="살바도르 퍼피 (Salvador Puppy)"
      className="sm:gap-y-48 gap-y-32"
    >
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
        <Link to="/album" className={styles.buttonOutlinedWhite}>
          앨범 보기
        </Link>
      </div>
    </PageContainer>
  );
};

export default Home;
