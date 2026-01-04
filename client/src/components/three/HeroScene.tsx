import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Fallback Animated Background for environments without WebGL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
      
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute inset-4 rounded-full border border-blue-500/20 border-dashed animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-8 rounded-full border border-blue-400/10 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-900 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
