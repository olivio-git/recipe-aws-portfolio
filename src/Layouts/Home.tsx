import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Box, Html, OrbitControls, OrthographicCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DirectionalLightShadow, Mesh, DirectionalLight, PerspectiveCamera } from 'three';

const LightIndicator: React.FC<{ position: [number, number, number] }> = ({ position }) => {
 return (
    <mesh position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
 );
};

const ModelComponent: React.FC = () => {
 const fileUrl = './src/assets/Models/scene.gltf'; // Asegúrate de ajustar la ruta al archivo de tu modelo
 const mesh = useRef<Mesh>(null!);
 const gltf = useLoader(GLTFLoader, fileUrl);

 useFrame(() => {
    mesh.current.rotation.y += 0;
 });

 return (
    <mesh ref={mesh} receiveShadow>
      <primitive object={gltf.scene} />
    </mesh>
 );
};

const Floor: React.FC = () => {
 return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="#61c0bf" />
    </mesh>
 );
};

export const Home: React.FC = () => {
 return (
    <div className="flex justify-center items-center w-full h-screen">
      <Canvas className="w-full h-full bg-[#131212]" shadows>
        <OrbitControls />
        <ambientLight intensity={0.1} />  
        <directionalLight 
          position={[0, 0, 6]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        /> 
        <perspectiveCamera position={[0,10,2]}  />
        <ModelComponent />
        <Floor /> 
      </Canvas>
    </div>
 );
};
