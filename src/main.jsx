import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CountriesProvider } from './context/CountriesContext';
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { QuizProvider } from './context/QuizContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountriesProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </CountriesProvider>
  </StrictMode>,
)
