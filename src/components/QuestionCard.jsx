
import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect
}) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <div className="answers-container">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selected={selectedAnswer === option}
            onClick={() => onAnswerSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
