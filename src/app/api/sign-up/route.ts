import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "../../../helpers/sendVerificationEmail";

export async function POST(request: Request) {
    await dbConnect();
    try {
        const {fullname, email, password} = await request.json();
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        const existingUserByEmail = await UserModel.findOne({email});

        if(existingUserByEmail) {
            if(existingUserByEmail?.isVerified) {
                return Response.json({
                    success: false,
                    message: "User already exists"
                });
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
                await existingUserByEmail.save();
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);

            const newUser = new UserModel({
                fullname,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                diseases: [],
            });
            await newUser.save();
        }

        // send verification email
        const emailResponse = await sendVerificationEmail(fullname, email, verifyCode);
        if(!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message,
            }, {status: 500});
        }
        return Response.json({ success: true, message: `Verification Code has been sent Successfully at ${email}` });
    } catch (err) {
        console.error("Failed to create a user or sign-up the user");
        return Response.json({
            success: false,
            message: "error in Registering the new User"
        }, {status: 500});
    }
}