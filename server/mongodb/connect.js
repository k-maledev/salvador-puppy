import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB 연결 성공"))
    .catch((err) => {
      console.error("MongoDB 연결 실패");
      console.error(err);
    });
};

export default connectDB;
