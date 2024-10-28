import mongoose from "mongoose";

type ConnectionObject = {isConnected?: number};
const connection:ConnectionObject = {}

async function dbConnect() {
    if(connection.isConnected) {
        console.log('Database connection already established');
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "", {});
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connection established successfully");
    } catch (e) {
        console.error("Error is connecting to the Database", e);
        process.exit(1);
    }
}

export default dbConnect;