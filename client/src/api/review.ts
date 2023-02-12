import { SERVER_URL } from "./config";
import { NewReview } from "../types";

export const getReviews = async () => {
  const response = await fetch(`${SERVER_URL}/api/review`);

  const { data } = await response.json();

  return data.reverse();
};

export const createReview = async (review: NewReview) => {
  const { image, username, dogname, reviewContent } = review;

  const response = await fetch(`${SERVER_URL}/api/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      username,
      dogname,
      reviewContent,
    }),
  });

  return response.json();
};
