import mongoose from "mongoose";

const Review = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  username: { type: String, required: true },
  dogname: { type: String, required: true },
  reviewContent: { type: String, required: true },
});

const ReviewSchema = mongoose.model("Review", Review);

export default ReviewSchema;
