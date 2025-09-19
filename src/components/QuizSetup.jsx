import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const QuizSetup = ({ onStart }) => {
    const { username, setUsername, region, setRegion } = useContext(QuizContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username || !region) return;
       onStart(); 
  };
    return(
        <form onSubmit={handleSubmit} className='quiz-form'>
            <div>
                <label>Username:</label>
                  <input type="text" value={username}
                  onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div>
                <label>Choose region</label>
            <select value={region} 
                  onChange={(e) => setRegion(e.target.value)} required>
                <option value="">-- Choose --</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
                <option value="Africa">Africa</option>
            </select>
            </div>

        <button type="submit">Starta quiz</button>
        </form>
    )
};

export default QuizSetup;
