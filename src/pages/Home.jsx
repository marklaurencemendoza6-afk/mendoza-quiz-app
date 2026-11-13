
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-card">
        <div className="home-icon">📝</div>

        <h1>Mendoza Quiz App</h1>

        <p>
          Test your knowledge in Frontend Development!
          Challenge yourself and see how much you know.
        </p>

        <div className="quiz-info">
          <span>📚 10 Questions</span>
          <span>⏱️ Self-paced</span>
        </div>

        <button
          className="start-button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz →
        </button>
      </div>
    </div>
  );
}

export default Home;
