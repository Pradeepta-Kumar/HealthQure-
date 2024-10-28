import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail( 
    fullname: string, email: string, verifyCode: string,
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: "HealthQure || Verification Code",
            react: VerificationEmail({fullname, otp: verifyCode}),
        });
        return { success: true, message: "Verification code sent successfully"}
    } catch(err) {
        console.error("Error in sending the Verification Code ", err);
        return { success: false, message: "Error sending in the Verification code" }
    }
}