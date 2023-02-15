import { SERVER_URL } from "./config";
import { NewPhoto } from "../types";

export const getPhotos = async (page: number) => {
  const response = await fetch(`${SERVER_URL}/api/photo?page=${page}`);

  return response.json();
};

export const createPhoto = async (photo: NewPhoto) => {
  const { image, username, dogname, content } = photo;

  const response = await fetch(`${SERVER_URL}/api/photo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      username,
      dogname,
      content,
    }),
  });

  return response.json();
};
