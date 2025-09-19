import { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';

const Quiz = ({ onFinish }) => {
  const {questions, currentIndex, currentAnswer,score, nextQuestion,saveResult} = useContext(QuizContext);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  if (!questions.length) return <div>Laddar frågor...</div>;

  const currentQuestion = questions[currentIndex];
  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = currentAnswer(userInput);
    setFeedback(isCorrect);

    setTimeout(() => {
      setFeedback(null);
      setUserInput('');
      if (currentIndex + 1 >= questions.length) {
        saveResult();
        onFinish();
      } else {
        nextQuestion();
      }
    }, 2000);
  };

  return (
    <div className="quiz-question">
      <img src={currentQuestion.flags.png} alt="Flag" width={200} />

      <form onSubmit={handleSubmit}>
        <input
          type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}
          disabled={feedback !== null} required autoFocus/>

        <button type="submit" disabled={feedback !== null}>Check your answers</button>
      </form>

      {feedback !== null && (
        <div>
          {feedback
            ? '✅ Correct!'
            : `❌ Wrong! Right answer is: ${currentQuestion.name.common}`}
        </div>
      )}

      <p>Question {currentIndex + 1} of {questions.length}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;

