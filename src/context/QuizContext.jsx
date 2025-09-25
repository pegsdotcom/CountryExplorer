import { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [region, setRegion] = useState('');
    const [countries, setCountries] = useState([]); 
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [results, setResults] = useState([]);

  useEffect(() => {
    if(!region) return;

const fetchCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();
    const filtered = data.filter(c => c.name && c.name.common && c.flags && c.flags.png);
        setCountries(filtered);
            };
        fetchCountries();
            }, [region]);
            
  useEffect(() => {
    if (countries.length === 0) return;
    const shuffled = [...countries].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(15, shuffled.length));
      setQuestions(selected);
      setCurrentIndex(0);
      setScore(0);
      }, [countries]);

const currentAnswer = (userAnswer) => {
    const { name: { common: correct } } = questions[currentIndex];
    const normalize = str => str.toLowerCase();
    const isCorrect = normalize(userAnswer) === normalize(correct);
      if (isCorrect) setScore(prev => prev + 1);
        return isCorrect;
};

const nextQuestion = () => {
    setCurrentIndex(i => i + 1);
  };

const resetQuiz = () => {
    setQuestions([]);
    setCountries([]);
    setRegion('');
    setCurrentIndex(0);
    setScore(0);
  };

const saveResult = () => {
  const stored = JSON.parse(localStorage.getItem('quizResults') || '[]');
  const newResult = { username, region, score, date: new Date().toISOString() };
  const updated = [...stored, newResult];

  localStorage.setItem('quizResults', JSON.stringify(updated));
  setResults(updated);
};

return (
    <QuizContext.Provider value={{
      username, setUsername, region, setRegion, questions, 
      currentIndex, score, currentAnswer, nextQuestion, 
      saveResult, resetQuiz, results, setResults,}}>
      {children}
    </QuizContext.Provider>
  );
};



