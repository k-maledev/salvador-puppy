import { SERVER_URL } from "./config";

export const imageGeneration = async (prompt: string) => {
  const response = await fetch(`${SERVER_URL}/api/dalle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  return response.text();
};
