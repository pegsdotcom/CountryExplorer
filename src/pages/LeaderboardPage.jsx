import { useContext, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';
import '../styles/Leaderboardpage.css';

const regions = ['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'];

const LeaderboardPage = () => {
  const { results, setResults } = useContext(QuizContext);

  useEffect(() => {
    if (results.length === 0) {
      const stored = JSON.parse(localStorage.getItem('quizResults') || '[]');
      setResults(stored);
    }
  }, [results, setResults]);

  const getRegionResults = (region) => {
    return results
      .filter(r => r.region === region)
      .sort((a, b) => b.score - a.score);
  };

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      {regions.map(region => {
        const regionResults = getRegionResults(region);
        return (
          <div key={region} className="region-leaderboard">
            <h2>{region}</h2>
            {regionResults.length === 0 ? (
              <p>No results yet.</p>
            ) : (
              <ul className='leaderboard-list'>
                {regionResults.map((r, i) => (
                  <li key={i}>
                    <strong>{r.username}</strong> – {r.score} poäng
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LeaderboardPage;
