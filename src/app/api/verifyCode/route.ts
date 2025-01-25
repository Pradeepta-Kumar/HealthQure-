import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { email, verifyCode } = await request.json();
    const user = await UserModel.findOne({ email });
    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Account not found",
        },
        { status: 500 }
      );
    }
    const isCodeVerified = user.verifyCode === verifyCode;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();
    if (isCodeNotExpired && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        {
          success: true,
          message: "User verified successfully",
        },
        { status: 200 }
      );
    } else if (!isCodeVerified) {
      return Response.json(
        {
          success: false,
          message: "Error in verifying the code",
        },
        { status: 400 }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "The expiry of the verify code is no longer available",
        },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("Error verifying the user");
    return Response.json(
      {
        success: false,
        message: "Error Verifying the user",
      },
      { status: 500 }
    );
  }
}
