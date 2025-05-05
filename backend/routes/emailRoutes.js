import { Router } from "express"; // importing Router from express
import { sendEmailController } from "../controllers/emailController.js"; // importing the sendEmailController from the emailController.js file

const router = Router(); // creating a new router instance

// POST route for sending emails
router.post("/send", sendEmailController); // defining a POST route for sending emails

// exporting the router instance to be used in other files
export default router;
