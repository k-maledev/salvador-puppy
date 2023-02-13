import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { ReviewItem } from "../component";
import { getReviews } from "../api";
import styles from "../style";
import { ReviewData } from "../types";

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

  if (reviews === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>고객 리뷰 - 살바도르 퍼피</title>
      </Helmet>
      <div className={styles.pageContainer}>
        <h2 className={styles.pageHeading}>리뷰</h2>

        {reviews.length === 0 ? (
          <p>리뷰가 없습니다.</p>
        ) : (
          <ul className="flex flex-col w-full">
            {reviews.map((review) => (
              <ReviewItem key={review._id} review={review} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Reviews;
