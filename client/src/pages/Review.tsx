import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReview } from "../api/review";
import styles from "../style";
import { ReviewData } from "../types";

const Review = () => {
  const [review, setReview] = useState<ReviewData>();

  const { reviewId } = useParams();

  const loadReview = async (reviewId: string) => {
    try {
      const response = await getReview(reviewId);

      if (response.success) {
        setReview(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (reviewId) loadReview(reviewId);
  }, [reviewId]);

  if (!review) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageHeading}>
        <span className="text-blue-500">{review.username}</span>님의 리뷰
      </h2>

      <img
        src={review.imgUrl}
        alt={review.dogname}
        className="w-full max-w-sm mb-6"
      />
      <h3 className="text-lg border py-1 px-3 mb-4">{review.dogname}</h3>

      <p className="xs:text-lg text-sm">{review.reviewContent}</p>
    </div>
  );
};

export default Review;
