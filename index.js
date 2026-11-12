import "dotenv/config"; 
import express from "express"; 
import userRouter from "./src/routes/user.routes.js";


const api = express();
const port = process.env.PORT || 3000; 
api.use(express.json());

api.use("/user", userRouter);





api.listen(port, () => {
  console.log("http://localhost:" + port);
});
