import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { sampleData } from '../data/sampleData';
import { convertToSphericalCoords } from '../utils/sphereUtils';

function Point({ position, color = 'orange' }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Sphere3DScene() {
  const points = convertToSphericalCoords(sampleData);
  const linePoints = points.map((p) => [p.x, p.y, p.z]);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas camera={{ position: [2, 2, 2], fov: 60 }}>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls />

        {/* 점들 */}
        {points.map((p, idx) => (
          <Point key={idx} position={[p.x, p.y, p.z]} />
        ))}

        {/* 선으로 연결 */}
        <Line points={linePoints} color="cyan" lineWidth={1} dashed={false} />

        {/* 좌표축 */}
        <axesHelper args={[1.5]} />
      </Canvas>
    </div>
  );
}
