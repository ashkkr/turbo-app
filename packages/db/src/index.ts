import mongoose, { Mongoose } from "mongoose";
import { connectToMongoDb } from "./dbConnect";

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    purchasedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    collection: "users",
  },
);

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
  },
  {
    collection: "courses",
  },
);

const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "admins",
  },
);

export const User = mongoose.model("User", userSchema);
export const Course = mongoose.model("Course", courseSchema);
export const Admin = mongoose.model("Admin", adminSchema);
export * from "./dbConnect";
