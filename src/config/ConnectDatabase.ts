import mongoose from "mongoose";
import { server } from "./ConfigServer";

const connectDB = async () => {
  if (!server.databaseUrl) {
    console.error("${server.databaseUrl} environment variable is not set.");
    process.exit(1);
  }

  try {
    await mongoose.connect(server.databaseUrl);
    console.log(`Connected to MongoDB at ${server.databaseUrl}`);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
