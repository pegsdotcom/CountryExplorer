import Header from "../components/Header";
import Footer from "../components/Footer";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedModel from '../components/AnimatedModel';

const cardsData = [
  {
    title: "Study Countries",
    description: "Explore the physical features and landscapes of different countries.",
    image: "/images/studycountries.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Culture & Traditions",
    description: "Dive into the customs and lifestyles that define each place.",
    image: "/images/collection.jpg",
    buttonText: "Discover",
  },
  {
    title: "Population Statistics",
    description: "Understand how people are spread across the world.",
    image: "/images/quiz.jpg",
    buttonText: "Explore",
  },
  {
    title: "Historical Stories",
    description: "Uncover the events and stories that shaped nations.",
    image: "/images/leaderboard.jpg",
    buttonText: "Read More",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      {/* <div className="home-container">
     

        <div className="model-and-text">
      
          <div className="canvas-wrapper">
            <Canvas
              style={{ width: '100%', height: '100%', display: 'block' }}
              camera={{ position: [0, 1.2, 4.5], fov: 45 }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 5, 2]} intensity={1.2} />
              <AnimatedModel />
              <OrbitControls
                enableRotate={false}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 2.8}
              />
            </Canvas>
          </div>

      
        <h1 className="home-title">
      Say Hello to Your Guide — Where Do You Want to Start?
    </h1>

          </div>
        </div> */}
        <h1 className="home-title">Dive Into Global Stories and Statistics</h1>
    <div className="cards-section">
      {cardsData.map(({ title, description, image, buttonText }, index) => (
        <div key={index} className="glass-card">
          <div className="card-image">
            <img src={image} />
          </div>
          <div className="card-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  <Footer />
    </>
  );
};

export default Home;


    
  
  

    


