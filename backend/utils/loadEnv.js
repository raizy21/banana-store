import dotenv from "dotenv"; // importing dotenv to load environment variables from .env file
import path from "path"; // importing path to work with file and directory paths/
import { fileURLToPath } from "url"; // importing fileURLToPath to convert a URL to a file path

const __filename = fileURLToPath(import.meta.url); // getting the current file path
const __dirname = path.dirname(__filename); // getting the directory name of the current file

export const loadEnv = () => {
  // defining the loadEnv function to load environment variables
  dotenv.config({ path: path.resolve(__dirname, "../../.env") }); // loading the .env file
}; // end of loadEnv function
