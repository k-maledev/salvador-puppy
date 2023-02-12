import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getReview } from "../api/review";
import styles from "../style";
import { ReviewData } from "../types";
import placeholder from "../assets/placeholder.png";

const Review = () => {
  const [review, setReview] = useState<ReviewData>();
  const [loaded, setLoaded] = useState(false);

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
    <>
      <Helmet>
        <title>{review.dogname} - 살바도르 퍼피</title>
      </Helmet>
      <div className={styles.pageContainer}>
        <img
          src={loaded ? review.imgUrl : placeholder}
          onLoad={() => setLoaded(true)}
          alt={review.dogname}
          className="w-full max-w-sm mb-6"
        />

        <p className="text-lg border py-1 px-3 mb-6">{review.dogname}</p>

        <h2 className="text-2xl mb-4">
          <span className="text-blue-500">{review.username}</span>님의 리뷰
        </h2>

        <p className="xs:text-lg text-sm">{review.reviewContent}</p>
      </div>{" "}
    </>
  );
};

export default Review;
