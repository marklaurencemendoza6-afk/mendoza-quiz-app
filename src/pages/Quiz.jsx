
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../data/questions";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer first!");
      return;
    }

    const isCorrect = selectedAnswer === question.answer;
    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      navigate("/result", {
        state: {
          score: newScore,
          totalQuestions: questions.length
        }
      });
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <QuizHeader
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <ProgressBar
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={setSelectedAnswer}
        />

        <button
          className="next-button"
          onClick={handleNext}
        >
          {currentQuestion + 1 === questions.length
            ? "Finish Quiz"
            : "Next Question →"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
