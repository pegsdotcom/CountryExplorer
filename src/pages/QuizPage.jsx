import { useState, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuizSetup from '../components/QuizSetup';
import Quiz from '../components/Quiz';
import '../styles/Quiz.css';

const QuizPage = () => {
  const { score, questions, username, resetQuiz } = useContext(QuizContext);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    setQuizStarted(false);
  };

  const handleRestart = () => {
    resetQuiz();
    setQuizStarted(false);
    setQuizFinished(false);
  };

  if (!quizStarted && !quizFinished) {
    return <QuizSetup onStart={startQuiz} />;
  }
  if (quizStarted) {
    return <Quiz onFinish={finishQuiz} />;
  }
  return (
    <div className="quiz-result">
      <h2>Quiz done!</h2>
      <p>Hello <strong>{username}</strong>, you got <strong>{score}</strong> of {questions.length} correct!</p>
        <div className="quiz-buttons">
          <button onClick={handleRestart}>Reset quiz</button>
        </div>
    </div>

  );
};

export default QuizPage;



