import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { ReviewItem } from "../component";
import { getReviews } from "../api";
import styles from "../style";
import { ReviewData } from "../types";
import Loading from "../component/Loading";

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewData[]>();

  const loadReviews = async () => {
    try {
      const response = await getReviews();

      if (response.success) {
        setReviews(response.data.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <>
      <Helmet>
        <title>고객 리뷰 - 살바도르 퍼피</title>
      </Helmet>

      <div className={styles.pageContainer}>
        <h2 className={styles.pageHeading}>리뷰</h2>

        {reviews && reviews.length !== 0 && (
          <ul className="flex flex-col w-full">
            {reviews.map((review) => (
              <ReviewItem key={review._id} review={review} />
            ))}
          </ul>
        )}
      </div>

      {reviews === undefined && <Loading />}
    </>
  );
};

export default Reviews;
