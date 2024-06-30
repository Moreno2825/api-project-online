import { Schema, model } from "mongoose";

const answerSchema = new Schema(
  {
    A: { type: String, required: true },
    B: { type: String, required: true },
    C: { type: String, required: true },
    D: { type: String, required: true },
  },
  { _id: false }
);

const quizSchema = new Schema(
  {
    question: { type: String, required: true },
    answers: answerSchema,
    result: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default model("Quiz", quizSchema);
