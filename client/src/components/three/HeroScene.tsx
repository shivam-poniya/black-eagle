import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function BackgroundParticles() {
  const count = 1000;
  // Memoize positions to prevent recalculation on every re-render
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#3b82f6" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function FloatingCore() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#0f172a"
          speed={3}
          distort={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <Sphere args={[1.1, 32, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-background">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ powerPreference: "high-performance", antialias: false }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        
        <BackgroundParticles />
        <FloatingCore />
        
        <fog attach="fog" args={["white", 5, 15]} />
      </Canvas>
    </div>
  );
}
