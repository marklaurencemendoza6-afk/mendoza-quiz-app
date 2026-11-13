
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const totalQuestions = location.state?.totalQuestions ?? 10;

  return (
    <div className="result-page">
      <ResultCard
        score={score}
        totalQuestions={totalQuestions}
        onRetake={() => navigate("/quiz")}
        onHome={() => navigate("/")}
      />
    </div>
  );
}

export default Result;
