import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import UserModel from "@/models/User";
import mongoose from "mongoose";

export async function GET(request: Request) {
    await dbConnect();

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return new Response(JSON.stringify({
            success: false, message: "User not authenticated",
        }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const userId = new mongoose.Types.ObjectId(session.user._id);

    try {
        const userDetails = await UserModel.aggregate([
            { $match: { _id: userId } },
            { $unwind: "$diseases" },
            { $sort: { "diseases.createdAt": -1 } },
            { $group: {
                _id: "$_id",
                diseases: { $push: "$diseases" }
            } }
        ]);

        if (!userDetails || userDetails.length === 0) {
            return new Response(JSON.stringify({
                success: false, message: "No diseases found for the user",
            }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({
            success: true,
            diseases: userDetails[0].diseases
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (err) {
        console.error("Error fetching user details:", err);
        return new Response(JSON.stringify({
            success: false, message: "Internal server error",
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}