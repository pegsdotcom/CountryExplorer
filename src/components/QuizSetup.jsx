import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import '../styles/Quiz.css';

const QuizSetup = ({ onStart }) => {
    const { username, setUsername, region, setRegion } = useContext(QuizContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !region) return;
        onStart();
    };

    return (
        <form onSubmit={handleSubmit} className="quiz-form">
            <h1 className="quiz-title">Get Ready for the Quiz</h1>
            <div className="form-group">
                <label className="quiz-label" htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} 
                className="quiz-input" placeholder="Type in your username" required/>
            </div>
            
            <div className="form-group">
                <label className="quiz-label" htmlFor="region">Where are you playing from?</label>
                <select id="region" value={region} onChange={(e) => setRegion(e.target.value)}
                className="quiz-select" required>

                    <option value="">-- Select a region --</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                    <option value="Africa">Africa</option>
                </select>
            </div>
            <button type="submit" className="quiz-btn">I’m Ready</button>
        </form>
    );
};

export default QuizSetup;

