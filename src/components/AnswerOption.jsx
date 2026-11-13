
function AnswerOption({ option, selected, onClick, disabled }) {
  return (
    <button
      className={`answer-option ${selected ? "selected" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {option}
    </button>
  );
}

export default AnswerOption;
