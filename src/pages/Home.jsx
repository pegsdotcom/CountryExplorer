import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'; 

const cardsData = [
  {
    title: "Study Countries",
    description: "Explore the physical features and landscapes of different countries.",
    image: "/images/studycountries.jpg",
    buttonText: "Learn More",
    path: "/Countries",
  },
  {
    title: "Culture & Traditions",
    description: "Dive into the customs and lifestyles that define each place.",
    image: "/images/collection.jpg",
    buttonText: "Discover",
    path: "/Collection",
  },
  {
    title: "Population Statistics",
    description: "Understand how people are spread across the world.",
    image: "/images/quiz.jpg",
    buttonText: "Explore",
    path: "/Quiz",
  },
  {
    title: "Historical Stories",
    description: "Uncover the events and stories that shaped nations.",
    image: "/images/leaderboard.jpg",
    buttonText: "Read More",
    path: "/Leaderboard",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
 
  <h1 className="home-title">Dive Into Global Stories and Statistics</h1>
    <div className="cards-section">
      {cardsData.map(({ title, description, image, buttonText, path }, index) => (
        <div key={index} className="glass-card">

    <div className="card-image">
        <img src={image} />
    </div>
    <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => navigate(path)}>{buttonText}</button>
    </div>
    </div>

      ))}
    </div>

      <Footer />
    </>
  );
};

export default Home;


    
  
  

    


