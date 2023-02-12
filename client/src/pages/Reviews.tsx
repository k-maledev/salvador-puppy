import { useEffect, useState } from "react";

import { ReviewItem } from "../component";
import { getReviews } from "../api";
import styles from "../style";
import { ReviewData } from "../types";

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  const loadReviews = async () => {
    const reviews = await getReviews();

    setReviews(reviews);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageHeading}>리뷰</h2>
      <ul className="flex flex-col w-full">
        {reviews.map((review) => (
          <ReviewItem
            key={review._id}
            imgUrl={review.imgUrl}
            username={review.username}
            dogname={review.dogname}
            reviewContent={review.reviewContent}
          />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
