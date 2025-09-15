import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Countries from './components/Countries';


function App() {


  return (
    <Router>
    <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/Countries" element={<Countries />} />
    </Routes>
    </Router>
  )
}

export default App
