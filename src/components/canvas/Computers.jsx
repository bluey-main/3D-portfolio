import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('/desktop_pc/scene.gltf'); // Ensure this path is correct
  return (
    <primitive 
      object={scene} 
      scale={isMobile ? 0.4 : 0.75} 
      position={isMobile? [0, -1.25, -1.2]:[0, -3.25, -1.5]} 
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <hemisphereLight intensity={0.15} groundColor="orange" />
        <ambientLight intensity={4}  position={[20, 30, 10]}/>
       <directionalLight color="#273469" position={[2, 0, 5]} />
        <Computers isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
