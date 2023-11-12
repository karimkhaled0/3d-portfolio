"use client";
// pnpm i @react-three/drei @react-three/fiber orbit-controls three @types/three
import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const textures = {
  texture:
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg",
  displacement:
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg",
  // ao: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg",
};

function Scene() {
  const [colorMap, displacementMap, aoMap] = useLoader(THREE.TextureLoader, [
    textures.texture,
    textures.displacement,
  ]);

  const moon = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    moon.current!.rotation.y = elapsedTime / 6;
  });

  return (
    <mesh ref={moon}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        aoMap={aoMap}
        displacementScale={0}
      />
    </mesh>
  );
}

export default function Moon() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        {/* <Stars /> */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-0.5} />
        <Scene />
      </Canvas>
    </>
  );
}
