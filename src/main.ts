import express from "express";
import morgan from "morgan";
import path from "path";
import quizRoutes from "./routes/api/QuizRoutes";
import questionRoutes from "./routes/api/QuestionRoutes";
import connectDB from "./config/ConnectDatabase";
import { server } from "./config/ConfigServer";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));

app.use("/quizzes", quizRoutes);
app.use("/questions", questionRoutes);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main", { title: "Home Page" });
});

connectDB().then(() => {
  app.listen(server.port, () => {
    console.log(`Server is running on ${server.serverUrl}/`);
  });
});
