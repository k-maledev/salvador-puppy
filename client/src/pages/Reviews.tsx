import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

import { ReviewItem } from "../component";
import { getReviews } from "../api";
import styles from "../style";
import { ReviewData } from "../types";
import Loading from "../component/Loading";

const Reviews = () => {
  const loadReviews = async () => {
    const response = await getReviews();
    if (response.success) return response.data.reverse();
  };

  const { data, status } = useQuery<ReviewData[]>("reviews", loadReviews);

  return (
    <>
      <Helmet>
        <title>앨범 - 살바도르 퍼피</title>
      </Helmet>

      <div className={styles.pageContainer}>
        <h2 className={styles.pageHeading}>앨범</h2>

        {status === "error" && <p>앨범 불러오기 실패</p>}

        {status === "success" && data.length > 0 && (
          <ul className="flex flex-col w-full">
            {data.map((review) => (
              <ReviewItem key={review._id} review={review} />
            ))}
          </ul>
        )}
      </div>

      {status === "loading" && <Loading />}
    </>
  );
};

export default Reviews;
