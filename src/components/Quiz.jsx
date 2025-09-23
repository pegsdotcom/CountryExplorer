import { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import '../styles/Quiz.css';

const Quiz = ({ onFinish }) => {
  const {questions, currentIndex, currentAnswer, score, nextQuestion, saveResult,} = useContext(QuizContext);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  if (!questions.length) return <div>Laddar frågor...</div>;
  const { flags, name } = questions[currentIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = currentAnswer(userInput);
    setFeedback(isCorrect);

    setTimeout(() => {
      setFeedback(null);
      setUserInput('');
      currentIndex + 1 >= questions.length ? (saveResult(), onFinish()) : nextQuestion();
    }, 2000);
  };

  return (
    <div className="quiz-question">
      <h2 className="question-title">Can you name this country?</h2>
      <img src={flags.png} alt="Flag" width={200} />

      <form onSubmit={handleSubmit}>
        <input
          type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}
          disabled={feedback !== null} required className='submit-label'/>
        <button type="submit" disabled={feedback !== null} className='quiz-check'>Let’s find out!</button>
      </form>

      {feedback !== null && (
        <div className='feedback'>
          {feedback ? '✅ Correct!' : `❌ Wrong! Right answer is: ${name.common}`}
        </div>
      )}

      <p className='quiz-p'>Question {currentIndex + 1} of {questions.length}</p>
      <p className='quiz-p'>Score: {score}</p>
    </div>
  );
};

export default Quiz;


