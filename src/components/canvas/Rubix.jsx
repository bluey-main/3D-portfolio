import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";


const Rubix = () => {
    const { scene, animations } = useGLTF("./rubix2/scene.gltf");
    const { ref, mixer, names, actions } = useAnimations(animations, scene);
  
    useEffect(() => {
      if (actions && names.length > 0) {
        actions[names[0]].reset().play().setLoop(THREE.LoopRepeat, Infinity); // Ensure the animation loops infinitely
      }
    }, [actions, names]);
  
    useFrame((state, delta) => {
      const animationSpeedFactor = 0.003; // Reduce animation speed by half
      mixer.update(delta * animationSpeedFactor); // Scale delta to slow down animation
    });
  
    return <primitive ref={ref} object={scene} scale={8} position={[-10, -3, 0]} />;
  };

const RubixCanvas = () => {
  return (
    <Canvas
    frameloop="always"
    // shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <hemisphereLight
        intensity={2}
        groundColor="white"
        position={[-10, 5, 5]}
      />
      <directionalLight
        color="#ffffff"
        position={[-10, 0, 5]}
        intensity={2}
        // castShadow
      />
      <ambientLight intensity={2} position={[0, 0, 1]} />
      <Rubix />
      <Preload all />
    </Suspense>
  </Canvas>
  )
}

export default RubixCanvas