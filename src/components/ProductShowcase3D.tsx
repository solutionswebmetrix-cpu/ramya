import { Suspense, lazy, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { RotateCw, ZoomIn, Move } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';

// Reuse the murti figure building blocks
import { MurtiFigure, LotusBase } from './MarbleIdolScene';

const ShowcaseScene = () => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[4, 6, 5]} intensity={1.5} castShadow color="#fff5e0" />
    <directionalLight position={[-5, 3, -2]} intensity={0.7} color="#e2ad4f" />
    <spotLight position={[0, 8, 4]} intensity={1.4} angle={0.5} penumbra={1} color="#faf2dc" />

    <Suspense fallback={null}>
      <group position={[0, -0.4, 0]}>
        <MurtiFigure />
        <LotusBase />
      </group>
      {/* floating accent chunks */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[2.4, 1.4, -1]} scale={0.18}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#e2ad4f" metalness={0.6} roughness={0.3} flatShading />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[-2.6, 0.6, -0.5]} scale={0.14}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#ece3d6" metalness={0.2} roughness={0.4} flatShading />
        </mesh>
      </Float>

      <ContactShadows position={[0, -2.4, 0]} opacity={0.5} scale={12} blur={2.4} far={4} color="#4a3d31" />
      <Environment preset="studio" />
    </Suspense>
  </>
);

const TIPS = [
  { icon: RotateCw, label: 'Drag to rotate' },
  { icon: ZoomIn, label: 'Scroll to zoom' },
  { icon: Move, label: 'Right-drag to pan' },
];

export default function ProductShowcase3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-marble-950 py-24 md:py-32" style={{ background: 'radial-gradient(ellipse at 50% 40%, #2a2218 0%, #14100b 70%, #0a0805 100%)' }}>
      {/* gold ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,144,47,0.3), transparent 70%)' }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="3D Atelier"
          light
          title={<>Inspect Every <span className="gold-text">Chisel Stroke</span></>}
          intro="Rotate, zoom and examine our marble murti from every angle. The same precision you see here is what you receive."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* 3D viewport */}
          <Reveal>
            <div
              ref={containerRef}
              className="relative h-[60vh] overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-marble-900/40 to-marble-950/60 backdrop-blur-sm md:h-[70vh]"
            >
              <Canvas shadows dpr={[1, 1.8]} camera={{ position: [0, 1.2, 6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
                <ShowcaseScene />
                <OrbitControls
                  enablePan
                  enableZoom
                  enableRotate
                  minDistance={3.5}
                  maxDistance={9}
                  minPolarAngle={Math.PI * 0.15}
                  maxPolarAngle={Math.PI * 0.85}
                  autoRotate
                  autoRotateSpeed={0.6}
                />
              </Canvas>

              {/* control hints */}
              <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-5 rounded-full bg-marble-950/60 px-5 py-2.5 backdrop-blur-md">
                {TIPS.map((t) => (
                  <div key={t.label} className="flex items-center gap-2 text-marble-300">
                    <t.icon className="h-3.5 w-3.5 text-gold-400" />
                    <span className="text-[0.6rem] uppercase tracking-[0.2em]">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* side panel */}
          <div className="flex flex-col justify-center gap-6">
            {[
              { t: 'Premium Lighting', d: 'Studio HDR environment reveals the marble\'s true luminosity and the gold halo\'s warmth.' },
              { t: 'Marble Material', d: 'Physical-based rendering shows accurate subsurface scattering and subtle veining.' },
              { t: 'Real-time Reflection', d: 'The contact shadow and reflective floor simulate how the murti sits in your sanctum.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="font-serif-lux text-xl font-semibold text-marble-100">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-marble-300">{c.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="font-serif-lux text-lg italic text-gold-300">
                "Every angle reveals what the hands of devotion have shaped."
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
