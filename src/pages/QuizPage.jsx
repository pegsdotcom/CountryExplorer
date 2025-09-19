import { useState, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuizSetup from '../components/QuizSetup';
import Quiz from '../components/Quiz';

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
    <div>
      <h2>Quiz klart!</h2>
      <p>
        Hej <strong>{username}</strong>, du fick <strong>{score}</strong> av {questions.length} rätt!
      </p>
      <button onClick={handleRestart}>Starta om quizet</button>
    </div>
  );
};

export default QuizPage;



