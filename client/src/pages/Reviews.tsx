import { useEffect, useState } from "react";

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
    <div className={styles.pageContainer}>
      <h2 className={styles.pageHeading}>리뷰</h2>

      {reviews.length === 0 ? (
        <p>리뷰가 없습니다.</p>
      ) : (
        <ul className="flex flex-col w-full">
          {reviews.map((review) => (
            <ReviewItem
              key={review._id}
              _id={review._id}
              imgUrl={review.imgUrl}
              username={review.username}
              dogname={review.dogname}
              reviewContent={review.reviewContent}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
