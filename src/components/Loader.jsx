import React from 'react';
import { Html, useProgress } from '@react-three/drei';
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className='canvas-load'>
        <p style={{
          fontSize: 45, 
          color: '#F1F1F1', 
          fontWeight: 800,
          marginTop: 40
        }}> {progress.toFixed(2)}% </p>
      </span>
    </Html>
  );
};

export default Loader;
