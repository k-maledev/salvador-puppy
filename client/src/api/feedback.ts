import { SERVER_URL } from "./config";

export const sendFeedback = async (category: string, content: string) => {
  const response = await fetch(`${SERVER_URL}/api/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category,
      content,
    }),
  });

  return response.json();
};
