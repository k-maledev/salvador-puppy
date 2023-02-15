import { saveAs } from "file-saver";

export const downloadImage = (imgUrl: string) => saveAs(imgUrl, "image.jpeg");
