import Quiz from "../models/quiz.js";

/**
 * Creates a new quiz based on the data received in the request body.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the quiz is created.
 */
export const postQuiz = async (req, res) => {
  try {
    const { question, answers, result } = req.body;

    // Crear un nuevo documento del cuestionario
    const newQuiz = new Quiz({
      question,
      answers,
      result,
    });

    const savedQuiz = await newQuiz.save();

    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();

    const formattedQuizzes = quizzes.map((quiz) => ({
      _id: quiz._id,
      question: quiz.question,
      answers: quiz.answers,
      result: `${quiz.result}: ${quiz.answers[quiz.result]}`,
    }));

    const response = {
      quizzes: formattedQuizzes,
      total: formattedQuizzes.length,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
