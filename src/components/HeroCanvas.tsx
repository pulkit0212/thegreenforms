"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.08;
    meshRef.current.rotation.y = Math.cos(t * 0.12) * 0.1;
    meshRef.current.position.y = Math.sin(t * 0.2) * 0.15;
  });

  return (
    <mesh ref={meshRef} scale={[3.5, 2.2, 0.05]}>
      <boxGeometry args={[1, 1, 1, 16, 16, 1]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.3}
        chromaticAberration={0.02}
        anisotropicBlur={0.1}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.1}
        transmission={0.95}
        roughness={0.15}
        color="#e8e0d5"
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function SlowDriftCamera() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.08) * 0.5;
    state.camera.position.y = Math.cos(t * 0.06) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function FallbackPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.12 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          float pattern = sin(vUv.x * 6.0 + uTime * 0.3) * cos(vUv.y * 4.0 + uTime * 0.2);
          float alpha = smoothstep(-0.3, 0.3, pattern) * uOpacity;
          gl_FragColor = vec4(0.77, 0.65, 0.45, alpha);
        }
      `,
      transparent: true,
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.08;
    meshRef.current.rotation.y = Math.cos(t * 0.12) * 0.1;
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    if (mat.uniforms) mat.uniforms.uTime.value = t;
  });

  return (
    <mesh ref={meshRef} scale={[3.5, 2.2, 1]}>
      <planeGeometry args={[1, 1, 16, 16]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
}

export default function HeroCanvas() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <SlowDriftCamera />
        {isMobile ? <FallbackPlane /> : <GlassPlane />}
      </Canvas>
    </div>
  );
}
