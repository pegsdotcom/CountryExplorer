import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedModel from '../components/AnimatedModel';
const Quiz = () => {
    return (  
        <>
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
        </>
    );
}
 
export default Quiz;