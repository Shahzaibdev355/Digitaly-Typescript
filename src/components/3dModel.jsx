import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const Modell = () => {
    const gltf = useLoader(GLTFLoader, '/images/Digitally Iphone Mock up 3D.gltf');
    return <primitive object={gltf.scene} />;
  };

const Model = () => {
    return ( 
        <Canvas>
        {/* Adjust the camera position and field of view */}
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={75} />
  
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
  
        {/* Model */}
        <Modell />
  
        {/* Controls */}
        <OrbitControls />
      </Canvas>
     );
}
 
export default Model;