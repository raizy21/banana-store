import path from "path"; // importing path to resolve file paths
import { fileURLToPath } from "url"; // importing fileURLToPath to convert __filename to a path
import mongoose from "mongoose"; // importing mongoose to interact with MongoDB
import dotenv from "dotenv"; // importing dotenv to load environment variables

// recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url); // get the current file name
const __dirname = path.dirname(__filename); // get the directory name of the current file

dotenv.config({ path: path.resolve(__dirname, "../../.env") }); // Load environment variables from .env file
export const connectDB = async () => {
  try {
    const connect = process.env.MONGO_URI; // get the MongoDB URI from environment variables
    // console.log("MONGO_URI from .env:", connect); // log the MongoDB URI for debugging/;

    const connectDB = await mongoose.connect(connect); // connect to MongoDB using the URI
    console.log(`MongoDB connected : ${connectDB.connection.host}`); // Log the MongoDB connection host
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // process code 1 code indicates an error occurred , 0 code indicates success
  }
};
