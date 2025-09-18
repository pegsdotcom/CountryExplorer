import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// någonstans i din kod (ex: App.jsx eller main.js)
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import './index.css';
import Home from './pages/Home';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Collection from './components/Collection';

function App() {


  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Countries" element={<Countries />} />
    <Route path='/Countries/:countryName' element={<CountryDetails />} />
    <Route path="/collection" element={<Collection />} />
    </Routes>
    </Router>
  )
}

export default App
