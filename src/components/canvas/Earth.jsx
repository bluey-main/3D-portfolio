import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF('./earth2/scene.gltf');
  return (
    <primitive 
      object={scene}
      scale={0.18}  // Increase scale for better visibility
      position={[0, 0, 0]}  // Adjust position if needed
      rotation={[0, 0, 0]}
    />
  );
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        near: 0.1,
        far: 200,
        position: [5, 2, 10]  // Adjusted position
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <hemisphereLight intensity={0.35} groundColor="white" />
        <ambientLight intensity={0.5} />
        <directionalLight 
          color="#ffffff" 
          position={[5, 5, 5]} 
          intensity={1.5}
          castShadow
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;
