import { SERVER_URL } from "./config";

interface Review {
  image: string;
  username: string;
  dogname: string;
  reviewContent: string;
}

export const createReview = async (review: Review) => {
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
