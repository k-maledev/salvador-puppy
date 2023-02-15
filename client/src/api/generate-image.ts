import { SERVER_URL } from "./config";

export const generateImage = async (prompt: string) => {
  const response = await fetch(`${SERVER_URL}/api/dalle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  return response.json();
};
