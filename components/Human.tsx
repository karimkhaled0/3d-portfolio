"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { BufferGeometryLoader } from "three";

interface ModelProps {
  url: string;
}

export default function Human() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [1, 0.1, 4], fov: 25 }}>
      <directionalLight position={[10, 10, 0]} intensity={1.5} />
      <directionalLight position={[-10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 20, 0]} intensity={1.5} />
      <directionalLight position={[0, -10, 0]} intensity={0.25} />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.05}
        position={[0, 1, 2]}
      />

      {/* <ModelJson scale={0.01} /> */}
      <Model url="/statue_of_edward_snowden.glb" />
    </Canvas>
  );
}

const ModelJson = ({ scale = 1 }) => {
  const json = useLoader(BufferGeometryLoader, "/human-model2.json");
  return (
    <mesh scale={[scale, scale, scale]} geometry={json}>
      <meshStandardMaterial />
    </mesh>
  );
};

function Model({ url, ...props }: ModelProps) {
  const { scene } = useGLTF(url);
  const json = useLoader(BufferGeometryLoader, url);

  scene.scale.set(0.1, 0.1, 0.1);
  scene.rotateY(5);
  return <primitive object={scene} {...props} />;
}
