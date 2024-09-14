import express from "express";
import morgan from "morgan";
import quizRoutes from "./routes/QuizRoutes";
import questionRoutes from "./routes/QuestionRoutes";
import connectDB from "./config/ConnectDatabase";
import { server } from "./config/ConfigServer";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));

app.use("/quizzes", quizRoutes);
app.use("/questions", questionRoutes);

connectDB().then(() => {
  app.listen(server.port, () => {
    console.log(`Server is running on http://${server.host}:${server.port}/`);
  });
});
