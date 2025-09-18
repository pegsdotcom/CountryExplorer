import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef} from 'react';

const AnimatedModel = () => {
  const modelRef = useRef();
  const gltf = useGLTF('/models/gusModel.glb'); 

  useFrame(() => {
    const t = performance.now() / 1000;
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(t) * 0.20 - 1; 
    }
  });

  return (
  <primitive
  ref={modelRef}
  object={gltf.scene}
  scale={0.35}  
  position={[0, -1, 0]} 
  rotation={[0, 4 * Math.PI / 2 - 0, 0]}  
/>

  );
};

export default AnimatedModel;
