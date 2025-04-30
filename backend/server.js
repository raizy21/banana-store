import express from "express"; // importing express
import dotenv from "dotenv"; // importing dotenv
import { connectDB } from "./config/db.js"; // importing the connectDB function from the db.js file
import productRoutes from "./routes/product.route.js"; // importing the product routes
import path from "path"; // importing path to resolve file paths
import { fileURLToPath } from "url"; // importing fileURLToPath to convert __filename to a path

// recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url); // get the current file name
const __dirname = path.dirname(__filename); // get the directory name of the current file

dotenv.config({ path: path.resolve(__dirname, "../../.env") }); // load environment variables from .env file

const app = express(); // creating an instance of express

const PORT = process.env.PORT || 5000; // setting the port to the value from the environment variable or defaulting to 5000

app.use(express.json()); // middleware to parse JSON request bodies allows us to parse JSON request bodies

app.use("/api/products", productRoutes); // using the product routes for the /api/products URL

if (process.env.NODE_ENV === "production") {
  // serve static files
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // serve index.html for all unknown routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running...");
  });
}

app.listen(PORT, () => {
  connectDB(); // calling the connectDB function to connect to the database
  // starting the server on port 5000
  console.log(
    `server is running on port ${PORT}  ->  http://localhost:${PORT} `
  ); // logging to the console
}); // end of the server file
