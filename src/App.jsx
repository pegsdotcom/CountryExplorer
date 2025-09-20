import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './index.css';
import Home from './pages/Home';
import Countries from './components/Countries';
import DetailsPage from './pages/DetailsPage';
import CollectionPage from './pages/CollectionPage';
import QuizPage from './pages/QuizPage';
import LeaderboardPage from './pages/LeaderboardPage';

function App() {


  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Countries' element={<Countries />} />
    <Route path='/Countries/:countryName' element={<DetailsPage />} />
    <Route path="/Collection" element={<CollectionPage />} />
    <Route path="/Quiz" element={<QuizPage />} />
    <Route path="/Leaderboard" element={<LeaderboardPage />} />

    </Routes>
    </Router>
  )
}

export default App
