import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import CollectionPage from './pages/CollectionPage';
import QuizPage from './pages/QuizPage';
import LeaderboardPage from './pages/LeaderboardPage';
import CountriesPage from './pages/CountriesPage';
import Navbar from './components/Navbar';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Countries' element={<CountriesPage />} />
        <Route path='/Countries/:countryName' element={<DetailsPage />} />
        <Route path="/Collection" element={<CollectionPage />} />
        <Route path="/Quiz" element={<QuizPage />} />
        <Route path="/Leaderboard" element={<LeaderboardPage />} />
    </Routes>
  </Router>
  )
}

export default App
