import express from "express"; // importing express

const app = express(); // creating an instance of express

app.get("/", (req, res) => {
  // defining a route for the root URL
  res.send("hello from node js!"); // sending a response to the client
}); // end of the route

app.listen(5000, () => {
  // starting the server on port 5000
  console.log("Server is running on port 5000  ->  http:localhost:5000 "); // logging to the console
}); // end of the server file
