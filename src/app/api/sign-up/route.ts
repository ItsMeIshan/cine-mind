import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    const existingUserByUsername = await UserModel.findOne({
      username,
    });
    if (existingUserByUsername) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken",
        },
        { status: 400 }
      );
    }
    const existingUserByEmail = await UserModel.findOne({
      email,
    });
    if (existingUserByEmail) {
      return Response.json(
        {
          success: false,
          message: "email already exists, try logging in.",
        },
        { status: 409 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return Response.json({
        success: true,
        message: "user created successfully.",
      });
    }
  } catch (error) {
    console.error("Error in registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error in registering user",
      },
      { status: 500 }
    );
  }
}
