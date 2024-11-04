import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import mongoose, { mongo } from "mongoose";
import { Admin, connectToMongoDb } from "@repo/db";
const SECRET = "SECRET";

type Data = {
  token?: String;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, password } = req.body;
  let admin;
  try {
    await connectToMongoDb();
    admin = await Admin.findOne({
      username: username,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Some mongoDb error",
    });
  }
  if (admin) {
    res.status(400).json({
      message: "Username already exists. Choose another username",
    });
  } else {
    const newAdmin = new Admin({
      username: username,
      password: password,
    });

    await newAdmin.save();

    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({
      token: token,
      message: "User logged in successfully",
    });
  }
}
