import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * A stylized "marble murti" — a carved abstract divine figure built from
 * procedural geometry: a lotus base, a body form, and a halo. Rendered with
 * a marble-like material (transmission + roughness) under HDR lighting.
 */

export function LotusBase() {
  const petals = useMemo(() => {
    const arr: { rot: number; tilt: number }[] = [];
    for (let i = 0; i < 8; i++) arr.push({ rot: (i / 8) * Math.PI * 2, tilt: 0.5 });
    return arr;
  }, []);
  return (
    <group position={[0, -1.4, 0]}>
      {/* base disc */}
      <mesh receiveShadow castShadow position={[0, -0.05, 0]}>
        <cylinderGeometry args={[1.7, 1.85, 0.18, 64]} />
        <meshStandardMaterial color="#f6f1ea" roughness={0.35} metalness={0.1} />
      </mesh>
      {petals.map((p, i) => (
        <mesh
          key={i}
          rotation={[p.tilt, p.rot, 0]}
          position={[
            Math.cos(p.rot) * 1.45,
            0.05,
            Math.sin(p.rot) * 1.45,
          ]}
          castShadow
        >
          <sphereGeometry args={[0.5, 24, 24, 0, Math.PI * 0.55, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color="#ece3d6" roughness={0.4} metalness={0.08} />
        </mesh>
      ))}
    </group>
  );
}

export function MurtiFigure() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.25;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Halo / prabhamandala */}
      <mesh position={[0, 1.7, -0.3]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.15, 0.05, 32, 80]} />
        <meshStandardMaterial
          color="#e2ad4f"
          emissive="#d4902f"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
      {/* inner halo ring */}
      <mesh position={[0, 1.7, -0.32]}>
        <torusGeometry args={[0.95, 0.025, 24, 64]} />
        <meshStandardMaterial color="#faf2dc" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial color="#fbf9f6" roughness={0.3} metalness={0.12} />
      </mesh>

      {/* Crown tip */}
      <mesh position={[0, 1.85, 0]} castShadow>
        <coneGeometry args={[0.12, 0.3, 16]} />
        <meshStandardMaterial color="#e2ad4f" metalness={0.7} roughness={0.3} emissive="#b97423" emissiveIntensity={0.2} />
      </mesh>

      {/* Body / torso — tapered form */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.62, 1.5, 48]} />
        <meshStandardMaterial color="#f6f1ea" roughness={0.32} metalness={0.14} />
      </mesh>

      {/* Shoulders */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#f6f1ea" roughness={0.32} metalness={0.14} />
      </mesh>

      {/* Arms (two) */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.55, 0.75, 0.1]} rotation={[0, 0, s * 0.35]} castShadow>
          <capsuleGeometry args={[0.12, 0.9, 8, 16]} />
          <meshStandardMaterial color="#f6f1ea" roughness={0.34} metalness={0.12} />
        </mesh>
      ))}

      {/* Folded hands / lap */}
      <mesh position={[0, 0.05, 0.35]} castShadow>
        <boxGeometry args={[0.5, 0.22, 0.4]} />
        <meshStandardMaterial color="#ece3d6" roughness={0.38} metalness={0.1} />
      </mesh>
    </group>
  );
}

function FloatingMarbleChunks() {
  const chunks = useMemo(
    () =>
      Array.from({ length: 7 }, () => ({
        pos: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4 + 1,
          (Math.random() - 0.5) * 3 - 1,
        ] as [number, number, number],
        scale: Math.random() * 0.18 + 0.08,
        speed: Math.random() * 0.5 + 0.3,
        rot: [Math.random(), Math.random(), Math.random()] as [number, number, number],
      })),
    []
  );
  return (
    <>
      {chunks.map((c, i) => (
        <Float key={i} speed={c.speed} rotationIntensity={0.6} floatIntensity={1.2}>
          <mesh position={c.pos} rotation={c.rot} scale={c.scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#ece3d6" roughness={0.4} metalness={0.15} flatShading />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.12) * 1.6;
    camera.position.y = 1.2 + Math.sin(t * 0.18) * 0.25;
    camera.position.z = 5.5 + Math.cos(t * 0.1) * 0.5;
    camera.lookAt(0, 0.6, 0);
  });
  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} castShadow color="#fff5e0" />
      <directionalLight position={[-5, 3, -2]} intensity={0.6} color="#e2ad4f" />
      <spotLight position={[0, 7, 3]} intensity={1.2} angle={0.5} penumbra={1} color="#faf2dc" />

      <Suspense fallback={null}>
        <group position={[0, -0.4, 0]}>
          <MurtiFigure />
          <LotusBase />
        </group>
        <FloatingMarbleChunks />

        {/* glass floor for reflection */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.4, 0]}>
          <planeGeometry args={[20, 20]} />
          <MeshTransmissionMaterial
            thickness={0.5}
            roughness={0.15}
            transmission={1}
            ior={1.3}
            chromaticAberration={0.02}
            color="#f6f1ea"
          />
        </mesh>

        <ContactShadows position={[0, -2.35, 0]} opacity={0.4} scale={10} blur={2.4} far={4} color="#4a3d31" />
        <Environment preset="studio" />
      </Suspense>
      <CameraRig />
    </>
  );
}

export default function MarbleIdolScene({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [0, 1.2, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
