import mongoose from "mongoose";

const Photo = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  username: { type: String, required: true },
  dogname: { type: String, required: true },
  content: { type: String, required: true },
});

const PhotoSchema = mongoose.model("Photo", Photo);

export default PhotoSchema;
