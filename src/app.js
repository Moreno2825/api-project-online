import express from "express";
import morgan from "morgan";
import cors from "cors";
import quizRoutes from "./routes/quiz.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/api', quizRoutes);


app.use((req, res) => {
    res.status(404).json("ruta no encontrada");
})

export default app;