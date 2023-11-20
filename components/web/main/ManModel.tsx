import { Canvas, useLoader } from "@react-three/fiber";
import { PCDLoader } from "three/addons/loaders/PCDLoader.js";
import * as THREE from "three";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitProps } from "three-stdlib";

const Model = () => {
  return (
    <Canvas dpr={[5, 2]} camera={{ position: [0, 0, 1], fov: 25 }}>
      <directionalLight position={[10, 10, 0]} intensity={1.5} />
      <directionalLight position={[-10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 20, 0]} intensity={1.5} />
      <directionalLight position={[0, -10, 0]} intensity={0.25} />
      <Suspense fallback={null}>
        <ModelContainer />
      </Suspense>
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.05}
        position={[0, 1, 15]}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />
    </Canvas>
  );
};

const ModelContainer = () => {
  const loader = useMemo(() => new PCDLoader(), []);
  const scene = useMemo(() => new THREE.Scene(), []);
  useEffect(() => {
    loader.load("./Zaghetto.pcd", function (points) {
      points.geometry.center();
      points.geometry.rotateX(3.2);
      points.name = "Zaghetto.pcd";
      scene.add(points);
      // console.log(positions)
      scene.rotateY(-0.9);
      scene.traverse((child) => {
        if (child instanceof THREE.Points) {
          const pointsMaterial = child.material as THREE.PointsMaterial;
          if (pointsMaterial) {
            pointsMaterial.color.set("#bca6ed"); // Set color to red (you can use any valid color representation)
          }
        }
      });
    });
  }, [loader, scene]);

  return <primitive object={scene} />;
};

export default function ManModel() {
  return <Model />;
}
