
function ResultCard({
  score,
  totalQuestions,
  onRetake,
  onHome
}) {
  const percentage = Math.round(
    (score / totalQuestions) * 100
  );

  return (
    <div className="result-card">
      <h1>Quiz Completed!</h1>
      <h2>{percentage}%</h2>

      <p>
        Your Score: {score} / {totalQuestions}
      </p>

      <p>
        {percentage >= 80
          ? "Excellent work!"
          : percentage >= 50
          ? "Good effort! Keep practicing!"
          : "Keep learning and try again!"}
      </p>

      <button onClick={onRetake}>Retake Quiz</button>
      <button onClick={onHome}>Back to Home</button>
    </div>
  );
}

export default ResultCard;
