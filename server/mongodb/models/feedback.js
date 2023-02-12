import mongoose from "mongoose";

const Feedback = new mongoose.Schema({
  category: { type: String, required: true },
  content: { type: String, required: true },
});

const FeedbackSchema = mongoose.model("Feedback", Feedback);

export default FeedbackSchema;
