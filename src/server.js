import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEdituser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEdituser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/video", handleWatchVideo);


app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter); 


const home = (req, res) => {
  console.log("I will respond.");
  return res.send("Hello");
}
const login = (req, res) => {
  return res.send("login");
}

// Codesandbox gives us a PORT :)
app.listen(PORT, () => `Listening!✅`);
