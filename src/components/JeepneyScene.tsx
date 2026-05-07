import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function JeepneyBody() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.25
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main body */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[2.4, 0.9, 1.1]} />
        <meshStandardMaterial color="#1a5c30" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Roof with slight dome */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <boxGeometry args={[2.2, 0.22, 1.05]} />
        <meshStandardMaterial color="#0f3d1f" metalness={0.7} roughness={0.15} />
      </mesh>

      {/* Front face */}
      <mesh position={[1.21, 0.22, 0]} castShadow>
        <boxGeometry args={[0.05, 0.85, 1.05]} />
        <meshStandardMaterial color="#236b35" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Front windshield */}
      <mesh position={[1.0, 0.38, 0]}>
        <boxGeometry args={[0.45, 0.42, 0.85]} />
        <meshStandardMaterial color="#a8e6c3" metalness={0.1} roughness={0.05} transparent opacity={0.35} />
      </mesh>

      {/* Side windows left */}
      {[-0.6, 0.1, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.35, 0.56]}>
          <boxGeometry args={[0.5, 0.32, 0.04]} />
          <meshStandardMaterial color="#a8e6c3" metalness={0.1} roughness={0.05} transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Side windows right */}
      {[-0.6, 0.1, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.35, -0.56]}>
          <boxGeometry args={[0.5, 0.32, 0.04]} />
          <meshStandardMaterial color="#a8e6c3" metalness={0.1} roughness={0.05} transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Decorative stripe */}
      <mesh position={[0, 0.05, 0.56]}>
        <boxGeometry args={[2.38, 0.08, 0.02]} />
        <meshStandardMaterial color="#e8b84b" metalness={0.8} roughness={0.1} emissive="#e8b84b" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.05, -0.56]}>
        <boxGeometry args={[2.38, 0.08, 0.02]} />
        <meshStandardMaterial color="#e8b84b" metalness={0.8} roughness={0.1} emissive="#e8b84b" emissiveIntensity={0.3} />
      </mesh>

      {/* Front grille */}
      <mesh position={[1.22, -0.05, 0]}>
        <boxGeometry args={[0.04, 0.3, 0.8]} />
        <meshStandardMaterial color="#0a2010" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Headlights */}
      <mesh position={[1.22, 0.15, 0.3]}>
        <boxGeometry args={[0.04, 0.14, 0.18]} />
        <meshStandardMaterial color="#fffde0" emissive="#fffde0" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[1.22, 0.15, -0.3]}>
        <boxGeometry args={[0.04, 0.14, 0.18]} />
        <meshStandardMaterial color="#fffde0" emissive="#fffde0" emissiveIntensity={1.5} />
      </mesh>

      {/* Wheels */}
      {[
        [0.85, -0.26, 0.58],
        [0.85, -0.26, -0.58],
        [-0.7, -0.26, 0.58],
        [-0.7, -0.26, -0.58],
      ].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.12, 24]} />
            <meshStandardMaterial color="#111" metalness={0.2} roughness={0.8} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 0.14, 16]} />
            <meshStandardMaterial color="#3a3a3a" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.15, 8]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.95} roughness={0.05} />
          </mesh>
        </group>
      ))}

      {/* Undercarriage */}
      <mesh position={[0, -0.21, 0]}>
        <boxGeometry args={[2.3, 0.1, 0.9]} />
        <meshStandardMaterial color="#0a1f0f" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Exhaust pipe */}
      <mesh position={[-1.22, -0.15, -0.35]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Roof rack/antenna */}
      <mesh position={[0.5, 0.85, 0]}>
        <boxGeometry args={[0.04, 0.25, 0.04]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* "E-Jeepney" signage glow */}
      <pointLight position={[1.3, 0.4, 0]} color="#7bc47a" intensity={2} distance={2} />
      <pointLight position={[0, 0.9, 0]} color="#a8e6a3" intensity={0.5} distance={3} />
    </group>
  )
}

function FloatingParticles() {
  const count = 60
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  const meshRef = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.04
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#7bc47a" transparent opacity={0.6} />
    </points>
  )
}

function GlowOrb() {
  return (
    <Sphere args={[1.8, 32, 32]} position={[0, 0, -2]}>
      <MeshDistortMaterial
        color="#1a5c30"
        transparent
        opacity={0.15}
        distort={0.4}
        speed={2}
      />
    </Sphere>
  )
}

function Road() {
  return (
    <group position={[0, -0.7, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial color="#0f1a0f" metalness={0.1} roughness={0.9} />
      </mesh>
      {/* Road markings */}
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <mesh key={i} position={[x * 1.2, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.5, 0.08]} />
          <meshStandardMaterial color="#2d5a3d" />
        </mesh>
      ))}
    </group>
  )
}

export default function JeepneyScene() {
  return (
    <Canvas
      camera={{ position: [3.5, 1.8, 3.5], fov: 45 }}
      shadows
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} color="#a8e6a3" />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#e8f0e8"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 4, -4]} intensity={0.8} color="#4a8c5c" />
      <pointLight position={[4, -2, 4]} intensity={0.3} color="#7bc47a" />

      <Environment preset="forest" />

      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <JeepneyBody />
      </Float>

      <Road />
      <FloatingParticles />
      <GlowOrb />
    </Canvas>
  )
}
