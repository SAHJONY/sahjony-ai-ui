'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (groupRef.current) {
      const animate = () => {
        groupRef.current!.rotation.y += 0.001;
        groupRef.current!.rotation.x += 0.0005;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central AI Core */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#6366f1" 
          emissive="#6366f1" 
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Orbiting Nodes */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[
            Math.cos(i * 0.5) * 3,
            Math.sin(i * 0.5) * 3,
            Math.cos(i * 0.3) * 2
          ]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? '#8b5cf6' : '#ec4899'} 
              emissive={i % 2 === 0 ? '#8b5cf6' : '#ec4899'}
              emissiveIntensity={1.5}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Connecting Lines */}
      {[...Array(30)].map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#6366f1" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <NeuralNetwork />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
