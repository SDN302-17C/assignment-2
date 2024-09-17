import express from "express";
import morgan from "morgan";
import path from "path";
import quizAPI from "./routes/api/QuizRoutes";
import questionAPI from "./routes/api/QuestionRoutes";
import quizRoutes from "./routes/view/QuizRoutes";
import questionRoutes from "./routes/view/QuestionRoutes";
import connectDB from "./config/ConnectDatabase";
import { server } from "./config/ConfigServer";
import methodOverride from 'method-override';

const app = express();

app.disable("x-powered-by");

app.use(methodOverride('_method'));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/quizzes", quizAPI);
app.use("/api/questions", questionAPI);

app.use("/quizzes", quizRoutes);
app.use("/questions", questionRoutes);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

connectDB().then(() => {
  app.listen(server.port, () => {
    console.log(`Server is running on ${server.serverUrl}/`);
  });
});
