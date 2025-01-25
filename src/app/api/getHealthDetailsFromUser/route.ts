import dbConnect from "@/lib/dbConnect";
import UserModel, { HealthVitals } from "@/models/User";
import { GoogleGenerativeAI } from "@google/generative-ai";


export async function POST(req: Request) {
  await dbConnect();
  try {
    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GEMINI_API_KEY as string
    );

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const {
      email,
      gender,
      age,
      pulseRate,
      bloodPressure,
      respirationRate,
      bodyTemp,
      oxygenRate,
      bloodGlucose,
      weight,
      cholesterol,
      location,
    } = await req.json();

    // Retrieve the user from the database using the email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return Response.json({
        success: false,
        message: "User not found!",
      });
    }

    // Define a prompt varibale
    const prompt = `Here are the following inputs as the vital signs of a human with the 
        Gender: ${gender}, 
        Age: ${age}, 
        Pulse Rate: ${pulseRate}, 
        Blood Pressure: ${bloodPressure}, 
        Respiration Rate: ${respirationRate}, 
        Body Temperature: ${bodyTemp}, 
        Oxygen Rate: ${oxygenRate}, 
        Blood Glucose: ${bloodGlucose}, 
        Weight: ${weight}, 
        Cholesterol: ${cholesterol},
        Location: ${location}. 
        Please Find out the accurate diseases along with the proper medicines available easily in affordable rates and suggest the type of foods to be consumed with the appropriate nutrient amounts also find all the hospitals present nearby the ${location}.`;

    // Pass the prompt to the model and retrieve the output
    const result = await model.generateContent(prompt);
    const response = result.response;
    const output = response.text().toString().replace("**", "\n");

    // Prepare new health details to store
    const newDetails = {
      gender,
      age,
      pulseRate,
      bloodPressure,
      respirationRate,
      bodyTemp,
      oxygenRate,
      bloodGlucose,
      weight,
      cholesterol,
      location,
      createdAt: new Date(),
      result: output,
    };
    user.diseases.push(newDetails as HealthVitals);
    await user.save();

    // Send the llm output as a server reponse object
    return Response.json({
      success: true,
      message: "Details processed and uploaded successfully",
      result: output,
    });
  } catch (error) {
    console.error(error);
    return Response.json({
        success: true, message: "Internal server error !!!"
    });
  }
}
